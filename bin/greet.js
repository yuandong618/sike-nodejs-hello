#!/usr/bin/env node
var greet=require("../index.js")
var parseArgs=require("minimist")
var args=parseArgs(process.argv.slice(2));

console.log(process.argv);
console.log(args);
console.log(process.argv.slice(0));
console.log(process.argv.slice(1));
console.log(greet(args._[0],args.drunk));
