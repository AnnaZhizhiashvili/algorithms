class Node{
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;

        }
        this.length++;
        return this;
    }
    // 1 2 3
    pop(){
        if(!this.head) return undefined;
        let popped = this.tail;
        this.tail = popped.prev;
        this.tail.next = null;
        //to remove the connections from the node itself;
        popped.prev = null;
        this.length--;
        return popped;
    }
    shift(){
        if(!this.head) return undefined;
        const currHead = this.head;
        if(this.length === 0){
            this.tail = null;
            this.head = null;
        }
        this.head = currHead.next;
        this.head.prev = null;
        currHead.next = null;
        this.length--;
        return currHead;
    }
    unshift(value){
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            let currHead = this.head;
            this.head = newNode;
            newNode.next = currHead;
            currHead.prev = newNode;
        }
        this.length++
    }
    get(i){
        if(this.length === 0 || i >= this.length || i < 0 ) return null;
        let currNode, curr;
        if(i < (this.length / 2)){
             currNode = this.head;
             curr = 0;
            while(curr !== i) {
                currNode = currNode.next;
                curr++;
            }
        } else {
             currNode = this.tail;
             curr = this.length - 1;
            while(curr !== i) {
                currNode = currNode.prev;
                curr--;
            }
        }
        return currNode
    }

    set(index, val){
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return !!this.unshift(val);
        if(index === this.length) return !!this.push(val);

        let newNode = new Node(val);
        let beforeNode = this.get(index-1);
        let afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        let removedNode = this.get(index);
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }

}
const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.unshift(0);

console.log(list.get(4).val)


