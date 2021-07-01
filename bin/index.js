#!/usr/bin/env node

const program = require('commander');
const RPG = require('../src/index').prompt;

let RPGPath;
let RPGName;

program
  .version('1.0.0')
  .description('Generate a RPG boilerplate from template')
  .arguments('[RPG_path] [RPG_name]')
  .action((RPGPath, RPGName) => {
    RPGPath = RPGPath;
    RPGName = RPGName;
  })
  .parse(process.argv);

  RPG(RPGPath, process.env.RPG_TEMPLATES_PATH, RPGName)
  .then(() => {
    console.log('RPG generated');
    process.exit(0);
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
