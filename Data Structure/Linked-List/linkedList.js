class LinkedList {
  constructor() {
    this.head = this.tail = null;
  }

  //adds to end of list / tail
  append(value) {
    //if list is empty
    if (!this.tail) {
      this.head = this.tail = new Node(value)
    } else {
      let oldTail = this.tail
      this.tail = new Node(value)
      oldTail.next = this.tail
      this.tail.prev = oldTail;
    }
  }

  //adds to the beginning of the list
  prepend(value) {
    //if list is empty
    if (!this.head) {
      this.head = this.tail = new Node(value);
    } else {
      let oldHead = this.head
      this.head = new Node(value);
      oldHead.prev = this.head;
      this.head.next = oldHead;
    }
  };

  deleteHead() {
    //if list is empty
    if (!this.head) {
      return null
    } else {
      let removeHead = this.head;
      //only one element left in the list
      if (this.head === this.tail) {
        this.head = this.tail = null
      } else {
        this.head = this.head.next
        this.head.prev = null
      }

      return removeHead;
    }
  };

  deleteTail() {
    //if list is empty
    if (!this.tail) {
      return null
    } else {
      let removeTail = this.tail;
      //last node left
      if (this.head === this.tail) {
        this.head = this.tail = null
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null
      }

      return removeTail
    }
  };

  search(value) {
    let currentNode = this.head

    while (currentNode) {
      if (currentNode.value == value) {
        return currentNode
      }
      currentNode = currentNode.next
    }
    return null
  };
}

class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev || null;
    this.next = next || null;
  }
}


//TESTING
const list = new LinkedList();

list.prepend(43)
list.append(1)
list.search(43)

console.table(list)