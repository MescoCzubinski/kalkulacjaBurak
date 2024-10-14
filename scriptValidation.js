function textToNumber(variable) {
    variable = variable.replace(/[^0-9.,]/g, '');
    if (variable.includes(",")) {
        variable = variable.replace(",", ".");
    }

    variable = oneDot(variable);

    variable = separator(variable);
    return variable;
}

function isPercent(variable) {
    return variable > 100 ? "" : variable;
}

function onlyInteger(variable) {
    if(variable.indexOf('0') === 0){
        return variable.slice(1);
    }

    return variable.includes(".") ? variable.replace(".", "") : variable;
}

function oneDot(variable) {
    const firstDotIndex = variable.indexOf('.');

    if (firstDotIndex === -1){
        return variable;
    }
    if(firstDotIndex === 0){
        variable = "0.";
        return variable;
    }
    const beforeDot = variable.slice(0, firstDotIndex + 1);
    let afterDot = variable.slice(firstDotIndex + 1);
    afterDot = afterDot.replace(".", "");
    afterDot = afterDot.slice(0, 2);

    return beforeDot + afterDot;
}

function separator(variable) {
    const separatorIndex = variable.indexOf('.');
    let beforeDot, afterDot, result = "";

    if (separatorIndex === -1) {
        beforeDot = variable;
        afterDot = '';
    } else {
        beforeDot = variable.slice(0, separatorIndex);
        afterDot = variable.slice(separatorIndex);
    }

    const firstGroupSize = beforeDot.length % 3 || 3;
    result = beforeDot.slice(0, firstGroupSize);
    beforeDot = beforeDot.slice(firstGroupSize);

    while (beforeDot.length > 0) {
        result += " " + beforeDot.slice(0, 3);
        beforeDot = beforeDot.slice(3);
    }
    return result + afterDot;
}