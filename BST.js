'use strict';

class BST {
  constructor (key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    if (this.key == null) {
      this.key = key;
      this.value = value;
    }
    else if (key < this.key) {
      if (this.left == null) {
        this.left = new BST(key, value, this);
      }
      else {
        this.left.insert(key, value);
      }
    }
    else if (key > this.key) {
      if (this.right == null) {
        this.right = new BST(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }
  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      }
      else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    }
  }

  _findMin() {
    if(this.left != null){
      this.left._findMin();
    }
    else {
      return this;
    }
  }

  remove(key) {
    if (key == this.key){
      if(this.left == null && this.right == null) {
        this._replaceWith(null);
      }
      else if(this.right != null && this.left != null) {
        let sucessor = this.right._findMin();
        this.key = sucessor.key;
        this.value = sucessor.value;
        this.remove(sucessor);
      }
      else if(this.left != null){
        this._replaceWith(this.left);
      }

      else if(this.right != null){
        this._replaceWith(this.right);
      }
    }
    else if (key < this.key){
      if(this.left != null){
        this.left.remove(key);
      }
    }
    else if (key > this.key){
      if(this.right != null){
        this.right.remove(key);
      }
    }
    else {
      throw new Error('Key does not exist');
    }
  }

  find(key) {
    if (key === this.key) {
      return this.value;
    }
    else if (key < this.key) {
      this.left.find(key);
    }
    else if (key > this.key) {
      this.right.find(key);
    }
    else {
      throw new Error('Key does not exist');
    }
  }
}

function main() {
  let firstBST = new BST;

  firstBST.insert(5);
  firstBST.insert(3);
  firstBST.insert(7);
  firstBST.insert(2);
  firstBST.insert(4);
  firstBST.insert(1);
  firstBST.insert(6);
  firstBST.insert(9);
 
  return firstBST;
}

// console.log(main());

//Question 4
//O(n)


//Question 5
//O(n)
function findHeight(t, h = 0) {
  if (!t) {
    return h;
  }
  h++;
  let leftResult;
  let rightResult;
  leftResult = findHeight(t.left, h);
  rightResult = findHeight(t.right, h);
  if (leftResult > rightResult) {
    h = leftResult;
  }
  else if (rightResult > leftResult) {
    h = rightResult;
  }
  return h;
}
// console.log(findHeight(main()));

//Question 6 

let firstNode = new BST(this.key= 1, this.value= null, this.parent= null);
let secondNode = new BST(this.key=3, this.value= null, this.parent=null);
let thirdNode = new BST(this.key=2, this.value= null, this.parent= null);
firstNode.left = secondNode;
firstNode.right = thirdNode;

function isItABST(t) {
  if (!t) {
    return true;
  }
  if (t.left && t.left.key > t.key || t.right && t.right.key < t.key) {
    return false;
  }
  let checkLeft = isItABST(t.left);
  let checkRight = isItABST(t.right);
  if (!checkLeft || !checkRight) {
    return false;
  }
  return true;
}

// console.log(isItABST(firstNode));
// console.log(firstNode);

//first find the largest value of the tree
//2nd largest value
//if left go to the farthest value in the tree
//if !left go up one node
//
//3rd largest value 
//if left go to the farthest value in the tree
//if !left go up one node

// function findGreatestNode(t) {
//   let curr = t;
//   while(curr.right != null){
//     curr = curr.right;
//   }

//   return curr;
// }

// function thirdLargestNode(t) {
//   let currNode = findGreatestNode(t);

//   for(let i = 0; i < 2; i++){
//     if(currNode.left){
//       currNode = findGreatestNode(currNode.left);
//     } 
//     else{
//       currNode = currNode.parent;
//     }
//   }

//   return currNode.key;
// }

// console.log(thirdLargestNode(main()));



function thirdGreatestNode(t, count=0) {
  //find greatest on right til null
  let currNode = t;
  while (currNode != null) {
    currNode = currNode.next;
  }
  count++;

  if (count === 3) {
    return t;
  }
  
  if (currNode.left) {
    thirdGreatestNode(currNode.left, count);
  }
  else {
    return upPhase(currNode, count+1);
  }
}

function upPhase(t, count) {
  let currNode = t.parent;
  if (count === 3) {
    return t;
  }
  if (currNode.left) {
    thirdGreatestNode(currNode.left, count);
  }
  else {
    upPhase(t, count+1);
  }

}

// console.log(thirdGreatestNode(main()));

function tree(t, count=0){
  if(!t){
    count++;
    return;
  }
  tree(t.right, count);
  if (count ===3) {
    return t.key;
  }
  tree(t.left, count);
}

// console.log(main());
console.log(tree(main()));
