//编写一个程序，计算1+2+3+4+...，若在求和过程中发现和值为5050，则跳出循环，
//并输出已执行循环的次数。



//编写另一个程序，计算1到100之间（含1和100）的所有个位数不为7的自然数之和。




//以下函数使用递归计算n!（阶乘，把1到n的所有整数相乘）的值，试试不用递归，用一般的循环来编写。
var fact = function (n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * (arguments.callee(n - 1));
    }
}
console.log(fact(4));