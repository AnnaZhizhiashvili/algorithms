// მერჯ სორტის დროს, პირველ რიგში ვყოფთ მასივს ორ, მარცხენა/მარჯვენა ნაწილებად. და რეკურსიულად ასე ვაგრძელებთ დაყოფას, სანამ არ მივიღებთ
// მასივს თითო/0 ელემენტისგან შემდგარს. შემდეგ კი მერჯ ფუნქციით ვასორტირებთ და ვმერჯავთ ორ ერეის.

function merge(arr1, arr2) {
  let newArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }
  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }
  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }
  return newArr;
}
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}


// console.log(mergeSort([1, 17, 20, 13, 18]));
