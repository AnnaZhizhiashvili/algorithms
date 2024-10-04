class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        this.top = new Node(value);
        this.size = 0;
    }
    isEmpty() {
        return this.size === 0;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.size === 0) {
            this.top = newNode;
        } else {
            this.top.next = newNode;
            this.top = newNode;
        }
        this.size++;
        return this;
    }

    pop() {
        if (this.size === 0) return undefined;
        const temp = this.top;
        this.top = this.top.next;
        temp.next = null
        this.size--;
        return temp;
    }
}

function isBalancedParentheses(parentheses) {
    const stack = new Stack();

    for(let char of parentheses) {
        if(char === '(') {
            stack.push('(')
        } else if (char === ')') {
            if (stack.isEmpty) {
                return false;
            }
            stack.pop()
        }
    }
    return stack.isEmpty();
}


function sortStack(stack){


}

