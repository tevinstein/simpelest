let mongoose = require('mongoose')
let Schema = mongoose.Schema

let ItemSchema = new Schema({
    title: String,
    starred: Boolean,
    createdAt: { type: Date, default: Date.now }
}, { collection: 'items' })

ItemSchema.pre('save', next => {
    now = new Date()
    if (!this.createdAt) {
        this.createdAt = now
    }

    next()
})

module.exports = mongoose.model('item', ItemSchema)
