const Note  = require("../Repositories/Note");
const { currentTime } = require('../Helpers/currentDate');
const { findAllDate } = require('../Helpers/parseDates');
const { countTasks, countIdeas, countRandomThoughts } = require('../Helpers/getStats');

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
        const noteData = {
            name: name,
            created: currentTime(),
            category: category,
            content: content,
            dates: findAllDate(content)
        }

        const editedNote = Note.editNote(id, noteData);
    
        return editedNote;
    }
    
    deleteNote(id){
        const deletedNote = Note.deleteNote(id);
        return deletedNote;
    }
    
    changeActiveStatus(id){
        const note = Note.changeActiveStatus(id);
        return note;
    }

    getNote(id){
        return Note.getNote(id);
    }
    
    getAllNotes(){
        return Note.getAllNotes();
    }

    getStats(){
        const active = Note.getAllNotes().filter(note => note.active);
        const archived = Note.getAllNotes().filter(note => !(note.active));
        const tasks = {
            active: countTasks(active), 
            archived: countTasks(archived)
        };
        const ideas = {
            active: countIdeas(active),
            archived: countIdeas(archived)
        };
        const randomThoughts = {
            active: countRandomThoughts(active),
            archived: countRandomThoughts(archived)
        };

        return {tasks, ideas, randomThoughts};
    }    
}

module.exports = new NoteService();
