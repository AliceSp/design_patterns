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

    prepend(node: LinkedNode<T>): void {

        this.head = new LinkedNode(node.value, this.head);
        if (!this.tail) {
            this.tail = this.head;
        }

    }

    append(node: LinkedNode<T>): void {
        if (!this.head) {
            this.head = this.tail;
        }

        let oldTail = this.tail;
        if (oldTail) oldTail.next = node;
        this.tail = node;
    }

    delete(nodeToDelete: LinkedNode<T>): void {
        if(!this.head) {
            return;
        }

        if (this.head === nodeToDelete) {

            if (!this.head.next) {
                this.head =  null;
                this.tail = null;
            } else {
                this.head = this.head.next;
                return;
            }
        }

        let node = this.head;
        while(node?.next) {
            if (node.next = nodeToDelete) {
                node.next = node.next.next;
                return;
            }
            node = node.next;
        }


    }

}