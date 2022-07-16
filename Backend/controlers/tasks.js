const { Task } = require('../db/coneccion');
const { AsyncWrapper } = require('../middlewares/middleware')
const { CreateError } = require('../errors/Custon-error')


// Create or Get a task
const getAllTodos = AsyncWrapper( async (req,res)=>{
    const todos = await Task.find({ user:req.user.username })

    res.status(200).json({ todos });
   
});

const createTodo = AsyncWrapper( async ( req,res )=>{
    req.body.user = req.user.username
    req.body.z = 1
    const task = await Task.create(req.body);
    res.status(201).json({ task });
});


// Get , Modifying and Delete a task
const getTodo = AsyncWrapper( async (req,res, next)=>{
    
    const id  = req.params.id 
    const todo = await Task.findById({ _id:id })

    if(!todo) {
        return next(CreateError(`no task with id ${ TodoId }`, 404))
    }
    
    res.status(200).json({ todo })
});
const updateTodo = AsyncWrapper( async (req,res)=>{

    const TodoId  = req.params.id 

    const all = await Task.find({user:req.user.username})
    all.forEach( async(ele)=>{
        await Task.findByIdAndUpdate(ele._id,{z:req.body.globalzindex.indexOf(ele._id.toString())+1},{
            new:true,
            runValidators:true
        })
    })
    delete req.body.globalzindex
    const todo = await Task.findByIdAndUpdate(TodoId,req.body,{
        new:true,
        runValidators:true
    })
    
  
    if(!todo) {
        return next(CreateError(`no task with id ${ TodoId }`, 404))
    }
    res.status(200).json({ msg: 'succes' })
});
const deleteTodo = AsyncWrapper(async (req,res)=>{
    const TodoId = req.params.id 
    
    req.body.user = req.user
    const todo = Task.findByIdAndDelete(TodoId)

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