class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // Add a node to the end of the circular linked list
    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            // If the list is empty, make the new node the head and point it to itself
            this.head = newNode;
            newNode.next = this.head;
        } else {
            // Traverse to the last node and make it point to the new node
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
        }
        this.size++;
    }

    // Print the values in the circular linked list
    print() {
        if (!this.head) {
            console.log('Circular linked list is empty');
            return;
        }

        let current = this.head;
        do {
            console.log(current.value);
            current = current.next;
        } while (current !== this.head);
    }
}

// Example Usage:
const circularList = new CircularLinkedList();
circularList.append(1);
circularList.append(2);
circularList.append(3);
circularList.append(4);

// Print the circular linked list
circularList.print();
