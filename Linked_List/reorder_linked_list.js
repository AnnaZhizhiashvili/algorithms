import {Node, LinkedList} from './singly_linked_list.mjs';


let myLinkedList = new LinkedList();
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(9);

let myLinkedList2 = new LinkedList();
myLinkedList2.push(0);
myLinkedList2.push(3);
myLinkedList2.push(5);
myLinkedList2.push(5);
myLinkedList2.push(5);

const reorderList = function(head) {
    let slow = head;
    let fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let secondStart = slow.next;
    let prev = null;
    let curr = secondStart;
    while(curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    secondStart = prev;
    
    slow.next = null; // Important! Cut the list into two parts


    let firstStart = head;
    while(firstStart && secondStart) {
        // Save the next nodes
        let temp1 = firstStart.next;
        let temp2 = secondStart.next;
        // Reorder the nodes
        firstStart.next = secondStart;
        secondStart.next = temp1;
        // Move to the next nodes
        firstStart = temp1;
        secondStart = temp2;
    }
    return head;
};