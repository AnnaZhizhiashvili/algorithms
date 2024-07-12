class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if(!this.head) return undefined;
        let temp = this.head;
        let prev = temp;
        while(temp.next) {
            prev = temp;
            temp = temp.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
            this.head = null;
        }
        return temp;
    }

    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    shift() {
        if(!this.head) return undefined;
        const temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        this.length--;
        if(this.length === 0) {
            this.tail = null;
        }
        return temp;
    }

    get(index) {
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        for(let i = 0; i < index; i++) {
            temp = temp.next;
        }
        return temp;
    }
    set(index, value) {
        const temp = this.get(index);
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;

    }

    insert(index, value) {
        if(index < 0 || index > this.length) return false;
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);

        const newNode = new Node(value);
        let prevNode = this.get(index - 1);
        newNode.next = prevNode.next;
        prevNode.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index > this.length - 1) return false;
        if (index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();

        let prevNode = this.get(index - 1);
        let removedNode = prevNode.next;
        prevNode.next = removedNode.next;
        removedNode.next = null;
        this.length--;
        return removedNode;
    }

    reverse() {
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let prev = null;
        let next = temp.next;

        while(temp) {
            next = temp.next;

            temp.next = prev;
            prev = temp;
            temp = next;
        }

        return this;
    }


}