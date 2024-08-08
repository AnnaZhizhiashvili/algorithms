import { DoublyLinkedList } from './doubly_linked_list.mjs';

const dll = new DoublyLinkedList(1);
dll.push(2);
dll.push(5);

// 1 2 3 4 5
dll.isPalindrome = function () {
    if (this.length === 0 || this.length === 1) return true;
    let forwardNode = this.head;
    let backwardNode = this.tail;
    for (let i = 0; i < Math.floor(this.length / 2); i ++) {
        if (this.head.value !== this.tail.value) {
            return false;
        }
        forwardNode = forwardNode.next;
        backwardNode = backwardNode.prev;
    }
    return true;
}