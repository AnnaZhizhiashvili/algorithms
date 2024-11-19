const timeRequiredToBuy = function(tickets, k) {
    let time = 0;
    while (true) {
        if (tickets[0] > 0) {
            tickets[0] -= 1; // Buy a ticket
            time++; // Increment time
        }

        if (tickets[k] === 0) {
            return time;
        }
        const firstTicket = tickets.shift();
        tickets.push(firstTicket);
        if (k === 0) {
            k = tickets.length - 1;
        } else {
            k--;
        }


    }
};

console.log(timeRequiredToBuy([5, 1, 1, 1], 0)); // Example test case
