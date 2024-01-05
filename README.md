# Notes App Backend

This repository contains the backend code for a simple notes app built using Node.js, Express, and MongoDB.

*****Stack Used*****

MongoDB: NoSQL database used to store notes data.

Express: Web framework used for handling HTTP requests, routing, and middleware.

Node.js: JavaScript runtime environment for executing server-side code.

## Getting Started

To run this application locally, follow these steps:

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running

### Installation

1. Clone this repository: `git clone https://github.com/rahulanand007/notes_backend.git`
2. Navigate to the project directory: `cd notes-app-backend`
3. Install dependencies: `npm install`

### Configuration

Make sure to configure your environment variables:

- Create a `.env` file based on the following example:-
   ***********ENV*********************

        PORT=4000
        
        DB_URI = "mongodb://localhost:27017/speer_notes"
        
        JWT_SECRET = THISISJWTSECRET
        
        JWT_EXPIRE = 5d
        
        COOKIE_EXPIRE = 5

   ************ENV*******************  
- Set the `MONGODB_URI` variable to your local or remote MongoDB connection URL

### Running the App

Start the server using the command:
npm start


************POSTMAN COLLECTION*******************  
SHARING MY POSTMAN COLLECTION FOR API ENDPOINTS AND PAYLOADS-
https://api.postman.com/collections/23076883-811d7a3e-89d8-4981-965d-86e24979405b?access_key=PMAT-01HKCC4E8E8Q0GSN5ZCNKESZNS

************POSTMAN COLLECTION*******************  

Please Download the postman collection.

API Endpoints
The following endpoints are available:-

AUTH API-
---------
1.POST /api/auth/signup : Register new user

2.POST /api/auth/login : Login 

NOTES API
----------
1.GET /api/notes : Get all notes

2.GET /api/notes/:id : Get a specific note by ID

3.POST /api/notes : Create a new note

4.PUT /api/notes/:id : Update a note by ID

5.DELETE /api/notes/:id : Delete a note by ID

6.POST /api/notes/:id/share : Share a note with another user

7.GET /api/search?q=:query :  Search notes with query
