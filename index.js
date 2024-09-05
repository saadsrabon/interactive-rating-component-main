let selectedValue;
const ratingContainer =document.querySelector('.rating_card_container')
const thankContainer =document.querySelector('.thank')
const numbersItemBox = document.querySelector(".number-items");
const submitBtn = document.getElementById('submit_btn');
console.log(numbersItemBox);

// Event listener for the numbers item box
numbersItemBox.addEventListener('click', (e) => {
  console.log(e.target);

  // Check if the clicked target is not the container itself
  if (e.target !== numbersItemBox) {
    // Remove 'show' class from any currently selected element
    const currentlySelected = numbersItemBox.querySelector('.selected');
    if (currentlySelected && currentlySelected !== e.target) {
      currentlySelected.classList.remove('selected');
    }

    // Toggle 'show' class on the clicked element
    e.target.classList.toggle('selected');
    selectedValue=e.target.innerText
    console.log(selectedValue)
  }
});

function submitForm(e) {
  // Add your form submission logic here
  console.log(selectedValue)
  if(selectedValue){
    ratingContainer.classList.add('hidden')
  document.querySelector('.rated').innerText=selectedValue
  thankContainer.classList.remove('hidden')
  }
}
