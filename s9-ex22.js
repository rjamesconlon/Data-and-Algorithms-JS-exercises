function stringifyNumbers(obj) {
    let o = JSON.parse(JSON.stringify(obj));

    function f(o) {
        for (let i in o) {
            if (typeof o[i] === "object" && o[i] !== null) f(o[i]);
            else if (typeof o[i] === "number") o[i] = o[i].toString();
        }
    }

    f(o);

    return o;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));

// Expected result:
// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }