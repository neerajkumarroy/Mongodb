oper.js
_____________________________________________________________________________________________________________________________________________________________________________

//1== const oadd = require("./index");
//2== const oper = require("./index");
const {add,sub,mul} = require("./index");  //--3
// console.log(oper);


// 2== console.log(oper.sub(10,5));

console.log(add(5,5)); // all are mandatory
console.log(sub(10,5));
console.log(mul(10,5));

_____________________________________________________________________________________________________________________________________________________________________________
index.js
____________________________________________________________________________________________________________________________________________________________________________
const add = (a, b) => {

    return a + b;
};

// const name = "neeraj";
const sub = (a, b) => {

    return a - b;
};

const mul = (a, b) => {

    return a * b;
};
// module.exports = add;
          //OR
// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;

        // OR

module.exports = {add, sub, mul};       

// module.exports = name;
