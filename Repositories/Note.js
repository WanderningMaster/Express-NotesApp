let Notes = [
    {name: "Shop", created: "12/23/2021", category: "Task", content: "Buy milk before 12/31/2021", active: true, dates: "12/31/2021", id: 0},
    {name: "Hometask", created: "01/10/2022", category: "Random Thought", content: "Do hometask before 04/10/2022", active: true, dates: "04/10/2022", id: 1},
    {name: "New feature", created: "01/08/2022", category: "Idea", content: "Implement new feature in project", active: false, dates: "", id: 2}
];

class Note{
    constructor(name, created, category, content, dates){
        this.name = name;
        this.created = created;  
        this.category = category;
        this.content = content;
        this.active = true;
        this.dates = dates;
        this.id = Notes.length;
    }
    addNote(){
        Notes.push(this);
    }
    static deleteNote(id){
        const deletedNote = this.getNote(id);
        Notes = Notes.filter((note) => note.id != id);
        return deletedNote;
    }
    static editNote(id, noteData){
        const note = this.getNote(id);
        note.name = noteData.name;
        note.created = noteData.created;
        note.category = noteData.category;
        note.content = noteData.content;
        note.dates = noteData.dates;

        return note;
    }
    static changeActiveStatus(id){
        const note = this.getNote(id);
        if(note.active)
            note.active = false;
        else note.active = true;
        
        return note;
    }

    static getNote(id){
        const note = Notes[Notes.findIndex((note) => note.id == id)];
        if(note)
            return note;
        else throw new Error("Object not found");    
    }

    static getAllNotes(){
        return Notes;
    }
}

module.exports = Note;