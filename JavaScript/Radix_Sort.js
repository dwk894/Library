/** Created by Dayu Wang (dwk89@mail.umkc.edu) on 07/05/17. */

/** Radix Sort -> [Important] Can ONLY sort non-negative integers!
               -> [Important] Can ONLY sort the numbers in non-decreasing order!
    @param {[number]} A
    @param {number} num_of_bits -> 32-bit by default
    @return {[number]}
*/
var radix_sort = function(A, num_of_bits = 32) {
    var T = [[], []], i, k;
    for (k = 0; k < num_of_bits; k++) {
        T[0].push([]);
        T[1].push([]);
    }
    for (i = 0; i < A.length; i++) T[A[i] & 1][0].push(A[i]);
    for (k = 1; k < num_of_bits; k++) {
        for (i = 0; i < T[0][k - 1].length; i++) T[T[0][k - 1][i] >> k & 1][k].push(T[0][k - 1][i]);
        for (i = 0; i < T[1][k - 1].length; i++) T[T[1][k - 1][i] >> k & 1][k].push(T[1][k - 1][i]);
    }
    return T[0][num_of_bits - 1].concat(T[1][num_of_bits - 1]);
};