const models = require('../models/cars')

function getAll (req, res, next) {
    const limit = req.query.limit
    const data = models.getAll(limit)
    if (!data) return next ({ status:404, message: `No cars found` })
    res.status(200).json({ data })
}

function getOne (req, res, next) {
    const id = req.params.id
    const data = models.getOne(id)
    if (!data) return next ({ status: 404, message: `Car ID ${id} not found` })
    res.status(200).json({ data })
}

function create (req, res, next) {
    const { make, model } = req.body
    if (!make || !model) return next ({ status: 400, message: `Make & model required` })
    const data = models.create(make, model)
    res.status(201).json({ data })
}

function update (req, res, next) {
    const id = req.params.id
    const { make, model } = req.body
    if (!make || !model) return next ({ status: 400, message: `Make & model required` })
    const data = models.update(id, make, model)
    if (!data) return next ({ status: 404, message: `Car ID ${id} not found` })
    res.status(200).json({ data })
}

function deleteOne (req, res, next) {
    const id = req.params.id
    const data = models.deleteOne(id)
    if (!data) return next({ status: 404, message: `Car ID ${id} not found` })
    res.status(204).json({ data })
}

module.exports = { getOne, getAll, create, update, deleteOne }