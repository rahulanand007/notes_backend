const express = require("express")
const {createNote, getAllNotes, getNoteById, editNoteById, deleteNote, shareNote, searchNote} = require("../controllers/notesController")
const {isAuthenticatedUser} = require("../middleware/auth")


const router = express.Router();

router.route("/notes").post(isAuthenticatedUser,createNote)
router.route("/notes").get(isAuthenticatedUser,getAllNotes)
router.route("/notes/:id").get(isAuthenticatedUser,getNoteById)
router.route("/notes/:id").put(isAuthenticatedUser,editNoteById)
router.route("/notes/:id").delete(isAuthenticatedUser,deleteNote)
router.route("/notes/:id/share").post(isAuthenticatedUser,shareNote)
router.route("/search").get(isAuthenticatedUser,searchNote)


module.exports = router;