// ინსერშენ სორტის დროს შედარებას ვიწყებთ მასივის მეორე ელემენტიდან. მას ვადარებთ მის მარცხნივ მყოფ მნიშვნელობებს, და ვეძებთ მისთვის შესაფერის ადგილს.
// თავდაპირველად ვინახავ ვალიუს. ამ ვალიუდან მარცხნივ უკან ვლუფავ, თუ ჩემი შენახული ვალიუ ნაკლებია შემხვედრ ვალიუზე, ამ ვალიუს გადმოვვსვავ მარჯვნივ და მის ადგილს დაიკავებს შემდგომში
// ჩემი შენახული ვალიუ.
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currValue; j--) {
      if (currValue < arr[j]) {
        arr[j + 1] = arr[j];
      }
    }
    arr[j + 1] = currValue;
  }
  return arr;
}

// console.log(insertionSort([7, 3, 10, 4, 100, 98]));
