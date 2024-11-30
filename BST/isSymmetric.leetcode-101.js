
    const isSymmetric = function(root) {
        const isMirror =  (r1, r2) => {
            //base case
            return r1.value === r2.value
            && isMirror(r1.left, r2.right)
            && isMirror(r1.right, r2.left)
        }

        isMirror(root, root)
    };
