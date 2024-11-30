const maxDepth = function(root) {
    if(!root) return null;
    let left = maxDepth(root.left);
    let right = maxDepth(root.right)
    return 1+ Math.max(left, right)
};