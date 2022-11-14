const displayCounter = $("#display-counter");
const increaseButton = $("#increase");
const resetButton = $("#reset");
const decreaseButton = $("#decrease");
let count = 0;

//event listeners
//increase
increaseButton.click(() => {
  count++;
  displayCounter.text(count);
  console.log(count);
  
  if (count > 0) {
    displayCounter.css('color', 'var(--first-color)');
  } else if (count === 0) {
    displayCounter.css('color', 'inherit');
  }
});

//reset
resetButton.click(() => {
  count = 0;
  displayCounter.text(count);
  displayCounter.css('color', 'inherit');
});

//decrease
decreaseButton.click(() => {
  count--;
  displayCounter.text(count);
  
  console.log(count);
  if (count < 0) {
    displayCounter.css('color', 'var(--fourth-color)');
  } else if (count === 0) {
    displayCounter.css('color', 'inherit');
  }
})
