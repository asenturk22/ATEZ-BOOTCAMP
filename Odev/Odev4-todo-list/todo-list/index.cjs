#! /usr/bin/env node

//add,   task-check,   update,   list
const {program} = require('commander');
const list = require('./lib/list.cjs');

program.command('list').description('list all todo item').action(list)
program.parse();