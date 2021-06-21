function collectStrings(obj) {
    let a = [];

    function f(o) {
        for(let i in o) {
            if (typeof o[i] === "string") a.push(o[i]);
            else if (typeof o[i] === "object" && o[i] !== null) f(o[i]);
        }
    }

    f(obj);

    return a;
}


const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"])