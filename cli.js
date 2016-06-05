#!/usr/bin/env node

// Minimist opts for arguments
var opts = [];
opts.boolean = ['help', 'html', 'xhtmlOut', 'breaks', 'linkify', 'typographer'];
opts.string = ['langPrefix', 'quotes'];
var argv = require('minimist')(process.argv.slice(2), opts);
var fs = require('fs');


// Get value from object and key
var getValFromKey = function (key, obj) {
    if (obj.hasOwnProperty(key)) {
        return obj[key];
    }
    return undefined;
}

if (getValFromKey ('help', argv)) {
    var help = fs.readFileSync('README.md', {encoding: 'utf8'});
    console.log(help);
    process.exit(0);
}

// Set mode option
var mode = getValFromKey('mode', argv);
if (mode == undefined ) {
    mode = 'default';
}



var md = require('markdown-it-embed-mathjax');
md.options.html = false;
//console.log(md.options);

// Set markdown otions
for (key in md.options) {
    var argvVal = getValFromKey(key, argv);
    if (argvVal === undefined) {
        // Do nothing
    } else {
        md.options[key] = argvVal;
    }
}

// StdIn
var readStdin = function () {
    var getStdin = require('get-stdin');
    getStdin().then(str => {
        console.log(md.render(str));
        process.exit(0);
    });
}

// From files
var readFiles = function (files) {
    var str = '';
    for (file in files) {
        str+= fs.readFileSync(files[file], {encoding: 'utf8'});
    }
    console.log(md.render(str));
    process.exit(0);
}


var files = getValFromKey('_', argv);
if (files.length == 0) {
    readStdin();
} else {
    readFiles(files);
}

