// 冒泡
/**
 * 外层循环控制要比较多少轮
 * 内层循环控制要两两比较多少个数
 */
function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
let sortArr = [5, 3, 2, 4, 1];
function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}
// console.log(bubbleSort(sortArr));
// 选择排序
function selectSort(arr) {
    let len = arr.length;
    let min;
    for (let i = 0; i < len - 1; i++) {
        min = i;
        for (let j = i; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            swap(arr, min, i);

        }
    }
}
// selectSort(sortArr);
// console.log(sortArr);
// 插入排序
/**
 * 遍历数组， 把原数组当成两个数组，第一个数组是i(当前元素)【之前】的所有元素集合(排好顺序的)，第二个数组是当前元素【之后】的元素集合，
 * 每遍历到一个元素就去第一个数组中去遍历while循环，一直遍历到不大于当前元素i的元素，就进行替换
 */
function insertSort(arr) {
    let cur, temp, len = arr.length;
    for (let i = 0; i < len; i++) {
        cur = i;
        temp = arr[cur];
        while (cur > 0 && temp < arr[cur - 1]) {
            arr[cur] = arr[cur - 1];
            cur--;
        }
        arr[cur] = temp;
    }
}
insertSort(sortArr);
console.log(sortArr);