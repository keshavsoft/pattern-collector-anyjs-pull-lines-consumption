# pattern-collector-anyjs-pull-lines-consumption 🔍

> **A powerful, configurable tool to scan JavaScript/ESM files and pull structured line matches matching route consumption declarations.**

[![npm version](https://img.shields.io/npm/v/pattern-collector-anyjs-pull-lines-consumption.svg?style=flat-square&color=38bdf8)](https://www.npmjs.com/package/pattern-collector-anyjs-pull-lines-consumption)
[![license](https://img.shields.io/npm/l/pattern-collector-anyjs-pull-lines-consumption.svg?style=flat-square&color=34d399)](LICENSE)

🔗 **Quick Links:**
*   📦 **NPM Registry**: [npmjs.com/package/pattern-collector-anyjs-pull-lines-consumption](https://www.npmjs.com/package/pattern-collector-anyjs-pull-lines-consumption)
*   💻 **GitHub Repo**: [github.com/keshavsoft/pattern-collector-anyjs-pull-lines-consumption](https://github.com/keshavsoft/pattern-collector-anyjs-pull-lines-consumption)
*   🌐 **Live Documentation**: [keshavsoft.github.io/pattern-collector-anyjs-pull-lines-consumption](https://keshavsoft.github.io/pattern-collector-anyjs-pull-lines-consumption/)

---

## 📖 Overview

`pattern-collector-anyjs-pull-lines-consumption` is a modular ES module used as a sub-module of `pattern-collector-anyjs-pull-lines`. It scans file contents to identify specific patterns (such as routing consumption declarations) and extracts line details, line numbers, variable names, and directory paths.

This library is particularly useful for building automated routing trees or auditing source code consumption patterns.

---

## ✨ Features

- **🏷️ Line Tracking**: Identifies exactly which line number each pattern appears on.
- **🧩 Custom Extraction Regex**: Extracts variables, directories, and paths using flexible capturing groups in your regular expressions.
- **📦 ESM Native**: Built for modern ES module environments.

---

## 🔗 Dependency Chain

*   [`pattern-collector-anyjs-extract`](https://www.npmjs.com/package/pattern-collector-anyjs-extract) - listed in [`package.json`](package.json) as `^1.4.6`.

---

## 🚀 Installation

```bash
npm install pattern-collector-anyjs-pull-lines-consumption
```

---

## 💻 Usage Example

Here is a quick example showing how to extract route usage patterns:

```javascript
import pullLinesConsumption from 'pattern-collector-anyjs-pull-lines-consumption';

const code = `
const router = express.Router();
router.use("/v1", routerFromv1);
`;

const result = pullLinesConsumption({
  fileContent: code,
  parseRegex: /router\.use\s*\(\s*['"`]\/?([^'"`]+)['"`]\s*,\s*(\w+)/,
  searchRegex: /^[ \t]*router\.use\b.*?;/gm
});

console.log(result);
/*
Output:
[
  {
    variable: 'v1',
    folderName: 'routerFromv1',
    line: 'router.use("/v1", routerFromv1);',
    lineNumber: 3
  }
]
*/
```

---

## 🛠️ API Reference

### `default(options)`

The default export is a function that parses the provided content and returns matching pattern details.

#### Parameters

An options object containing:

* **`fileContent`** `(string)`: The raw javascript source code string to analyze.
* **`searchRegex`** `(RegExp)`: Regular expression with `g` flag to search for route usage patterns.
* **`parseRegex`** `(RegExp)`: Regular expression with capture groups to extract paths and variables.
* **`showLog`** `(boolean)` *(optional)*: When set to `true`, outputs intermediate matching arrays to the console.
* **`showLogStep1`** `(boolean)` *(optional)*: When set to `true`, outputs step-by-step extraction details.

#### Returns

* **`Array<Object>`**: An array of route consumption matching objects.

Each item in the list has the following shape:
```typescript
{
  variable: string;    // Captured variable name from parseRegex
  folderName: string;  // Captured directory or value from parseRegex
  line: string;        // Full original line matching the search regex
  lineNumber: number;  // 1-indexed line number in the source file
}
```

---

## ⚖️ License

MIT License. Designed with ❤️ by [KeshavSoft](https://github.com/keshavsoft).

