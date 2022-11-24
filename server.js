import express from 'express';
import { roll } from 'node-dice'
import minimist from 'minimist'

const app = express();
const args = minimist(process.argv.slice(2))
const port = args.port || 5000

//let output = roll(sides, dice, rolls)
//console.log(JSON.stringify({"sides": sides,"dice": dice, "rolls": rolls,"results": output}))  

app.use(express.json())
  
  app.get('/app/roll/:sides?/:dice?/:rolls?', (req, res) => {

    const sides = Number(req.params.sides) || Number(req.query.sides) || 6
    const dice = Number(req.params.dice) || Number(req.query.dice) || 2
    const rolls = Number(req.params.rolls) || Number(req.query.rolls) || 1

    let output = roll(sides, dice, rolls)
    let xdd = 0
    for(let i = 0; i < output.length; i++){
      xdd += output[i]
    }
    let LOL = [xdd]
    let trueOutput = JSON.stringify({"sides": sides,"dice": dice, "rolls": rolls,"results": LOL})
    res.status(200).send(trueOutput)
    server.close()
    process.exit()
    
  })

  app.get('/app', (req, res) => {
    res.status(200).send("200 OK")
    server.close()
    process.exit()
  })

  //
  app.get('/app/:bad_endpoint', (req, res) => {
    res.status(404).send("404 NOT FOUND")
    server.close()
    process.exit()
  })
  //

  

  
  app.use((req, res) => {
    //if(req.body.sides != null){
      let sides = 6
      let dice = 2
      let rolls = 1
      let output = roll(sides, dice, rolls)
      let xdd = 0
      for(let i = 0; i < output.length; i++){
      xdd += output[i]
      }
      let trueOutput = JSON.stringify({"sides": sides,"dice": dice, "rolls": rolls,"results": xdd})
      res.status(200).send(trueOutput)
    //}
    //res.status(404).send("404 NOT FOUND")
    server.close()
    process.exit()
  })

  //app.get('/app', (req, res) => {
    
  //})
  var server = app.listen(port)


  //console.log(`Server listening on port ${port}`);