const { createChapter, getAllChapter, getChapterById, deleteChapter, editChapter } = require('./programs.controller')

//? Servicio donde servimos la peticion que require todos los usuarios
//? Aqui unicamente les pasamos el req y el res
const getAll = (req, res) => {
    const data = getAllChapter()
    res.status(200).json({
        items: data.chapters.lenght,
        response: data
    })
}

const getById = (req, res) => {
    const id = req.params.id
    
    if (id) {
        const data = getChapterById(id)
        if (data.id) {
            res.status(200).json(data)
        } else {
            res.status(400).json({ message: 'Invalid ID' })
        }
    } else {
        res.status(400).json({ message: 'Id is not a number' })
    }
}

const deleteById = (req, res) => {
    const id = Number(req.params.id)
    if (typeof id === 'number') {
        const deleted = deleteChapter(id)
        if (deleted) {
            res.status(204).json()
        } else {
            res.status(400).json({ message: 'Try with another ID' })
        }
    } else {
        res.status(400).json({ message: 'Invalid ID' })
    }
}

const create = (req, res) => {
   const data = req.body
        if(data.chapters.url && data.chapters.chapter_num && data.chapters.program_id){
            const response = createChapter(data)
            res.status(201).json(response)
        }
        else{
            res.status(400).json({message:"Invalid Arguments"})
        }
    }
    


const update = (req, res) => {
    const id = Number(req.params.id)
    const data = req.body
    if (data.chapters.url && data.chapters.chapter_num && data.chapters.program_id) {
        const response = editChapter(id, data)
        res.status(201).json({ message: "User edited succesfully", data: response })
    }
    else {
        res.status(400).json({ message: "Invalid Arguments" })
    }
}

module.exports = {
    getAll,
    getById,
    deleteById,
    update, create
}