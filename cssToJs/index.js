/**
 * Created by 2ue on 2017/7/23
 * @function generate the css-js from css files
 */

const fs = require('fs');
const path = require('path');

const data = fs.readFileSync(path.join(__dirname, '../src/rest.css'),'utf-8');
let cssBuff = data.replace(/[\r\n\s]/g, '').replace(/\"/g, "'");

cssBuff = 'module.exports = "' + cssBuff + '"';

fs.writeFileSync(path.join(__dirname, '../dist/rest-css.js'), cssBuff, 'utf-8', function (err, suc) {
    if (err) throw  err;
    console.log('success!');
});
