function calculateDistance(initialSpeed, maxSpeed, totalMinutes) {
  let distance = 0;
  let currentSpeed = initialSpeed;
  const interval = 30;   
  let remainingMinutes = totalMinutes;

  while (remainingMinutes > 0) {
     
    let timeForInterval = Math.min(interval, remainingMinutes);
    
     
    let timeInHours = timeForInterval / 60;

    
    distance += currentSpeed * timeInHours;

     
    remainingMinutes -= timeForInterval;

    
    currentSpeed = Math.min(currentSpeed * 2, maxSpeed);
  }

  return distance;
}

const initialSpeed = 1;       
const maxSpeed = 120;         
const totalMinutes = 96;      

const totalDistance = calculateDistance(initialSpeed, maxSpeed, totalMinutes);
console.log("Total distance traveled:", totalDistance.toFixed(2), "km");