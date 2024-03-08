function mincost(arr) {
    const Heap = require('collections/heap'); // Importing min-heap from collections library

    // Initialize a min heap to store the lengths of the ropes
    const minHeap = new Heap(arr);

    let cost = 0;

    // Connect the ropes until there is only one rope left
    while (minHeap.length > 1) {
        // Extract the two shortest ropes from the min heap
        const shortest1 = minHeap.pop();
        const shortest2 = minHeap.pop();

        // Calculate the cost of connecting these ropes
        const currentCost = shortest1 + shortest2;

        // Add the current cost to the total cost
        cost += currentCost;

        // Add the connected rope back to the min heap
        minHeap.push(currentCost);
    }

    return cost;
}

module.exports = mincost;
