const Task = require("../models/Task");


// Create or Get a task
const getAllTodos = async (req,res)=>{
    try {
        todos = await Task.find({ user:req.user })
        res.status(200).json({ todos });
    } catch (error) {
        res.status(500).json({ message:error })
    }
   
};

const createTodo = async ( req,res )=>{
    try {
        req.body.user = req.user
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ message:error })
    }
    
};

// Get , Modifying and Delete a task
const getTodo = async (req,res)=>{
    try {
        const { id:TodoId } = req.params.id 
        const todo = await Task.findOne({ _id:TodoId })

        if(!todo) return res.status(404).json({ message:`No task with id ${req.params.id}`})

        res.status(200).json({ todo })
    } catch (error) {
        res.status(500).json({ message:error })
    }
   
};
const updateTodo = async (req,res)=>{
    try {
        const { id:TodoId } = req.params.id 
        const todo = Task.findOneAndUpdate({ _id:TodoId },req.body,{
            new:true,
            runValidators:true
        })

        if(!todo) return res.status(404).json({ message:`No task with id ${req.params.id}`})

        res.status(200).json({ todo })
    } catch (error) {
        res.status(500).json({ message:error })
    }
};
const deleteTodo = async (req,res)=>{
    try {
        const { id:TodoId } = req.params.id 
        req.body.user = req.user
        const todo = Task.findOneAndDelete({ _id:TodoId })

        if(!todo) return res.status(404).json({ message:`No task with id ${req.params.id}`})

        res.status(200).json({ message :"delete" })
    } catch (error) {
        res.status(500).json({ message:error })
    }
};
module.exports ={
    getAllTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo,
}