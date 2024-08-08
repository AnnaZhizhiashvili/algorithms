import {Node,  DoublyLinkedList } from './doubly_linked_list.mjs';

const dll = new DoublyLinkedList(1);
dll.push(2);
dll.push(3);
dll.push(4);

dll.swapPairs = function () {
    if(this.length === 0) return undefined;
    if (this.length === 1) return this;
    let dummyNode = new Node(null);
    dummyNode.next = this.head;
    let curr = dummyNode;

    while(curr.next && curr.next.next) {
        let first = curr.next;
        let second = curr.next.next;

        first.next = second.next;
        if (second.next) {
            second.next.prev = first;
        }
        second.next = first;
        first.prev = second;
        curr.next = second;
        second.prev = curr;
        curr = first;
    }
    this.head = dummyNode.next;
    this.printList()
    return this;
}

dll.swapPairs();


