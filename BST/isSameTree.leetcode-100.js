
const isSameTree = function(p, q) {
    function isSame(p, q) {
        // base case both are null
        if (p === null && q === null) {
            return true;
        }
        if(p=== null || q === null) {
            return false;
        }
        return p.value === q.value &&
            isSame(p.left, q.left) &&
            isSame(p.right, q.right)
    }
    return isSame(p, q)

};

// const isSame()