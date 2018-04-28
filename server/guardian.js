const express = require('express')
const request = require('superagent')

const router = express.Router()

router.use(express.json())


router.get('/:articles', (req,res)=> {
    request
        .get(`https://content.guardianapis.com/search?q=${req.params.articles}&format=json&api-key=4db3513e-0c6d-454e-b968-9db1dfef71a6`)
        .end((err, result) => {if (err) {
            res.status(500).send(err.message)
          } else {
            console.log("RESULT from guardian.js, ", result.body.response.results)
            res.json(result.body.response.results)
          }
        })
})

module.exports = router