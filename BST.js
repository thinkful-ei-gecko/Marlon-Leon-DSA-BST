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
  _replaceWith() {

  }

  _findMin() {
    if(this.left != null){
      this.left._findMin;
    }
    else {
      return this;
    }
  }

  remove(key) {
    if (key === this.key){
      if(this.left == null && this.right == null) {
        if(this.key < this.parent) {
          this.parent.left = null;
        } 
        else if(this.key > this.parent) {
          this.parent.right = null;
        } 
      }
      else if(this.right != null && this.left != null) {
        //
      }
      else if(this.left != null){
        //
      }

      else if(this.right != null){
        //
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
    throw new Error('Key does not exist');
   
    //_replaceWith
    //_findMin
  }

  find(key) {
    if (key === this.key) {
      return this;
    }
    else if (key < this.key) {
      this.left.find(key);
    }
    else if (key > this.key) {
      this.right.find(key);
    }
    throw new Error('Key does not exist');
  }
}