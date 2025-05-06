require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname)));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB Atlas');
}).catch((error) => {
    console.error('MongoDB connection error:', error);
});

const studentSchema = new mongoose.Schema({
    name: String,
    roll_no: Number,
    wad_marks: Number,
    cc_marks: Number,
    dsbda_marks: Number,
    cns_marks: Number,
    ai_marks: Number
});

const Student = mongoose.model('Student', studentSchema);

const initialStudents = [
    {
        name: "John Doe",
        roll_no: 1,
        wad_marks: 22,
        cc_marks: 24,
        dsbda_marks: 23,
        cns_marks: 21,
        ai_marks: 25
    },
    {
        name: "Jane Smith",
        roll_no: 2,
        wad_marks: 19,
        cc_marks: 28,
        dsbda_marks: 21,
        cns_marks: 26,
        ai_marks: 27
    },
    {
        name: "Bob Wilson",
        roll_no: 3,
        wad_marks: 27,
        cc_marks: 26,
        dsbda_marks: 28,
        cns_marks: 29,
        ai_marks: 28
    }
];

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/students', async (req, res) => {
    const students = await Student.find();
    const count = await Student.countDocuments();
    res.json({ count, students });
});

app.get('/students/dsbda', async (req, res) => {
    const students = await Student.find({ dsbda_marks: { $gt: 20 } });
    res.json(students);
});

app.get('/students/all-above-25', async (req, res) => {
    const students = await Student.find({
        wad_marks: { $gt: 25 },
        cc_marks: { $gt: 25 },
        dsbda_marks: { $gt: 25 },
        cns_marks: { $gt: 25 },
        ai_marks: { $gt: 25 }
    });
    res.json(students);
});

app.post('/students', async (req, res) => {
    const student = new Student(req.body);
    await student.save();
    res.json(student);
});

app.put('/students/:id/increase-marks', async (req, res) => {
    const student = await Student.findByIdAndUpdate(
        req.params.id,
        {
            $inc: {
                wad_marks: 10,
                cc_marks: 10,
                dsbda_marks: 10,
                cns_marks: 10,
                ai_marks: 10
            }
        },
        { new: true }
    );
    res.json(student);
});

app.delete('/students/:id', async (req, res) => {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: 'Student deleted successfully' });
});

app.get('/init', async (req, res) => {
    await Student.deleteMany({});
    await Student.insertMany(initialStudents);
    res.json({ message: 'Database initialized with sample data' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});