const { Color } = require('../db/coneccion');
const { AsyncWrapper } = require('../middlewares/middleware')
const { CreateError } = require('../errors/Custon-error')


// Create or Get a Color
const getAllColors = AsyncWrapper( async (req,res)=>{
    res.status(200).json(await Color.find({ user:req.user.username }));
});

const createColor = AsyncWrapper( async ( req,res )=>{
    req.body.user = req.user.username
    const Color = await Color.create(req.body);
    res.status(201).json({ Color });
});


// Get , Modifying and Delete a Color
const updateColor = AsyncWrapper( async (req,res)=>{

    const { id:ColorId } = req.params.id 

    const Color = Color.findOneAndUpdate({ _id:ColorId },req.body,{
        new:true,
        runValidators:true
    })
    if(!Color) {
        return next(CreateError(`no Color with id ${ ColorId }`, 404))
    }
    res.status(200).json({ Color })
});
const deleteColor = AsyncWrapper(async (req,res)=>{
    const { id:ColorId } = req.params.id 
    
    req.body.user = req.user
    const Color = Color.findOneAndDelete({ _id:ColorId })

    if(!Color) {
        return next(CreateError(`no Color with id ${ ColorId }`, 404))
    }

    res.status(200).json({ message :"delete" })
   
});
module.exports ={
    getAllColors,
    createColor,
    updateColor,
    deleteColor,
}