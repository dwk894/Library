/* Library created by Dayu Wang on 06/20/17. */

function Queue() {
    function QueueNode(data) {
        this.val = data;
        this.next = null;
    }
    this.length = 0;
    var head = null, tail = null;
    this.empty = function() {
        return this.length === 0;
    };
    this.push = function(data) {
        if (this.length === 0) {
            head = tail = new QueueNode(data);
        }
        else {
            tail.next = new QueueNode(data);
            tail = tail.next;
        }
        this.length++;
    };
    this.pop = function() {
        if (this.length !== 0) {
            head = head.next;
            if (this.length === 1) {
                tail = null;
            }
            this.length--;
        }
    };
    this.front = function() {
        return head === null ? null : head.val;
    };
}