#!/usr/bin/env node

const shell = require('shelljs');
const program = require('commander');

program
    .version('0.1.0')
    .option('-i, --install', 'Install dependencies')
    .option('-b, --build', 'Build all');

program.parse(process.argv);

const list = [
    '1.0_bundle_size_only_react',
    // '1.1_bundle_size_react_and_blueprint_1',
    // '1.2_bundle_size_react_and_blueprint_2',
];


function install() {
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        console.log(" > install dependencies in ", item);
        console.log("");
        console.log("");
        shell.cd(item);
        shell.exec('npm install');
        const res = shell.pwd();
        shell.cd('..');
        console.log("");
    }
}

function build() {
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        shell.cd(item);
        console.log(`=========== main (${item}) ==============`);
        shell.exec('node_modules/.bin/webpack -p');
        const res = shell.pwd();
        shell.cd('..');
    }
}

if (program.install) {
    install();
}

if (program.build) {
    build();
}
