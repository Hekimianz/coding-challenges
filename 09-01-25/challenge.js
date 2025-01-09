// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
// input

//     customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
//     n: a positive integer, the number of checkout tills.

// output

// The function should return an integer, the total time required.
const queueTime = (customers, n) => {
  if (n <= 0) return 0;
  if (customers.length === 0) return 0;

  if (n === 1) {
    return customers.reduce((acc, curr) => acc + curr, 0);
  }

  let tills = new Array(n).fill(0);

  for (let customer of customers) {
    let minTill = Math.min(...tills);
    let minIndex = tills.indexOf(minTill);
    tills[minIndex] += customer;
  }

  return Math.max(...tills);
};
