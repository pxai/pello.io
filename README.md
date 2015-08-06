# pello.io
Simpl Blog system used at pello.io built on MEAN: Mongo + Express +  Angular + Node.js


# Notes

Steps to start your project
===========================
npm config set init.author.name 'Pello Altadill'
npm init

After that, 
npm install --save-dev grunt-cli

Create Grunfile.js

npm install --save express
npm install --save mocha 
...

Don't forget to
===============

Restore

cd dump
/opt/mongodb/bin/mongorestore -d blogdb blogdb/

Dump
/opt/mongodb/bin/mongodump -d blogdb

