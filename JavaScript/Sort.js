/** Created by Dayu Wang (dwk89@mail.umkc.edu) on 06/25/17. */

/** [Must Implement!] -> Comparing Method -> Is x less than y?
    return {boolean} 

    var less_than = function(x, y) {
        if (typeof(x) === 'number' || typeof(x) === 'string') {
            return x < y;
        }
    };
*/

/** Sorting Function
    @param {boolean} direction -> increasing (true) or decreasing (false)?
*/
function Sort(direction) {
    function heapify(A, i, l, increasing) {
        var left = 2 * i + 1, right = 2 * i + 2, largest = i;
        if (left < l && (less_than(A[largest], A[left]) === increasing)) {
            largest = left;
        }
        if (right < l && (less_than(A[largest], A[right]) === increasing)) {
            largest = right;
        }
        if (largest !== i) {
            var temp = A[largest];
            A[largest] = A[i];
            A[i] = temp;
            heapify(A, largest, l, increasing);
        }
    }
    function build_heap(A, i, l, increasing) {
        var left = 2 * i + 1, right = 2 * i + 2;
        if (left < l) {
            build_heap(A, left, l, increasing);
        }
        if (right < l) {
            build_heap(A, right, l, increasing);
        }
        heapify(A, i, l, increasing);
    }
    function heap_sort(A, l, increasing) {
        build_heap(A, 0, l, increasing);
        for (var i = l - 1; i > 0; i--) {
            var temp = A[0];
            A[0] = A[i];
            A[i] = temp;
            l--;
            heapify(A, 0, l, increasing);
        }
    }
    /** Array Sorting
        @param {item[]} A
        @param {boolean} increasing -> Sort in increasing order (true) or decreasing order (false)?
    */
    this.sort = function(A, increasing = direction) {
        heap_sort(A, A.length, increasing);
    };
}