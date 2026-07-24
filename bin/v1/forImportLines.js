import getImportLines from "pattern-collector-anyjs-extract";

const startFunc = ({ fileContent, parseRegex, searchRegex, searchString,
    showLog = false, showLogStep1 = false
}) => {

    const importLines = getImportLines({
        fileContent, parseRegex,
        searchRegex: searchRegex || searchString, showLog: showLogStep1
    });

    if (showLog) console.log("importLines-7 : ", importLines);

    return importLines;
};

export default startFunc;