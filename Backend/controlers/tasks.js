const { Task } = require('../db/coneccion');
const { AsyncWrapper } = require('../middlewares/middleware')
const { CreateError } = require('../errors/Custon-error')


// Create or Get a task
const getAllTodos = AsyncWrapper( async (req,res)=>{

    todos = await Task.find({ user:req.user })
    res.status(200).json({ todos });
   
});

const createTodo = AsyncWrapper( async ( req,res )=>{
 
    req.body.user = req.user.username
    const task = await Task.create(req.body);
    res.status(201).json({ task });
});

// Get , Modifying and Delete a task
const getTodo = AsyncWrapper( async (req,res, next)=>{
    
    const { id:TodoId } = req.params.id 
    const todo = await Task.findOne({ _id:TodoId })

    if(!todo) {
        return next(CreateError(`no task with id ${ TodoId }`, 404))
    }
    
    res.status(200).json({ todo })
});
const updateTodo = AsyncWrapper( async (req,res)=>{

    const { id:TodoId } = req.params.id 

    const todo = Task.findOneAndUpdate({ _id:TodoId },req.body,{
        new:true,
        runValidators:true
    })

    if(!todo) {
        return next(CreateError(`no task with id ${ TodoId }`, 404))
    }
    res.status(200).json({ todo })
});
const deleteTodo = AsyncWrapper(async (req,res)=>{
    const { id:TodoId } = req.params.id 
    
    req.body.user = req.user
    const todo = Task.findOneAndDelete({ _id:TodoId })

    if(!todo) {
        return next(CreateError(`no task with id ${ TodoId }`, 404))
    }

    res.status(200).json({ message :"delete" })
   
});
module.exports ={
    getAllTodos,
    getTodo,
    createTodo,
    updateTodo,
    deleteTodo,
}