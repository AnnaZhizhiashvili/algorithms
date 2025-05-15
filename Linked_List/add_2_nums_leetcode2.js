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

function addTwoNumbers(l1, l2) {
    let carry = 0;
    let dummy = new Node(0);
    let curr = dummy;
    while(l1 || l2 || carry) {
        let val1 = l1 ? l1.val : 0;
        let val2 = l2 ? l2.val : 0;

        let sum = val1 + val2 + carry;

        carry = Math.floor(sum / 10);

        curr.next = new Node(sum % 10);
        curr = curr.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;

    }
    return dummy.next;
    

}