const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            minLength: [5, 'Title needs at least 5 chars']
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
            minLength: [10, 'Description needs at least 10 chars']
        },
        priority: {
            type: String,
            enum: ['P1', 'P2', 'P3', 'P4'],
            default: 'P4'
        },
        type: {
            type: String,
            enum: ['task', 'bug'],
            default: 'task'
        },
        labels:[String]
    },
    { timestamps: true }
)

const Issue = mongoose.model('Issue', issueSchema)
module.exports = Issue