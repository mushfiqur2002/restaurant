let arraySlide = [];
let slider = document.querySelector('#slider');
let cin = 0; // Initial index

async function fetchData() {
    try {
        const res = await fetch('slideData.json');
        const data = await res.json();
        arraySlide = data;
        showElement(arraySlide);
    } catch (err) {
        console.log(err);
    }
}

const showElement = (datas) => {
    if (datas.length === 0) return; // Check if data is available

    let filterData = datas[cin];
    let element = function (filterData) {
        return `
            <div class="text_context center">
                <h1>${filterData.food_name}</h1>
                <p>${filterData.food_description}</p>
                <div class="btn_context center">
                    <button class="btn center" id="prevBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                            <path d="M640-80 240-480l400-400 71 71-329 329 329 329-71 71Z"/>
                        </svg>
                    </button>
                    <button class="btn center" id="nextBtn">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"/></svg>
                    </button>
                </div>
            </div>
            <div class="image_context center">
                <div class="image_box">
                    <img src="${filterData.food_image}" alt="${filterData.food_name}">
                </div>
            </div>`;
    }

    let disElement = element(filterData);
    slider.innerHTML = disElement;

    // Add event listeners to buttons
    document.getElementById('prevBtn').addEventListener('click', () => {
        cin = (cin > 0) ? cin - 1 : arraySlide.length - 1; 
        showElement(arraySlide);
    });

    document.getElementById('nextBtn').addEventListener('click', () => {
        cin = (cin < arraySlide.length - 1) ? cin + 1 : 0;
        showElement(arraySlide);
    });
};

fetchData();
