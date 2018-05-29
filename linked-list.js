'use strict';

class _Node {
  constructor(value, next) {
    this.value=value;
    this.next=next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  dequeue() {
    let tempNode = this.head;
    while(tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = new _Node(this.head.value, null);
    this.head = this.head.next;
  }


  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else { 
      let tempNode = this.head;
      while(tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    let currentNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currentNode.next !== null) {
      if (currentNode.value === item) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }
  // their implementation of find :
  //   find(item) { 
  //     //start at the head
  //     let currNode = this.head;
  //     //if the list is empty
  //     if (!this.head){
  //       return null;
  //     }
  //     //Check for the item 
  //     while(currNode.value !== item) {
  //       //return null if end of the list 
  //       // and the item is not on the list
  //       if (currNode.next === null) {
  //         return null;
  //       }
  //       else {
  //         //otherwise keep looking 
  //         currNode = currNode.next;
  //       }
  //     }
  //     //found it
  //     return currNode;
  //   }

  remove(item) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currentNode = this.head;
    let previousNode = this.head;
    while ((currentNode !== null) && (currentNode.value !== item)) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if(currentNode === null){
      console.log('Item not found');
      return;
    }
    previousNode.next = currentNode.next;
  }


  insertBefore(item, before) {
    if (!this.head) {
      return null;
    }
    if (this.head.value === before) {
      this.insertFirst(item);
      return;
    } else {
      let currentNode = this.head;
      let previousNode = this.head;
      while ((currentNode !== null) && (currentNode.value !== before)) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      if (currentNode === null) {
        console.log('Item you are trying to insert before is not found');
        return;
      }
      previousNode.next = new _Node(item, currentNode);
    }
  }

  insertAfter(item, after) {
    if (!this.head) {
      return null;
    }
    let currentNode = this.find(after);
    if (currentNode) {
      let nextNode = currentNode.next;
      currentNode.next = new _Node(item, nextNode);
      return;
    }
    console.log('Item you are trying to insert after is not found');
  }

  insertAt(item, position) {
    if (!this.head) {
      return null;
    }
    if (position === 1) {
      this.insertFirst(item);
      return;
    }
    let i = 0;
    let currentNode = this.head;
    let previousNode = this.head;
    while ((i < (position - 1)) && (currentNode !== null)) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      i++;
    }
    if (currentNode === null) {
      console.log('Position exceeds the length of the list');
      return;
    }
    previousNode.next = new _Node(item, currentNode);
  }
}








module.exports = {LinkedList};