const Tasks = require('../models/task.model')

let tasks = [
    new Tasks("1", 'Clean code', 'bla bla', 'feature'),
    new Tasks("2", 'Sticky footer', 'bla bla', 'bug'),
]

module.exports.list = () => new Promise((resolve, reject) => resolve(tasks))

module.exports.deleteById = (id) => new Promise((resolve, reject) => {
    const task = tasks.find((tasks) => tasks.id === id)
    if (!task) {
        resolve()
    } else {
        tasks = tasks.filter((tasks) => tasks.id !== id)
        resolve(task)
    }

})