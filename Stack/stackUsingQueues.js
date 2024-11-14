
const MyStack = function() {
    this.q = [];
};

MyStack.prototype.push = function(x) {
    this.q.push(x);
    for(let i = 0; i < this.q.length - 1; i++) {
        this.q.push(this.q.shift());
    }
};


MyStack.prototype.pop = function() {
    return this.q.shift()
};


MyStack.prototype.top = function() {
    return this.q[0]

};


MyStack.prototype.empty = function() {
    return this.q.length === 0;

};


const obj = new MyStack()
obj.push(1)
obj.push(2)
obj.push(3)
console.log(obj);

const param_2 = obj.pop()
const param_3 = obj.top()
const param_4 = obj.empty()
console.log(obj);
