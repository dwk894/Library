/** Created by Dayu Wang (dwk89@mail.umkc.edu) on 06/25/17. */

/** [Must Implement!] -> Comparing Method -> Is x less than y?
    return {boolean} 

    var less_than = function(x, y) {
        if (typeof(x) === 'number' || typeof(x) === 'string') {
            return x < y;
        }
    };
*/

/** Heap
    @param {boolean} min_heap -> Min-Heap (true) or Max-Heap (false)?
*/
function Heap(min_heap) {
    var A = [];
    this.length = 0;
    this.empty = function() {
        return this.length === 0;
    };
    this.root = function() {
        if (this.length === 0) {
            return null;
        }
        return A[0];
    };
    /** Add a new item into the heap.
        @param {item} data
    */
    this.push = function(data) {
        A.push(data);
        this.length++;
        if (this.length !== 1) {
            var son = this.length - 1, father = Math.floor((son - 1) / 2);
            while (father >= 0 && (less_than(A[son], A[father]) === min_heap)) {
                var temp = A[son];
                A[son] = A[father];
                A[father] = temp;
                son = father;
                father = Math.floor((son - 1) / 2);
            }
        }
    };
    /** Remove the root of the heap. */
    this.pop = function() {
        if (this.length !== 0) {
            var temp = A[0];
            A[0] = A[A.length - 1];
            A[A.length - 1] = temp;
            A.pop();
            this.length--;
            if (this.length !== 0) {
                var father = 0, left = 2 * father + 1, right = 2 * father + 2, min = father;
                while (true) {
                    if (left < this.length && (less_than(A[left], A[min]) === min_heap)) {
                        min = left;
                    }
                    if (right < this.length && (less_than(A[right], A[min]) === min_heap)) {
                        min = right;
                    }
                    if (min === father) {
                        break;
                    }
                    temp = A[father];
                    A[father] = A[min];
                    A[min] = temp;
                    father = min;
                    left = 2 * father + 1;
                    right = 2 * father + 2;
                }
            }
        }
    };
    /** Update the root value of the heap.
        @param {item} data
    */
    this.update_root = function(data) {
        if (this.length === 0) {
            A.push(data);
            this.length++;
        } else {
            A[0] = data;
            var father = 0, left = 2 * father + 1, right = 2 * father + 2, min = father;
            while (true) {
                if (left < this.length && (less_than(A[left], A[min]) === min_heap)) {
                    min = left;
                }
                if (right < this.length && (less_than(A[right], A[min]) === min_heap)) {
                    min = right;
                }
                if (min === father) {
                    break;
                }
                temp = A[father];
                A[father] = A[min];
                A[min] = temp;
                father = min;
                left = 2 * father + 1;
                right = 2 * father + 2;
            }
        }
    };
}