class ListNode {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

function findMiddle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.value;
}

// Example usage:
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const linkedList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

// Find the middle value
const middleValue = findMiddle(linkedList);
console.log(middleValue);
