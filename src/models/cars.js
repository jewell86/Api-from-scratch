const uuid = require('uuid/v4')

const cars = []

function getAll(limit) {
    return limit ? cars.splice(0,limit) : cars
}

function getOne(id) {
    return cars.find(car => car.id === id)
}

function create(make, model){
    const car = { id : uuid(), make, model }
    cars.push(car)
    return car
}

function update(id, make, model) {
    let car = cars.find(car => car.id === id)
    car = { id, make, model }
    return car
}

function deleteOne(id) {
    const deletedCar = cars.find(car => car.id === id)
    const index = cars.indexOf(deletedCar)
    cars.splice(index, 1)
    return deletedCar
}


module.exports={ getAll, getOne, create, update, deleteOne }