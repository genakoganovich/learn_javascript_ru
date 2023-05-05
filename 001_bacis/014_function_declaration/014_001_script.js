function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

function checkAgeTernaryOperator(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');  
}

function checkAgeOR(age) {
  return (age > 18) || confirm('Родители разрешили?'); 
}
