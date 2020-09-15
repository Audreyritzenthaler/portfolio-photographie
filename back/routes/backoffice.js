const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

const connection = require('../database')


const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        const uploadPath = 'public'
        callback(null, uploadPath)
    },
    filename: function (req, file, callback) {
        const d = new Date()
        const date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate()
        const filename = file.originalname.replace(/ /g, '-')
      const dateFilename = date + '-' + filename
      callback(null, dateFilename)
    }
  })
  
  const upload = multer({
      storage: storage,
      fileFilter: function (req, file, callback) {
          const ext = path.extname(file.originalname)
          if (ext !== '.jpg') {
              return callback(new Error('Only jpg images are allowed'))
            }
            callback(null, true)
    }
}).single('file')


router.post('/', (req,res) => {
    upload(req, res, function (error) {
        if (error instanceof multer.MulterError) {
          return res.status(500).json({ error: 'echec' })
        } else if (error) {
          return res.status(500).json({ error: 'echec2' })
        }
        else {
            const formData = req.body
            const imageData = {
              ...formData,
              picture: req.file.filename
            }
        }
        connection.query('INSERT INTO picture SET ?',
        [imageData],
        (err, results) => {
            if (err) {
                return res.status(400).json({ error: 'Failed to upload picture' })
            } else {
                return res.status(200).json(results)
            }
        })
    })
})

module.exports = router