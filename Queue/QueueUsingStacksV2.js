
const MyQueue = function() {
    this.stack = [];
    this.stackReversed = [];
};

MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};


MyQueue.prototype.pop = function() {
    if (this.stackReversed.length === 0) {
        while (this.stack.length > 0) {
            this.stackReversed.push(this.stack.pop());
        }
    }
    return this.stackReversed.pop();
};


MyQueue.prototype.peek = function() {
    if (this.stackReversed.length === 0) {
        while (this.stack.length > 0) {
            this.stackReversed.push(this.stack.pop());
        }
    }
    return this.stackReversed[this.stackReversed.length - 1];

};


MyQueue.prototype.empty = function() {
    return this.stack.length === 0 && this.stackReversed.length === 0;
};

