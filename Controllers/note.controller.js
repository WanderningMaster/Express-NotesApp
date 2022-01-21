const NoteService = require("../Services/note.service");

class NoteController{
    add(req, res){
        const data = req.body;
        try {
            const note = NoteService.addNote(data);    
            res
                .status(200)
                .json({data: note});    
        } catch (e) {
            console.error(e);
            res
                .status(500)
                .json({data: null});
        }
    }

    remove(req, res){
        const { id } = req.params;
        try{
            const deletedNote = NoteService.deleteNote(id);
            res
                .status(200)
                .json({data: deletedNote});
        }
        catch(e){
            console.error(e);
            res
                .status(500)
                .json({data: null});
        }
        
    }

    edit(req, res){
        const { id } = req.params;
        const noteData = req.body;
        try {
            const editedNote = NoteService.editNote(id, noteData);
            res
                .status(200)
                .json({data: editedNote});    
        } catch (e) {
            console.error(e);
            res
                .status(500)
                .json({data: null});    
        }
        
    }

    getOne(req, res){
        const { id } = req.params;
        try {
            const note = NoteService.getNote(id);
            res
                .status(200)
                .json({data: note})
        } catch (e) {
            console.error(e);
            res
                .status(500)
                .json({data: null});
        }
    }

    getAll(req, res){
        const notes = NoteService.getAllNotes();
        res
            .status(200)
            .json({data: notes});
    }

    getStats(req, res){
        const summary = NoteService.getStats();
        res
            .status(200)
            .json({data: summary});
    }

    changeActiveStatus(req, res){
        const { id } = req.params;
        try {
            const note = NoteService.changeActiveStatus(id);
            res
                .status(200)
                .json({data: note})
        } catch (error) {
            console.error(e);
            res
                .status(500)
                .json({data: null});
        }
    }
}

module.exports = new NoteController();