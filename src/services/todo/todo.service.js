const { TodoModel } = require('../../models');

class TodoService {
  constructor() {
    this.TodoModel = TodoModel;
  }

  addTodo(postBody) {
    const todo = this.TodoModel(postBody);
    return todo.save();
  }

  viewTodo(params) {
    return this.TodoModel.findOne({ _id: params.id });
  }

  listTodo() {
    return this.TodoModel.find({ isDeleted: false, status: true });
  }

  updateTodo(todoId, postBody) {
    return this.TodoModel.updateOne({ isDeleted: false, status: true, _id: todoId }, { $set: postBody });
  }

  deleteTodo(params) {
    return this.TodoModel.deleteOne({ isDeleted: false, status: true, _id: params.id });
  }
}

module.exports = new TodoService();