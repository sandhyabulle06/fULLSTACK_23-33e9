let distance = 19.5;
let price = 0;

if (distance > 0) {
    // First 4 km
    let firstSegment = Math.min(distance, 4);
    price += firstSegment * 30;
    distance -= firstSegment;

    // Next 5 km (5th to 9th km)
    if (distance > 0) {
        let secondSegment = Math.min(distance, 5);
        price += secondSegment * 10;
        distance -= secondSegment;
    }

    // Next 10 km (10th to 19th km)
    if (distance > 0) {
        let thirdSegment = Math.min(distance, 10);
        price += thirdSegment * 15;
        distance -= thirdSegment;
    }

    // Beyond 19 km
    if (distance > 0) {
        price += distance * 20;
    }
}

console.log("Total price:", price);