const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { secret } = require('../database')
const connection = require('../database')

const checkMail = (req, res, next) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  if (!emailRegex.test(req.body.email)) {
    return res.status(401).json({ error: 'hunhunhun vous n\'avez pas dit le mot magique !' })
  }

  next()
}

const checkUser = (req, res, next) => {
  const { email, pwd } = req.body
  connection.query('SELECT * FROM user WHERE email = ?', email,(err, result) => {
    if (err) {
      console.log('caca1')
      return res.status(500).json(err)
    } else if (!result[0]) {
      return res.status(409).json({ error: 'Unknown user' })
    }

    const passwordIsValid = bcrypt.compareSync(pwd, result[0].pwd)

    if (!passwordIsValid) {
      return res.status(401).json({ auth: false, token: null })
    }
    req.user = result[0]
    next()
  })
}

const createToken = (req, res, next) => {
  const token = jwt.sign({
    id: req.user.id, name: req.user.firsname, email: req.user.email
  }, secret, {
    expiresIn: "24h"
  },
  {
    algorithm: 'RS256'
  })
  res.header('Access-Control-Expose-Headers', 'x-access-token')
  res.set('x-access-token', token)
  res.status(200).send({ auth: true })
}

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorisation

  if (authHeader) {
    const token = authHeader.split( ' ' )[1]
    jwt.verify(token, secret, (err) => {
      if (err) {
        return res.status(403).json(err)
      }
      next()
    })
  } else {
    return res.status(401).json({ error: 'No token provided !' })
  }
}

module.exports= { checkMail, verifyToken, checkUser, createToken }