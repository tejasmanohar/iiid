#!/usr/bin/env node

var program = require('commander');

program
  .version('1.0.0')
  .command('iiid')
  .action(function () {
    var d = new Date();
    if(d.getMonth() === 7 && d.getDate() === 4) {
      console.log('HELL YEAH');
    } else {
      console.log('IN OUR HEARTS');
    }
  });

program.parse(process.argv);