function segunda(data) {
    if (typeof data === "undefined") {
        console.log("Missing number of occurrences")
    }
    
    if (typeof data === 'number') {
        for (let i = 0; i < data; i++) {
            console.log("C is fun")
        }
    }

    if (typeof data === 'string') {
        console.log("I have a string")
    }
}

segunda()
