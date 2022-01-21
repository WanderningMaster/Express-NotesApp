let Notes = [
    {name: "Shop", created: "12/23/2021", category: "Task", content: "Buy milk before 12/31/2021", active: true, dates: "12/31/2021", id: 0},
    {name: "Hometask", created: "01/10/2022", category: "Task", content: "Do hometask before 04/10/2022", active: true, dates: "04/10/2022", id: 1},
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
        Notes = Notes.filter((note) => note.id != id);
    }
    editNote(newNote){
        // this = {...newNote};
    }
    addNoteToArchive(){
        this.active = 0;
    }
    removeNoteFromArchive(){
        this.active = 1;
    }

    static getNote(id){
        return Notes.find((note) => note.id == id);
    }

    static getAllNotes(){
        return Notes;
    }
}

module.exports = Note;