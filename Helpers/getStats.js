module.exports.countTasks = (dataset) => {
    return dataset.reduce((count, note) => {
        return (note.category === "Task") ? ++count : count;
    }, 0);
}
module.exports.countIdeas = (dataset) => {
    return dataset.reduce((count, note) => {
        return (note.category === "Idea") ? ++count : count;
    }, 0);
}
module.exports.countRandomThoughts = (dataset) => {
    return dataset.reduce((count, note) => {
        return (note.category === "Random Thought") ? ++count : count;
    }, 0);
}

