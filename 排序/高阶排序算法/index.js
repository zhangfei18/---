// 归并排序
let sortArr = [5, 3, 2, 4, 1];
function mergeSort(arr) {
    const len = arr.length;
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(len / 2);
    // console.log(arr.slice(0, mid))
    // console.log(arr.slice(mid, len))
    let leftArr = mergeSort(arr.slice(0, mid));
    let rightArr = mergeSort(arr.slice(mid, len));
    arr = mergeArr(leftArr, rightArr);
    // console.log(arr)
    return arr;
}
function mergeArr(arr1, arr2) {
    // 初始化两个指针，分别指向 arr1 和 arr2
    let i = 0, j = 0
    // 初始化结果数组
    const res = []
    // 缓存arr1的长度
    const len1 = arr1.length
    // 缓存arr2的长度
    const len2 = arr2.length
    // 合并两个子数组
    while (i < len1 && j < len2) {
        if (arr1[i] < arr2[j]) {
            res.push(arr1[i])
            i++
        } else {
            res.push(arr2[j])
            j++
        }
    }
    // 若其中一个子数组首先被合并完全，则直接拼接另一个子数组的剩余部分
    if (i < len1) {
        return res.concat(arr1.slice(i))
    } else {
        return res.concat(arr2.slice(j))
    }
}
// mergeSort(sortArr);
// console.log(mergeSort(sortArr));
// 快排
/**
 * 1.选择基数，遍历数组，将小于基数的放到基数左边，大于基数的放到基数的右边，
 * 2.将第一步分开的两个数组继续执行12步骤
 */
function quickSort(arr) {
    const len = arr.length;
    if (len <= 0) {
        return [];
    }
    let ji = arr[0];
    let leftArr = [];
    let rightArr = [];
    for (let i = 1; i < len; i++) {
        if(arr[i] < ji){
            leftArr.push(arr[i]);
        }else{
            rightArr.push(arr[i]);
        }
    }
    console.log(111)
    return quickSort(leftArr).concat(ji,quickSort(rightArr));
}   
console.log(quickSort(sortArr));