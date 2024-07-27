import {Node, LinkedList} from './singly_linked_list.mjs';


let myLinkedList = new LinkedList();
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(9);

let myLinkedList2 = new LinkedList();
myLinkedList2.push(1);
myLinkedList2.push(1);
myLinkedList2.push(1);
myLinkedList2.push(5);
myLinkedList2.push(5);
myLinkedList2.push(5);
myLinkedList2.push(6);
myLinkedList2.push(8);

const deleteDuplicates = function(head) {
    let dummyNode = new Node(null);
    dummyNode.next = head;
    let prev = dummyNode;
    let curr = head;
    while(curr) {
        let dupeCurr = curr;
        let isDupe = false;
        while(dupeCurr.next && dupeCurr.val === dupeCurr.next.val) {
            isDupe = true;
            dupeCurr = dupeCurr.next;
        }
        if (isDupe) {
            prev.next = dupeCurr.next;
        } else {
            prev = curr;
        }
        curr = dupeCurr.next;

    }
    return dummyNode.next;

};

deleteDuplicates(myLinkedList2.head)