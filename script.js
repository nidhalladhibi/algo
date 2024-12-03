function sumOfDistinctElements(set1, set2) {
    // Combine both arrays
    let combinedSet = [...set1, ...set2];

    // Remove duplicates using a Set
    let distinctSet = [...new Set(combinedSet)];

    // Calculate the sum of the distinct elements
    let sum = distinctSet.reduce((acc, curr) => acc + curr, 0);

    return sum;
}

// Example usage:
let set1 = [13, 1, 7, 91];
let set2 = [12, 4, 1, 9, 3];
console.log(sumOfDistinctElements(set1, set2)); // Output: 13


function dotProduct(v1, v2) {
    // Ensure both vectors have the same length
    if (v1.length !== v2.length) {
        throw new Error("Vectors must be of the same length");
    }

    // Calculate the dot product
    let dotProd = 0;
    for (let i = 0; i < v1.length; i++) {
        dotProd += v1[i] * v2[i];
    }

    // Check for orthogonality
    let isOrthogonal = dotProd === 0;

    return { dotProduct: dotProd, isOrthogonal: isOrthogonal };
}

// Example usage:
let v1 = [1, 2, 3];
let v2 = [4, -5, 6];
let result = dotProduct(v1, v2);

console.log("Dot Product:", result.dotProduct); // Output: Dot Product: 12
console.log("Are the vectors orthogonal?", result.isOrthogonal); // Output: Are the vectors orthogonal? false
