const express = require('express');
//const { request } = require('http');
const todoRouter = express.Router();
const { v4: uuid4 } = require('uuid');

const todos = [
    {
        name: 'Gym',
        description: 'workout legs and arms',
        imgUrl:'https://images.unsplash.com/',
        completed: true,
        _id: uuid4()
    },
    {
        
        name: 'Laundry',
        description: 'wash cloths and fold towels',
        imgurl:'https://images.unsplash.com/',
        completed: true,
        _id: uuid4()
    },
    {
        name: 'Grocery',
        description: 'buy food and drinks',
        imgurl:'https://images.unsplash.com/',
        completed: true,
        _id: uuid4()
    }
]

//get all
todoRouter.route('/')
.get((req, res) => {
    res.send(todos)
})
    
//post
.post((req,res) => {
    const newtodos = req.body
    newtodos._id = uuid4()
    todos.push(newtodos)
    res.send('Successfully added your new todos to the database!')
});

//update
todoRouter.put('/:todoId',(req ,res)=>{
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo=>todo._id===todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodo)
})
    
//get one - Need to do
todoRouter.get('/:todosId', (req,res)=>{
    const todosid=req.params.todosId
    const todos =req.body
    todolist._id=uuidv4()
    const findtodos=task.find (todo=> todo._id===todosId)
    res.send(findtodos)
})

//Delete - Need to do
todoRouter.delete ('/:todosId', (req,res)=>{
    const todosId=req.params.todosId
    const todos =req.body
    todo._id=uuidv4()
    const todosIndex=tasks.findIndex (todo=> todo._id===todosId)
    tasks.splice(todoIndex,1)
    res.send('Item deleted')
})
module.exports = todoRouter