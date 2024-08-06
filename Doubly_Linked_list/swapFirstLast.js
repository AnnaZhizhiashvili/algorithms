import { DoublyLinkedList } from './doubly_linked_list.mjs';

const dll = new DoublyLinkedList(1);
dll.push(2);
dll.push(5);

dll.swapFirstLast = function swapFirstLast() {
    if (this.length === 0 || this.length === 1) return;
    const firstNode = this.head;
    const lastNode = this.tail;
    const secondNode = this.head.next;
    const secondLastNode = this.tail.prev;

    this.head = lastNode;
    this.tail = firstNode;

    this.head.prev = null;
    this.head.next = secondNode;
    secondNode.prev = this.head;

    this.tail.next = null;
    this.tail.prev = secondLastNode;
    secondLastNode.next = this.tail;
}

dll.swapFirstLast();
