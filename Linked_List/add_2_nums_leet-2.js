import {Node, LinkedList} from './singly_linked_list.mjs';


let myLinkedList = new LinkedList();
myLinkedList.push(1);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(0);
myLinkedList.push(1);

let myLinkedList2 = new LinkedList();
myLinkedList2.push(5);
myLinkedList2.push(6);
myLinkedList2.push(4);

const addTwoNumbers = function(l1, l2) {
    let temp = l1;
    const arr1 = [];
    while(temp) {
        arr1.push(temp.val);
        temp = temp.next;
    }
    temp = l2;
    const arr2 = []
    while(temp) {
        arr2.push(temp.val);
        temp = temp.next;
    }

    arr1.reverse();
    arr2.reverse();
    console.log(parseInt(arr1.join('')))

    const numArray  = (parseInt(arr1.join('')) + parseInt(arr2.join(''))).toString().split('')
    const newList = new Node(null);
    let curr = newList;
    for (let i = numArray.length - 1; i >= 0; i--) {
        curr.next = new Node(numArray[i]);
        curr = curr.next;
    }

    let r = newList;
    while(r) {
        console.log(r.val, "=>?");
        r = r.next;
    }
    return newList.next;


};

addTwoNumbers(myLinkedList.head, myLinkedList2.head)