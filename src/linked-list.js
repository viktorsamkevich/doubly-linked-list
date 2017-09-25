const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let node = new Node(data);

        if (this.length == 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        if (this._head == null) {
            return null;
        }
        return this._head.data;
    }

    tail() {
        if (this._tail == null) {
            return null;
        }
        return this._tail.data;
    }

    _at(index) {
        let ind = 0;
        let node = this._head;
        while (1) {
            if (ind == index) {
                return node
            }
            ind++;
            node = node.next
        }
    }

    at(index) {
        return this._at(index).data
    }

    insertAt(index, data) {
        if (this.length == 0 & index == 0){
            let node = new Node(data)
            this._head = node;
            this._tail = node;
            this.length = 1;
            return this;
        }

        if (index < this.length) {

            let node = new Node(data)

            let nodeCur = this._at(index);
            let nodePrev = nodeCur.prev;

            node.prev = nodePrev;
            node.next = nodeCur;
            nodePrev.next = node;

            this.length++;

            return this;
        } else {
            throw new Error("The index of the item that you have selected more than the length of the list.");
        }
    }

    isEmpty() {
        if (this._head == null) {
            return true;
        }
        else {
            return false;
        }
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        return this;
    }

    deleteAt(index) {
        if (index < this.length) {
            let node = this._at(index)
            let nodePrev = node.prev;
            let nodeNext = node.next;
            if (nodeNext != null) {
                nodePrev.next = nodeNext;
            }
            if (nodeNext != null) {
                nodeNext.prev = nodePrev;   
            }
            node.value = null;
            node.next = null;
            if (index == this.length - 1){
                try {
                    this._tail = this._at(this.length - 2)
                }
                catch (Error) {
                    this._head = null;
                    this._tail = null;
                }
            }
            this.length--;
            return this;
        } else {
            throw new Error("The index of the item that you have selected more than the length of the list.");
        }
    }

    reverse() {
        let buff_list =  new LinkedList()

        for (let i = this.length - 1; i >= 0; i--) {
            buff_list.append(this.at(i));
        }

        this._head = buff_list._head;
        this._tail = buff_list._tail;

        return this;
    }

    indexOf(data) {
        let node = this._head;
        let i = 0;
        while (i = this.length) {
            if (node.data == data) {
                return i;
            }
            node = node.next;
            i++;
        }
        return -1;
    }
}

module.exports = LinkedList;
