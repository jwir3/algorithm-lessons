const NUM_ELEMENTS = 20000000;
const ELEMENT_TO_ACCESS = 111728;

class Node {
    constructor(data, next=null) {
        this.next = next;
        this.data = data;
    }

    setNext(next) {
        this.next = next;
    }
}

class LinkedList {
    constructor(firstNode) {
        this.first = firstNode;
    }

    getLength() {
        let i = 0;

        let next = this.first;
        while (next) {
            next = next.next;
            i++;
        }

        return i;
    }

    getElementAt(i) {
        let x = 0;

        let next = this.first;

        while(next && i != x) {
            next = next.next;
            x++;
        }

        // Note that we don't check for null here, which means that we might have
        // reached the end of the list BEFORE we found our element.
        return next;
    }
}

const access_element_from_linked_list = () => {
    let linkedList;
    let lastNode;

    for (let i = 0; i < NUM_ELEMENTS; i++) {
        let nextNode = new Node(i);

        if (lastNode) {
            lastNode.setNext(nextNode);
        }

        if (!linkedList) {
            linkedList = new LinkedList(nextNode);
        }

        lastNode = nextNode;
    }

    // Note that we don't know how long the list is in the same way.
    console.log(`List is: ${linkedList.getLength()} elements`);

    // Let's retrieve a single element from the list and print it.
    console.log(`Element #${ELEMENT_TO_ACCESS}: ${linkedList.getElementAt(ELEMENT_TO_ACCESS).data}`);
};

const access_element_from_array = () => {
    let array = [];

    for (let i = 0; i < NUM_ELEMENTS; i++) {
        array[i] = i;
    }

    console.log(`Array is: ${array.length} elements`);
    // Let's retrieve a single element from the list and print it.
    console.log(`Element #${ELEMENT_TO_ACCESS}: ${array[ELEMENT_TO_ACCESS]}`);
};

// access_element_from_array();
access_element_from_linked_list();