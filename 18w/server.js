require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();

// Add CORS and static file middleware
app.use(cors());
app.use(express.static(path.join(__dirname)));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB Atlas
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

// Define Song Schema
const songSchema = new mongoose.Schema({
    songname: String,
    film: String,
    music_director: String,
    singer: String,
    actor: String,
    actress: String
});

const Song = mongoose.model('Song', songSchema);

// Initial song data
const initialSongs = [
    {
        songname: "Tum Hi Ho",
        film: "Aashiqui 2",
        music_director: "Mithoon",
        singer: "Arijit Singh",
        actor: "Aditya Roy Kapur",
        actress: "Shraddha Kapoor"
    },
    {
        songname: "Kesariya",
        film: "Brahmastra",
        music_director: "Pritam",
        singer: "Arijit Singh",
        actor: "Ranbir Kapoor",
        actress: "Alia Bhatt"
    },
    {
        songname: "Channa Mereya",
        film: "Ae Dil Hai Mushkil",
        music_director: "Pritam",
        singer: "Arijit Singh",
        actor: "Ranbir Kapoor",
        actress: "Anushka Sharma"
    },
    {
        songname: "Gerua",
        film: "Dilwale",
        music_director: "Pritam",
        singer: "Arijit Singh",
        actor: "Shah Rukh Khan",
        actress: "Kajol"
    },
    {
        songname: "Raabta",
        film: "Agent Vinod",
        music_director: "Pritam",
        singer: "Arijit Singh",
        actor: "Saif Ali Khan",
        actress: "Kareena Kapoor"
    }
];

// Routes
// Add a route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Display all songs
app.get('/songs', async (req, res) => {
    const songs = await Song.find();
    const count = await Song.countDocuments();
    res.json({ count, songs });
});

// Get songs by music director
app.get('/songs/director/:director', async (req, res) => {
    const songs = await Song.find({ music_director: req.params.director });
    res.json(songs);
});

// Get songs by music director and singer
app.get('/songs/director/:director/singer/:singer', async (req, res) => {
    const songs = await Song.find({
        music_director: req.params.director,
        singer: req.params.singer
    });
    res.json(songs);
});

// Get songs by singer and film
app.get('/songs/singer/:singer/film/:film', async (req, res) => {
    const songs = await Song.find({
        singer: req.params.singer,
        film: req.params.film
    });
    res.json(songs);
});

// Add a new song
app.post('/songs', async (req, res) => {
    const song = new Song(req.body);
    await song.save();
    res.json(song);
});

// Delete a song
app.delete('/songs/:id', async (req, res) => {
    await Song.findByIdAndDelete(req.params.id);
    res.json({ message: 'Song deleted successfully' });
});

// Update song with actor and actress
app.put('/songs/:id', async (req, res) => {
    const song = await Song.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
    );
    res.json(song);
});

// Initialize database with sample data
app.get('/init', async (req, res) => {
    await Song.deleteMany({});
    await Song.insertMany(initialSongs);
    res.json({ message: 'Database initialized with sample data' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});