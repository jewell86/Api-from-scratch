const models = require('../models/cars.js')

function getAll(req,res,next){
    const limit = req.query.limit
    const data = models.getAll(limit)
    res.status(200).json({ data })
}

function getOne(req,res,next){
    const id = req.params.id
    const data = models.getOne(id)
    res.status(200).json({ data })
}

function create(req,res,next){
    const {make, model} = req.body
    const data = models.create(make,model)
    res.status(200).json({ data })
}

function update(req,res,next){
    const id = req.params.id
    const {make,model} = req.body
    const data = models.update(id,make,model)
    res.status(200).json({ data })
}

function deleteOne(req,res,next){
    const id = req.params.id
    const data = models.deleteOne(id)
    res.status(200).json({ data })
}