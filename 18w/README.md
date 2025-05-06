# Music Database Application

A simple CRUD application for managing music tracks and playlists.

## Features

- Add, edit, and delete songs
- Create and manage playlists
- Search functionality for songs
- User authentication and authorization
- RESTful API endpoints

## Tech Stack

- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB Atlas
- Authentication: JWT

## API Endpoints

### Songs
- GET /api/songs - Get all songs
- POST /api/songs - Add new song
- PUT /api/songs/:id - Update song
- DELETE /api/songs/:id - Delete song

### Playlists
- GET /api/playlists - Get all playlists
- POST /api/playlists - Create playlist
- PUT /api/playlists/:id - Update playlist
- DELETE /api/playlists/:id - Delete playlist

## Project Structure

A web application to manage song details using Node.js, Express, and MongoDB Atlas.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- MongoDB Atlas account

## Setup Instructions

1. Clone or download this repository

2. Install Dependencies
```bash
npm install express mongoose dotenv cors

3. Configure Environment Variables
- Create a .env file in the root directory
- Add the following configuration:

```MONGODB_URI=your_mongodb_atlas_connection_string
PORT=3000```

4. MongoDB Atlas Setup

- Create a MongoDB Atlas account at https://www.mongodb.com/cloud/atlas
- Create a new cluster
- Click "Connect" on your cluster
- Choose "Connect your application"
- Copy the connection string
- Replace your_mongodb_atlas_connection_string in .env with your connection string
- Replace <password> in the connection string with your database password.

5. Start the Server
```node server.js```


6. Access the Application
   - Open your browser and navigate to: http://localhost:3000
## Features
- View all songs in a tabular format
- Add new songs with details:
  - Song Name
  - Film
  - Music Director
  - Singer
  - Actor
  - Actress
- Delete existing songs
- Filter songs by:
  - Music Director
  - Singer
  - Film
- Update song details
- Display total song count
- Initialize sample data
## API Endpoints Endpoint Method Description /songs

GET

Get all songs /songs

POST

Add a new song /songs/:id

DELETE

Delete a song /songs/:id

PUT

Update song details /songs/director/:director

GET

Get songs by music director /songs/director/:director/singer/:singer

GET

Get songs by music director and singer /songs/singer/:singer/film/:film

GET

Get songs by singer and film /init

GET

Initialize database with sample data
## Project Structure
```plaintext
W18/
├── server.js          # Express server and API endpoints
├── index.html         # Frontend interface
├── .env              # Environment variables
├── package.json      # Project dependencies
└── README.md         # Project documentation
 ```
```

## Sample Data
The application comes with sample data including songs by:

- Arijit Singh
- Pritam
- Mithoon
- And more...
## Error Handling
The application includes error handling for:

- Database connection failures
- Invalid requests
- Missing data
- Server errors
## Security
- CORS enabled for cross-origin requests
- Environment variables for sensitive data
- Input validation
- Error handling
## Development
To run the application in development mode:

```bash
nodemon server.js
 ```

## Dependencies
- express: Web application framework
- mongoose: MongoDB object modeling
- dotenv: Environment variable management
- cors: Cross-Origin Resource Sharing
## Contributing
1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request
## License
This project is licensed under the MIT License.

## Note
Make sure to:

- Keep your MongoDB connection string private
- Never commit the .env file
- Update dependencies regularly
- Check for security vulnerabilities