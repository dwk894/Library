/** Library created by Dayu Wang (dwk89@mail.umkc.edu) on 06/22/17. */

function Stack() {
    function StackNode(data) {
        this.val = data;
        this.next = null;
    }
    this.length = 0;
    var head = null;
    this.empty = function() {
        return this.length === 0;
    };
    this.push = function(data) {
        if (this.length === 0) {
            head = new StackNode(data);
        }
        else {
            var H = new StackNode(data);
            H.next = head;
            head = H;
        }
        this.length++;
    };
    this.pop = function() {
        if (this.length !== 0) {
            head = head.next;
            this.length--;
        }
    };
    this.top = function() {
        return head === null ? null : head.val;
    };
}