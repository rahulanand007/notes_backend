
// const request = require('supertest');
// const app = require('../app'); 
// const dotenv = require('dotenv')
// dotenv.config({path:"./env"})
// var mongoose = require('mongoose');


// const { getAllNotes } = require('../controllers/notesController');
// const Notes = require('../models/notes');
// const Users = require('../models/userModel');

// // Mock Notes.find() function
// jest.mock('./models/notes', () => ({
//   find: jest.fn(),
// }));

// // Mock Users.find() function
// jest.mock('./models/userModel', () => ({
//   find: jest.fn(),
// }));

// describe('getAllNotes API', () => {
//   let req;
//   let res;

//   beforeEach(() => {
//     req = {
//       user: { _id: '65965be57a112fc3ef295a60' }, // Assuming the authenticated user's ID
//     };
//     res = {
//       status: jest.fn(() => res),
//       json: jest.fn(),
//     };
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   it('should return notes for an authenticated user', async () => {
//     // Mock behavior of Users.find() to simulate an authenticated user
//     Users.find.mockResolvedValue([{ _id: '65965be57a112fc3ef295a60' }]);

//     // Mock behavior of Notes.find() to simulate fetching notes
//     Notes.find.mockResolvedValue(['Note 1', 'Note 2']);

//     await getAllNotes(req, res);

//     expect(Users.find).toHaveBeenCalledWith({ _id: '65965be57a112fc3ef295a60' });
//     expect(Notes.find).toHaveBeenCalledWith({ user_id: '65965be57a112fc3ef295a60' });
//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith({ notes: ['Note 1', 'Note 2'] });
//   });

//   it('should handle errors', async () => {
//     // Simulate an error in fetching notes
//     Notes.find.mockRejectedValue(new Error('Database error'));

//     await getAllNotes(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ message: 'Database error' });
//   });
// });


// const db =  require("./database");

// const agent = request.agent(app);

// beforeAll(async () => await db.connect());
// afterEach(async () => await db.clear());
// afterAll(async () => await db.close());

// describe("tags", () => {
//   describe("GET /api/notes", () => {
//     test("successful", async () => {
//       const res = await agent.get("/api/notes")
//       expect(res.statusCode).toEqual(200);
//       // expect(res.body).toBeTruthy();
//     });
//   });
// });