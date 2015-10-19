var results = [];

function messageHandler(e) {
    if(e.data > 0) {
        generateFibonacciSeries(e.data);
    }
}

function calculateNextFibonacciValue(n) {
    var s = 0;
    var returnValue;

    if(n == 0) {
        return (s);
    }

    if(n == 1) {
        return s += 1;
    }
    else {
        return (calculateNextFibonacciValue(n-1) + calculateNextFibonacciValue(n-2));
    }
}

function generateFibonacciSeries(n) {
    results.length = 0;

    for(var i = 0; i < n; i++) {
        results.push(calculateNextFibonacciValue(i));
    }

    //communicates back to main UI thread
    //.onmessage
    postMessage(results);
}

addEventListener("message", messageHandler, true);