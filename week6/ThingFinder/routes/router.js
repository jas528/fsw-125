const express = require('express')
const router = express.Router()

const things = [
    {
        name: 'bannana',
        type: 'fruit',
        color: 'yellow'
    },
    {
        name: 'orange',
        type: 'fruit',
        color: 'orange'
    },
    {
        name: 'apple',
        type: 'fruit',
        color: 'red'
    }
]

router.route('/')
    .get((req, res) => {
        res.send(things)
    })

module.exports = router