import { LinkedList} from './singly_linked_list.mjs';


let myLinkedList = new LinkedList();
myLinkedList.push(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);
myLinkedList.push(6);

myLinkedList.hasLoop = function () {
    let slow = this.head;
    let fast = this.head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if(fast === slow) {
            return true;
        }
    }
    return false;
}

console.log(myLinkedList.hasLoop())