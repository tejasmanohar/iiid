#!/usr/bin/env node

var program = require('commander');

program
  .version('1.0.2')
  .command('iiid')
  .action(function () {
    console.log('lol')
    var d = new Date();
    if(d.getMonth() === 7 && d.getDate() === 4) {
      console.log('HELL YEAH');
    } else {
      console.log('IN OUR HEARTS');
    }
  });

program.parse(process.argv);