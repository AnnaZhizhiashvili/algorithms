import {Node, LinkedList} from './singly_linked_list.mjs';


let myLinkedList = new LinkedList();
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(9);

let myLinkedList2 = new LinkedList();
myLinkedList2.push(0);
myLinkedList2.push(3);
myLinkedList2.push(7);
myLinkedList2.push(5);

const mergeTwoLists = function(list1, list2) {
    let newList = new Node(null);
    let head = newList;
    while(list1 !== null && list2 !== null ) {
        if (list1.val < list2.val){
            newList.next = list1;
            list1 = list1.next;
        } else {
            newList.next = list2;
            list2 = list2.next;
        }
        newList = newList.next;
    }
    if(list1 === null) newList.next = list2
    if(list2 === null) newList.next = list1

    let temp = head;
    while(temp) {
        temp = temp.next;
    }
    return head.next;

};
mergeTwoLists(myLinkedList.head, myLinkedList2.head)
