#!/usr/bin/env node

import { roll  } from "../lib/roll.js"
import minimist from "minimist"
const args = minimist(process.argv.slice(2))
const sides = args.sides || 6
const dice = args.dice || 2
const rolls = args.rolls || 1
let output = roll(sides, dice, rolls)
console.log(JSON.stringify({"sides": sides,"dice": dice, "rolls": rolls,"results": output}))  

