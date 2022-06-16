// todo constructor factory
// const todo = (title,note,due,prio) => {

//     const getTitle = () => title;
//     const getNote = () => note;
//     const getDue = () => due;
//     const getPrio = () => prio;



//     return {getTitle,getNote,getDue,getPrio}
// };

function Todo(title,note,due,prio) {
    this.title = title;
    this.note = note;
    this.due = due;
    this.prio = prio;

    function getTitle() {
        return this.title;
    }
}

export default Todo;