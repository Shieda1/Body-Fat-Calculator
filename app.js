// https://www.omnicalculator.com/health/body-fat

const genderSelect =  document.getElementById('gender');
const age =  document.getElementById('age');
const height =  document.getElementById('height');
const weight =  document.getElementById('weight');
const btn = document.getElementById('btn');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');

let gender = 0;

genderSelect.addEventListener('click', function() {
  if(genderSelect.value === 'male')
    gender = 0;

  else if(genderSelect.value === 'female')
    gender = 1;
})

btn.addEventListener('click', function() {
  
  result1.textContent = `Average body fat = ${Math.round(computeBodyFat())}%`;
  result2.textContent = `Body fat weight = ${Math.round(computeBodyFatWeight())}kg`;
})

// calculation

function computeBMI() {
  let heightInCm = Number(height.value) / 100;
  return Number(weight.value) / Math.pow(heightInCm, 2);
}

function computeBodyFat() {
  let ageValue = Number(age.value);
  let BMI = computeBMI();
  return -44.988 + (0.503 * ageValue) + (10.689 * gender) + (3.172 * BMI) - (0.026 * Math.pow(BMI, 2)) + (0.181 * BMI * gender) - (0.02 * BMI * ageValue)
  - (0.005 * Math.pow(BMI, 2) * gender) + (0.00021 * Math.pow(BMI, 2) * ageValue);
}

function computeBodyFatWeight() {
  return (computeBodyFat() / 100) * Number(weight.value)
}