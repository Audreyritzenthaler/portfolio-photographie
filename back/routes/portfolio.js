const express = require('express')
const router = express.Router()

const connection = require('../database')

router.get('/', (req,res) => {
    const getSql = 'SELECT * FROM picture'
    connection.query(getSql, (error, results) => {
        if (error) {
            res.status(500).json({ error: 'Failed to retrieve data !' })
        } else {
            res.json(results)
        }
    })
})

module.exports = router