const CORRECT = '2304'; // your password
let input = '';

function appendToDisplay(num) {
  if (input.length >= 4) return; // max 4 digits
  input += num;
  document.getElementById('password-input').value = input;

  if (input.length === 4) checkPassword(); // auto-check
}

function clearDisplay() {
  input = '';
  document.getElementById('password-input').value = '';
}

function checkPassword() {
  if (input === CORRECT) {
    window.location.href = 'option_page.html'; // redirect to your surprise
    // redirect or unlock here
  } else {
    alert('❌ Wrong PIN, try again.');
    clearDisplay();
  }
}