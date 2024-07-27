import {LinkedList} from './singly_linked_list.mjs';


let myLinkedList = new LinkedList();
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);

myLinkedList.findMiddleNode = function() {
    let slow = this.head;
    let fast = this.head;
    while(fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    console.log(slow)
    return slow;
}
myLinkedList.printList();
myLinkedList.findMiddleNode()