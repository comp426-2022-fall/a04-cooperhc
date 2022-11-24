import express from 'express';
import { roll } from 'node-dice'
import minimist from 'minimist'

const app = express();
const args = (process.argv.slice(2))
const port = args.port || 5000
let trueOutput = ""

//let output = roll(sides, dice, rolls)
//console.log(JSON.stringify({"sides": sides,"dice": dice, "rolls": rolls,"results": output}))  



  app.get('/app/roll/:sides?/:dice?/:rolls?', (req, res) => {
    const sides = Number(req.params.sides) || Number(req.query.sides) || 6
    const dice = Number(req.params.dice) || Number(req.query.dice) || 2
    const rolls = Number(req.params.rolls) || Number(req.query.rolls) || 1
    let output = roll(sides, dice, rolls)
    trueOutput = JSON.stringify({"sides": sides,"dice": dice, "rolls": rolls,"results": output})
    res.status(200).send(trueOutput)
    server.close()
    
  })

  app.get('/app', (req, res) => {
    res.status(200)
    server.close()
  })

  //app.get('/app', (req, res) => {
    
  //})
  var server = app.listen(port)


  //console.log(`Server listening on port ${port}`);