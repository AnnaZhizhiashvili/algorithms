// სელექშენ სორტი...აქ ბაბლ სორტისგან განსხვავებით მარცხნივ ვდებთ უმცირეს მნიშვნელობას. თითოეული ინდექსისთვის დავუვლით მასივის შემდგომ ელემენტებს
// შევინახავთ უმცირეს მნიშვნელობას და ამ უმცირესს მარცხნივ ვისვრით.

function selectionSort(arr) {
  let lowest;
  for (let i = 0; i < arr.length; i++) {
    lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) lowest = j;
    }
    // ყოველ ჯერზე რომ არ ვცვალოთ, ვაკეთებთ შემოწმებას, თუ lowest-მა მნიშვნელობა შეიცვალა, ანუ თუ arr[lowest] > arr[j], მხოლოდ მაშინ შევცვლით
    if (i !== lowest) [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
  }
  return arr;
}
