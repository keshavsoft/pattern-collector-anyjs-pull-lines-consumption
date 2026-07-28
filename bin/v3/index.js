import extractLines from "pattern-collector-anyjs-extract";
import packageJson from '../../package.json' with {type: 'json'};

const startFunc = ({ fileContent, parseRegex, searchRegex, fileType,
    showLog = false, showLogStep1 = false
}) => {

    if (showLog?.keysOnly) console.log(`${packageJson.name}-start`);
    if (showLog?.withValues) console.log(`${packageJson.name}-inputs : `, fileContent, parseRegex, searchRegex);

    const importLines = extractLines({
        fileContent, parseRegex, searchRegex, fileType,
        showLog: showLogStep1
    });

    if (showLog?.keysOnly) console.log(`${packageJson.name}-end`);
    if (showLog?.withValues) console.log(`${packageJson.name}-outputs : `, importLines);

    return importLines;

};

export default startFunc;