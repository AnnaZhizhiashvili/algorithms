class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
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
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var current = this.head;
        var newTail = current;
        while(current.next){
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        if(this.length === 0){
            this.head = null;
            this.tail = null;
        }
        return current;
    }
    shift(){
        if(!this.head) return undefined;
        const currHead = this.head;
        this.head = currHead.next;
        this.length--;
        if(this.length === 0){
            this.tail = null;
        }
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
        }
        this.length++
     }
     get(i){
        if(this.length === 0 || i >= this.length || i < 0 ) return null;
        let currNode = this.head;
        let curr = 0;
        while(curr !== i) {
            currNode = currNode.next;
            curr++;
        }
        return currNode
     }
    set(index, val){
        var foundNode = this.get(index);
        if(foundNode){
            foundNode.val = val;
            return true;
        }
        return false;
    }

    insert(index, value){
        if (index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(value);
        if(index === 0) return !!this.unshift(value);
        let newNode = new Node(value);
        let previousNode = this.get(index - 1);
        let replacedNode = previousNode.next;
        previousNode.next = newNode;
        newNode.next = replacedNode;
        this.length++;
        return true;
    }
    remove(index){
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }
    reverse(){
        let node = this.head;
        this.head = this.tale;
        this.tale = node;
        let next;
        let prev = null;
        for(let i = 0; i< this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
    }
}


let list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE");

console.log(list.set(1, "bye"), list)

