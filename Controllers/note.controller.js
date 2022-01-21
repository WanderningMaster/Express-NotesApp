const NoteService = require("../Services/note.service");

class NoteController{
    add(req, res){
        const data = req.body;
        const note = NoteService.addNote(data);
    
        res
            .status(200)
            .json({data: note});
            
    }
    remove(req, res){
        const { id } = req.params;
        const deletedNote = NoteService.deleteNote(id);
        res
            .status(200)
            .json({data: deletedNote});
    }

    getAll(req, res){
        const notes = NoteService.getAllNotes();
        res
            .status(200)
            .json({data: notes});
    }
}

module.exports = new NoteController();