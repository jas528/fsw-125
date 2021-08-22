const express = require('express')
const bountyRouter = express.Router()
const { v4: uuid } = require('uuid')

const bounties = [{
    first_name: 'mike',
    last_lame: 'james',
    living: true,
    bounty_amount: 5,
    type: 'jedi',
    ID: uuid()
}]

module.exports = bountyRouter