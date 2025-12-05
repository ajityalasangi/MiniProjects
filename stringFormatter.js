function capitalize(str) {
    if (str.length === 0) {
        return "";
    }
    return str.charAt(0).toUpperCase() + str.slice();
}
function toLowerCaseStrs(str) {
    var result = [];
    if (str.length === 0) {
        return [""];
    }
    else {
        for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
            var val = str_1[_i];
            var temp = val.toLowerCase();
            result.push(temp);
        }
    }
    return result;
}
function countWords(str) {
    var count = 0;
    if (str.length === 0) {
        return 0;
    }
    else {
        for (var i = 0; i < str.length; i++) {
            count++;
        }
    }
    return count;
}
function isValidEmail(email) {
    var regexEmailCode = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regexEmailCode.test(email);
}
console.log(isValidEmail("ajityalasangi@gmail.com"));
