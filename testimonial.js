let testCon = document.getElementById('testCards');
let arrayTestimonial = [];
let currentIndex = 0;

async function fetchData2() {
    try {
        const res = await fetch('testimonial.json');
        const data = await res.json();
        arrayTestimonial = data;
        displayCard2(arrayTestimonial); // Display the first card (index 2)
    } catch (err) {
        console.log(err);
    }
}

function displayCard2(items) {
    let filterTestimonial = items[currentIndex];
    let element = function (filterTestimonial) {
        return `<div class="testcard center">
                    <div class="info center">
                        <div class="image">
                            <img src="${filterTestimonial.image}">
                        </div>
                        <div class="basic center" style="flex-direction: column;">
                            <h1>${filterTestimonial.name}</h1>
                            <div class="stars" data-rating="${filterTestimonial.star}">
                                <i class="fa-solid fa-star star"></i>
                                <i class="fa-solid fa-star star"></i>
                                <i class="fa-solid fa-star star"></i>
                                <i class="fa-solid fa-star star"></i>
                                <i class="fa-solid fa-star star"></i>
                            </div>
                        </div>
                    </div>
                    <div class="text">
                        <p>${filterTestimonial.review}</p>
                    </div>
                </div>`;
    };

    let disEle = element(filterTestimonial);
    testCon.innerHTML = disEle;

    applyStarRating(); //--> Apply red color to the stars

    // Add event listeners for previous and next buttons
    addEventListeners();
}

// Function add color in star 
function applyStarRating() {
    const starContainer = document.querySelector('.stars');
    const rating = parseInt(starContainer.getAttribute('data-rating'), 10); // Get the rating value

    for (let i = 0; i < rating; i++) {
        starContainer.children[i].classList.add('red');
    }
}

// Function add event listeners for buttons
function addEventListeners() {
    
    const prevBtn = document.querySelector('.prevBtn');
    const nextBtn = document.querySelector('.nextBtn');
    
    prevBtn.removeEventListener('click', handlePrevClick);
    nextBtn.removeEventListener('click', handleNextClick);
    
    prevBtn.addEventListener('click', handlePrevClick);
    nextBtn.addEventListener('click', handleNextClick);
}


function handlePrevClick() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : arrayTestimonial.length - 1;
    displayCard2(arrayTestimonial); 
}

function handleNextClick() {
    currentIndex = (currentIndex < arrayTestimonial.length - 1) ? currentIndex + 1 : 0;
    displayCard2(arrayTestimonial); 
}

fetchData2();
