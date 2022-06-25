
// Create or Get a task
const getAllTodos = (req,res)=>{
    res.send("all todos");
}

const createTodo =(req,res)=>{
    res.send("create todo")
}

// Get , Modifying and Delete a task
const getTodo = (req,res)=>{
    res.send(`get ${req.params.id } todo`)
}
const updateTodo =(req,res)=>{
    res.send(`update ${req.params.id } todo`)
}
const deleteTodo = (req,res)=>{
    res.send(`delete ${req.params.id } todo`)
}
module.exports ={
    getAllTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo,
}