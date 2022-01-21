const Note  = require("../Repositories/Note");
const { currentTime } = require('../Helpers/currentDate');
const { findAllDate } = require('../Helpers/parseDates');

class NoteService{
    addNote(newNote){
        const {name, category, content} = newNote;
        const created = currentTime();
        const dates = findAllDate(content);
    
        const note = new Note(name, created, category, content, dates);
        note.addNote();
    
        return note;
    }
    
    editNote(id, data){
        const {name, category, content} = data;
        const created = currentTime();
        const dates = findAllDate(content);
    
        const editedNote = new Note(name, created, category, content, dates);
    
        const note = this.getNote(id);
        note.editNote(editedNote);
    
        return note;
    }
    
    deleteNote(id){
        const deletedNote = this.getNote(id);
        if(deletedNote)
            Note.deleteNote(id);
        return deletedNote;
        
    }
    
    getNote(id){
        const note = Note.getNote(id);
        return note ? note : null;
    }
    
    getAllNotes(){
        return Note.getAllNotes();
    }    
}

module.exports = new NoteService();
