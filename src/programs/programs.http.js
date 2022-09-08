const { createProgram, getAllPrograms, getProgramById, deleteProgram, editProgram} = require('./programs.controller')

//? Servicio donde servimos la peticion que require todos los usuarios
//? Aqui unicamente les pasamos el req y el res
const getAllP = (req, res) => {
    const data = getAllPrograms()
    res.status(200).json({
        items: data.length,
        response: data
    })
}

const getByIdP = (req, res) => {
    const id = req.params.id
    const data = getProgramById(id);
    if (data) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: `El programa con el id ${id} no existe` });
      }
}

const deleteByIdP = (req, res) => {
    const id = Number(req.params.id)
    if (typeof id === 'number') {
        const deleted = deleteProgram(id)
        if (deleted) {
            res.status(204).json()
        } else {
            res.status(400).json({ message: 'Try with another ID' })
        }
    } else {
        res.status(400).json({ message: 'Invalid ID' })
    }
}

const createP = (req, res) => {
   const data = req.body
        if(data.title && data.seasons && data.description && data.cover && data.categories){
            const response = createProgram(data)
            res.status(201).json(response)
        }
        else{
            res.status(400).json({message:"Invalid Arguments"})
        }
    }
    


const updateP = (req, res) => {
    const id = Number(req.params.id)
    const data = req.body
    if (data.title && data.seasons && data.description && data.cover && data.categories) {
        const response = editProgram(id, data)
        res.status(201).json({ message: "User edited succesfully", data: response })
    }
    else {
        res.status(400).json({ message: "Invalid Arguments" })
    }
}

module.exports = {
    getAllP,
    getByIdP,
    deleteByIdP,
    updateP, createP
}