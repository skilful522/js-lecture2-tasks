function drawTriangle(size) {
    var leftSide = "/";
    var rightSide = "\\";
    var i = 0;
    while (i < size) {
        indent = "";
        for (j = 0; j < size - i; j++) {
            indent += " ";
        }
        for (j = 0; j < i + 1; j++) {
            if (j === 0) {
                space = ""
            } else space += "  ";
        }
        if (i === size - 1) {
            console.log(indent + leftSide + space.replace(/ /g, "_") + rightSide);
        } else console.log(indent + leftSide + space + rightSide);
        i++;
    }
}

function drawReverseTriangle(size) {
    var leftSide = "/";
    var rightSide = "\\";
    var i = 0;
    while (i < size) {
        indent = "";
        space = "";
        for (let j = 0; j < i + 1; j++) {
            if (j === 0) {
                space = "";
            } else space += " ";
        }
        for (let j = 0; j < size - i; j++) {
            if (j === 0) {
                indent += "";
            } else indent += "  ";
        }
        console.log(" " + space + rightSide + indent + leftSide);
        i++;
    }
}

function drawRomb(size) {
    var leftSide = "/";
    var rightSide = "\\";
    var i = 0;
    while (i < size) {
        indent = "";
        for (j = 0; j < size - i; j++) {
            indent += " ";
        }
        for (j = 0; j < i + 1; j++) {
            if (j === 0) {
                space = ""
            } else space += "  ";
        }
        if (i === size - 1) {
            console.log(indent + leftSide + space + rightSide)
            drawReverseTriangle(size);
        } else console.log(indent + leftSide + space + rightSide);
        i++;
    }
}

function multiply(a, b) {
    let c = a;
    if (a === 0 || b === 0) {
        return 0;
    }
    if (b > 0) {
        for (let i = 1; i < b; i++) {
            a = c + a;
        }
        return a;
    } else {
        b = Math.abs(b);
        for (let i = 1; i < b; i++) {
            a = c + a;
        }
        return -a;
    }
}

console.log(multiply(2, 3));
drawTriangle(3);
console.log("\n");
drawRomb(3);

