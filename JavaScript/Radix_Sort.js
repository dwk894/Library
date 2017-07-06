/** Created by Dayu Wang (dwk89@mail.umkc.edu) on 07/05/17. */

/** Radix Sort -> [Important] Can ONLY sort the INTEGERS in non-decreasing order!
    @param {[number]} A
    @param {number} num_of_bits -> 32-bit by default
    @return {[number]}
*/
var radix_sort = function(A, num_of_bits = 32) {
    var P = [[], []], N = [[], []], i, k;
    for (k = 0; k < num_of_bits; k++) {
        P[0].push([]);
        P[1].push([]);
        N[0].push([]);
        N[1].push([]);
    }
    for (i = 0; i < A.length; i++) {
        if (A[i] >= 0) P[A[i] & 1][0].push(A[i]);
        else N[A[i] & 1][0].push(A[i]);
    }
    for (k = 1; k < num_of_bits; k++) {
        for (i = 0; i < P[0][k - 1].length; i++) P[P[0][k - 1][i] >> k & 1][k].push(P[0][k - 1][i]);
        for (i = 0; i < P[1][k - 1].length; i++) P[P[1][k - 1][i] >> k & 1][k].push(P[1][k - 1][i]);
        for (i = 0; i < N[0][k - 1].length; i++) N[N[0][k - 1][i] >> k & 1][k].push(N[0][k - 1][i]);
        for (i = 0; i < N[1][k - 1].length; i++) N[N[1][k - 1][i] >> k & 1][k].push(N[1][k - 1][i]);
    }
    return N[0][num_of_bits - 1].concat(N[1][num_of_bits - 1]).concat(P[0][num_of_bits - 1]).concat(P[1][num_of_bits - 1]);
};