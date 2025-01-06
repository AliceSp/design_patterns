export class LinkedNode<T> {
    value: T;
    next: LinkedNode<T> | null = null;

    constructor(value: T, next: LinkedNode<T> | null) {
        this.value = value;
        this.next = next;
    }
}

export class LinkedList<T>{
    head: LinkedNode<T> | null = null;
    tail: LinkedNode<T> | null = null;
    size: number = 0;


    prepend(node: LinkedNode<T>): void {
        node.next = this.head;
        this.head = node;
        if (!this.tail) {
            this.tail = node;
        }
        this.size++;
    }

    append(node: LinkedNode<T>): void {
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            if (this.tail) this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    delete(nodeToDelete: LinkedNode<T>): void {
        if (!this.head) {
            return;
        }

        // If head is the node to delete
        if (this.head === nodeToDelete) {
            this.head = this.head.next;
            if (this.head === null) {
                this.tail = null;  // list becomes empty
            }
            this.size--;
            return;
        }

        let node = this.head;
        while (node.next) {
            if (node.next === nodeToDelete) {
                node.next = node.next.next;
                if (node.next === null) {
                    this.tail = node;  // Update tail if the last node is deleted
                }
                this.size--;
                return;
            }
            node = node.next;
        }
    }

    hasCycle(): boolean {
        if (!this.head || !this.tail) return false;

        let slow: LinkedNode<T> | null = this.head;
        let fast: LinkedNode<T> | null = this.head;

        while(fast != null && fast.next != null && slow != null){
            slow = slow.next;
            fast = fast.next.next;
            if(slow == fast){
                return true;
            }
        }
    
        return false;
    }

    reverse(): void{
        let current = this.head;
        let prev: LinkedNode<T> | null = null;
        let next: LinkedNode<T> | null = null;
        this.tail = this.head;  // After reversal, head becomes tail

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;

    }
}