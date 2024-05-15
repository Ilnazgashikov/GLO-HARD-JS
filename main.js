"use strict";

const dff = (arg) => {
    let res = 'Ожидается появление строки...';
    if (typeof arg === "string") {
        const maxLength = 30;
        const str = arg.trim();
        if (str.length > maxLength) {
            res = str.substr(0, maxLength) + '...';
        } else {
            res = str;
        }
    }
    return res;
};

console.log(dff(5));
console.log(dff('    Строка менее 30 символов     '));
console.log(dff('    Строка более 30 символов -  очень длинная строчка'));