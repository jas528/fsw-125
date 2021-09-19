const express = require('express')
const bountyRouter = express.Router()
const { v4: uuid } = require('uuid')

const app=express();


let bounties=[];

app.get('/bounty',(req,res)=>{
    res.json(bounties);
});
app.post('/bounty',(req,res)=>{
});
const bounties = [{
    first_name: 'mike',
    last_name: 'james',
    living: true,
    bounty_amount: 5,
    type: 'jedi',
    _id: uuid()
}]

bountyRouter.route('/')
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req,res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send('Successfully added your new Bounty to the database!')
    })

module.exports = bountyRouter