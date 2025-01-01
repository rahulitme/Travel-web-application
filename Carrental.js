function calculateRental() {
    const carType = document.getElementById('car-select').value;
    const rentalDays = parseInt(document.getElementById('rental-days').value);
    const resultDiv = document.getElementById('result');
  
    if (isNaN(rentalDays) || rentalDays <= 0) {
      resultDiv.textContent = 'Please enter a valid number of days.';
      resultDiv.style.color = 'red';
      return;
    }
  
    let costPerDay = 0;
  
    switch (carType) {
      case 'economy':
        costPerDay = 50;
        break;
      case 'suv':
        costPerDay = 100;
        break;
      case 'luxury':
        costPerDay = 200;
        break;
      default:
        resultDiv.textContent = 'Please select a valid car type.';
        resultDiv.style.color = 'red';
        return;
    }
  
    const totalCost = costPerDay * rentalDays;
    resultDiv.textContent = `Total Rental Cost: $${totalCost}`;
    resultDiv.style.color = 'green';
  }
  