const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const connection = require('../database')
const { checkMail } = require('../service/auth.service')

const router = express.Router()

const checkUser = (req, res, next) => {
  connection.query('SELECT id FROM user WHERE email = ?', req.body.email, (err, result) => {
    if (err) {
      console.log('error1')
      return res.status(500).json({ error: 'Internal server error'})
    } else if (result.length > 0) {
      console.log('error2')
      return res.status(409).json({ error: 'User already exists' })
    }
    const user = {
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password)
    }
    req.user = user
    next()
  })
}

const registerUserDb = (req, res, next) => {
  connection.query('INSERT INTO user SET ?', req.user, (err, result) => {
    if (err) {
      console.log('error5')
      return res.status(500).json({ error: 'Cannot register the user' })
    }

    connection.query('SELECT id, name, lastname, email FROM user WHERE id = ?', result.insertId, (err, result) => {
      if (err) {
        console.log('error6')
        return res.status(500).json({ error: 'Internal server error' })
      }
      return res.status(200).json(result)
    })
  })
}

router.post('/', checkMail, checkUser, registerUserDb)

module.exports = router