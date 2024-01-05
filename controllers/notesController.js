const Notes = require("../models/notes");
const { apiResponse } = require("../utils/apiResponse");
const ErrorHandler = require("../utils/errorHandler");

const createNote = async (req, res) => {
  try {
    const { note } = req.body;

    if (!note || note.length == 0) {
      return ErrorHandler(res, "Note cannot be empty", 400);
    }

    Notes.create({
      note,
      user_id: req.user._id,
    });

    return apiResponse(res, "Note Saved Successfully", 200);
  } catch (error) {
    console.log(error);
    return ErrorHandler(res, error.message);
  }
};

const getAllNotes = async (req, res) => {
  try {
    const user_id = req.user._id;

    let notes = await Notes.find({ user_id: user_id });

    if (!notes || notes.length === 0) {
      return ErrorHandler(res, "No Notes Found", 400);
    }

    return apiResponse(res, "Notes Found", 200, notes);
  } catch (error) {
    return ErrorHandler(res, error.message);
  }
};

const getNoteById = async (req, res) => {
  try {
    const note_id = req.params.id;

    if (!note_id) {
      return ErrorHandler(res, "Note ID required", 400);
    }

    let note = await Notes.find({
      _id: note_id,
      user_id: req.user._id,
    });

    if (!note || note.length === 0) {
      return ErrorHandler(res, "No Note Found", 400);
    }

    return apiResponse(res, "Note Found", 200, note);
  } catch (error) {
    return ErrorHandler(res, error.message);
  }
};

const editNoteById = async (req, res) => {
  try {
    const note_id = req.params.id;
    const { note } = req.body;

    if (!note_id) {
      return ErrorHandler(res, "Note ID required", 400);
    }
    if (!note || note.length == 0) {
      return ErrorHandler(res, "Note cannot be empty", 400);
    }

    Notes.updateOne({ _id: note_id,user_id:req.user._id }, { $set: { note: note } })
      .then((data) => {
        if (data.matchedCount === 0) {
          return ErrorHandler(res, "No Note found with this id ", 400);
        }
        return apiResponse(res, "Note updated");
      })
      .catch((error) => {
        return ErrorHandler(res, error.message, 400);
      });
  } catch (error) {
    return ErrorHandler(res, error.message);
  }
};

const deleteNote = async (req, res) => {
  try {
    const note_id = req.params.id;

    if (!note_id) {
      return ErrorHandler(res, "Note ID required", 400);
    }

    Notes.deleteOne({ _id: note_id,user_id:req.user._id })
      .then(() => {
        return apiResponse(res, "Note Deleted Successfully");
      })
      .catch((error) => {
        return ErrorHandler(res, error.message, 400);
      });
  } catch (error) {
    return ErrorHandler(res, error.message);
  }
};

const shareNote = async (req, res) => {
  try {
    const note_id = req.params.id;
    const { share_note_user_id } = req.body;
    if (!note_id) {
      return ErrorHandler(res, "Note ID required", 400);
    }
    if (!share_note_user_id) {
      return ErrorHandler(
        res,
        "Please provide the Id of user you want to share the note with",
        400
      );
    }

    let note = await Notes.find({ _id: note_id,user_id:req.user._id });

    if (!note || note.length === 0) {
      return ErrorHandler(res, "Invalid Note Id", 400);
    }

    Notes.create({
      note: note[0].note,
      user_id: share_note_user_id,
    }).then(() => {
      return apiResponse(res, "Note Shared Successfully");
    });
  } catch (error) {
    return ErrorHandler(res, error.message);
  }
};

const searchNote = async (req, res) => {
  try {
    const query = req.query.q;

    if (!query) {
      return ErrorHandler(res, "Search query string required ", 400);
    }

    const notes = await Notes.find({ 
      $text: { $search: query },
      user_id:req.user._id
     });

    if (!notes || notes.length===0) {
      return ErrorHandler(res, "No Notes Found", 400);
    }

    return apiResponse(res, "Notes Found", 200, notes);
  } catch (error) {
    return ErrorHandler(res, error.message);
  }
};

module.exports = {
  createNote,
  getAllNotes,
  getNoteById,
  editNoteById,
  deleteNote,
  shareNote,
  searchNote,
};
