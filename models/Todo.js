const { default: mongoose, isObjectIdOrHexString } = require("mongoose");
const ObjectId =  mongoose.SchemaTypes.ObjectId;
const TodoSchema = new mongoose.Schema({
    id: ObjectId,
    task: String,
    createdDate: Date,
    isDone: Boolean,
    priority: Number,
    userName: String
});
const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;