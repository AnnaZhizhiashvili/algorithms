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

const deleteDuplicates = function(head) {
    let temp = head;
    let prev = null;
    while(temp) {
        if (prev && prev.val === temp.val) {
            prev.next = temp.next;
            console.log(prev?.val, temp.val)
        } else {
            prev = temp;
        }
        temp = temp.next;
        console.log(prev?.val, temp?.val, "After loop")

    }
    return head;
};

deleteDuplicates(myLinkedList2.head)