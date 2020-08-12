const readline = require("readline");
const inp = readline.createInterface({
  input: process.stdin,
});
const userInput = [];
inp.on("line", (data) => {
  userInput.push(data);
});
inp.on("close", () => {
  let n = +userInput[0];
  let arr = userInput[1].split(" ");
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }

  class BST {
    constructor(value) {
      this.root = new Node(value);
      this.count = 1;
    }

    size() {
      return this.count;
    }

    insert(value) {
      this.count++;
      let newNode = new Node(value);
      const searchTree = (node) => {
        if (value < node.value) {
          if (!node.left) {
            node.left = newNode;
          } else {
            searchTree(node.left);
          }
        }

        if (value > node.value) {
          if (!node.right) {
            node.right = newNode;
          } else {
            searchTree(node.right);
          }
        }
      };

      searchTree(this.root);
    } //insert

    toSumTree() {
      const convertSum = (node) => {
        if (node === null) {
          return 0;
        }

        let original = node.value;
        node.value = convertSum(node.left) + convertSum(node.right);
        return node.value + original;
      };
      convertSum(this.root);
    }

    preorder() {
      const preorderIterative = (node) => {
        if (node == null) {
          return [];
        }

        let result = [];
        let stack = [];
        stack.push(node);
        while (stack.length !== 0) {
          let currentNode = stack.pop();
          result.push(currentNode.value);
          // Cause we are using Stack we need to push rightNode first and leftNode next (LIFO)
          if (currentNode.right !== null) {
            stack.push(currentNode.right);
          }

          if (currentNode.left !== null) {
            stack.push(currentNode.left);
          }
        }

        console.log(result);
      };

      preorderIterative(this.root);
    }
  }

  const bst = new BST(+arr[0]);
  for (let i = 1; i < arr.length; i++) {
    bst.insert(+arr[i]);
  }
  bst.toSumTree();
  bst.preorder();
});
