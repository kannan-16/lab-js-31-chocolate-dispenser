var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

function addChocolates(chocolates, color, number) {
    if(number<=0) {
        return "Number cannot be zero/negative";
    }
    for (i = 0; i < number; i++)
        chocolates.unshift(color);
}

//Trial 2: Remove ___ chocolates from the top the dispenser

function removeChocolates(chocolates, number) {
    let removed = [];
    if(number<=0) {
        return "Number cannot be zero/negative";
    }
    else if(chocolates.length <= number) {
        return "Insufficient chocolates in the dispenser";
    }
    else {
        for (i = 0; i < number; i++)
            removed.push(chocolates.shift());
        return removed;
    }
}

//Trial 3: Dispense ___ chocolates

function dispenseChocolates(chocolates, number) {
    if(number>0 && number<=chocolates.length) {
        let dispensed = [];
        for (i = 0; i < number; i++)
            dispensed.push(chocolates.pop());
        return dispensed;
    }
    else if(number > chocolates.length){
        return "Insufficient chocolates in the dispenser";
    }
    else {
        return "Number cannot be zero/negative";
    }
}

//Trial 4: Dispense ___ chocolates of ____ color

function dispenseChocolatesOfColor(chocolates, number, color) {
    let removed = [];
    if(number>0 && number<=chocolates.length) {
        for (i = 0; i < number; i++) {
            let indexOf = chocolates.lastIndexOf(color);
            removed.push(chocolates[indexOf]);
            chocolates.splice(indexOf, 1);
        }
    return removed;
    }
    else if(number > chocolates.length){
        return "Insufficient chocolates in the dispenser";
    }
    else {
        return "Number cannot be zero/negative";
    }
}

//Trial 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]

function noOfChocolates(chocolates) {
    let types = [];
    chocolates.forEach(e => (types.indexOf(e) == -1) ? types.push(e) : "");
    let numbers = [];
    for (i = 0; i < types.length; i++) {
        numbers[i] = chocolates.reduce((acc, val) => acc += (val == types[i]) ? 1 : 0, 0);
    }
    return numbers;
}

//Trial 6: Sort chocolates based on count in each color. Return array of colors

function sortChocolateBasedOnCount(chocolates) {
    let choco = chocolates.reduce(function (s_choc, choc) {
        if (choc in s_choc) {
            s_choc[choc]++;
        } else {
            s_choc[choc] = 1;
        }
        return s_choc;
    }, {});
    let sortedArray = chocolates.sort((a, b) => {
        if (choco[b] > choco[a]) {
            return 1;
        }
        else if (choco[b] < choco[a]) {
            return -1;
        }
        else if (a > b) {
            return 1;
        }
        else if (a < b) {
            return -1;
        }
    });
    chocolates = sortedArray;
}

//Trial 7: Change ___ chocolates of ____ color to ____ color

function changeChocolateColor(chocolates, number, color, finalColor) {
    var count = 0;
    if(number > 0 && number <= chocolates.length) {
        chocolates = chocolates.map((e) => {
            if (e == color) 
            {
                count++;
                if (changed <= number)
                    return finalColor;
                else
                    return e;
            } 
            else 
            {
                return e;
            }
        });
        return chocolates;
    }
    else {
        return "Number cannot be zero/negative";
    }
}

//Trial 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]

function changeChocolateColorAllOfxCount(chocolates, color, finalColor) {
    let changed = chocolates.map(e => (e == color) ? finalColor : e);
    let count = changed.reduce((acc, val) => acc += (val == finalColor) ? 1 : 0, 0);
    return [count, changed];
}

//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed