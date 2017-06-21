/* Created by Dayu Wang on 06/20/17. */

/* A min Priority Queue */
/* Change the operator in lines 13, 34, and 37 to change comparison method. */
function Priority_Queue() {
    this.length = 0;
    var heap = [];
    this.enqueue = function(data) {
        heap.push(data);
        this.length++;
        if (this.length !== 1) {
            var son = this.length - 1, father = Math.floor((son - 1) / 2);
            while (father >= 0 && heap[father] > heap[son]) {
                var temp = heap[father];
                heap[father] = heap[son];
                heap[son] = temp;
                son = father;
                father = Math.floor((son - 1) / 2);
            }
        }
    };
    this.dequeue = function() {
        if (this.length === 0) {
            return null;
        }
        var smallest = heap[0], temp = heap[0];
        heap[0] = heap[heap.length - 1];
        heap[heap.length - 1] = temp;
        heap.pop();
        this.length--;
        if (this.length !== 0) {
            var father = 0, left = 2 * father + 1, right = 2 * father + 2, min = father;
            while (true) {
                if (left < this.length && heap[left] < heap[min]) {
                    min = left;
                }
                if (right < this.length && heap[right] < heap[min]) {
                    min = right;
                }
                if (min === father) {
                    break;
                }
                temp = heap[father];
                heap[father] = heap[min];
                heap[min] = temp;
                father = min;
                left = 2 * father + 1;
                right = 2 * father + 2;
            }
        }
        return smallest;
    };
    this.empty = function() {
        return this.length === 0;
    };
}