var arr = [1, 1, 1, 1, 1, 1];
//数组的splice方法能够方便地对数组进行删除、插入、替换操作，例如
arr.splice(1, 3, 9, 9);//从第二个元素（索引1）开始删除3个元素，然后在该位置插入两个元素：9,9
console.log(arr);//输出[ 1, 9, 9, 1, 1 ]
//如果不使用splice方法，请编程实现上面的效果。

