/** Created by Dayu Wang (dwk89@mail.umkc.edu) on 06/25/17. */

/** [Must Implement!] -> Comparing Method -> Is x less than y?
    return {boolean} 

    var less_than = function(x, y) {
        if (typeof(x) === 'number' || typeof(x) === 'string') {
            return x < y;
        }
    };
*/

/** Priority Queue
    @param {boolean} min_heap -> Min-Heap (true) or Max-Heap (false)?
*/
function Priority_Queue(min_heap) {
    this.length = 0;
    var heap = [];
    /** Add a new item into the queue.
        @param {item} data
    */
    this.enqueue = function(data) {
        heap.push(data);
        this.length++;
        if (this.length !== 1) {
            var son = this.length - 1, father = Math.floor((son - 1) / 2);
            while (father >= 0 && (less_than(heap[son], heap[father]) === min_heap)) {
                var temp = heap[father];
                heap[father] = heap[son];
                heap[son] = temp;
                son = father;
                father = Math.floor((son - 1) / 2);
            }
        }
    };
    /** Remove the root element from the queue and return it.
        return {item}
    */
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
                if (left < this.length && (less_than(heap[left], heap[min]) === min_heap)) {
                    min = left;
                }
                if (right < this.length && (less_than(heap[right], heap[min]) === min_heap)) {
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