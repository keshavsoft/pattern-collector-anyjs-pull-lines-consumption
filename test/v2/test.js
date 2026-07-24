import fs from 'fs';
import path from 'path';

import { fileURLToPath } from "url";

import defaultFunc from '../../index.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appJsPath = path.join(__dirname, "routes.js");

const fileContent = fs.readFileSync(appJsPath, 'utf8');

import extractRegex from './extractRegex.js';

const k1 = defaultFunc({
    fileContent,
    parseRegex: extractRegex.consumptionRegex.parseRegex,
    searchRegex: extractRegex.consumptionRegex.searchRegex,
    showLog: {
        keysOnly: false,
        withValues: false
    },
    showLogStep1: {
        keysOnly: false,
        withValues: false
    }
});

console.log("ssssssssss : ", k1);

