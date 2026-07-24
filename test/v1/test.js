import fs from 'fs';
import path from 'path';

import defaultFunc from '../../index.js';

const filePath = path.join(process.cwd(), "routes.js");

const fileContent = fs.readFileSync(filePath, 'utf8');

import importRegex from './importRegex.js';

const k1 = defaultFunc({
    fileContent, parseRegex: importRegex.parseRegex,
    searchRegex: importRegex.searchString,
    showLog: true,
    showLogStep1: true
});

console.log("ssssssssss : ", k1);

