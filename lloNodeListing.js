// Class to represent a node in the linked list
class Node {
  constructor(value) {
      this.value = value;
      this.next = null;
  }
}

// Class to represent the linked list
class LinkedList {
  constructor() {
      this.head = null;
      this.size = 0;
  }

  // Function to append a new node to the linked list
  append(value) {
      const newNode = new Node(value);
      if (this.head === null) {
          this.head = newNode;
      } else {
          let current = this.head;
          while (current.next !== null) {
              current = current.next;
          }
          current.next = newNode;
      }
      this.size++;
  }

  // Function to print the linked list
  print() {
      let current = this.head;
      while (current !== null) {
          console.log(current.value);
          current = current.next;
      }
  }
}

// Create a new linked list instance
const linkedList = new LinkedList();

// Append the specified items to the linked list
linkedList.append("Data Structures-Array");
linkedList.append("Variable Type-Integer");
linkedList.append("Sorting Algorithm-Bubble Sort");

// Print the linked list
linkedList.print();