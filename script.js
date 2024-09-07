const nav = document.getElementById('nav_section');

// Function to display the navigation
function showNav() {
    let element = function() {
        return `<div class="context_container">
            <div class="logo">
                <a href="index.html" class="center">
                    <!-- SVG Logo -->
                    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px"
                        fill="#e8eaed">
                        <path
                            d="M283.33-80v-367.33q-51.66-12-87.5-53.67Q160-542.67 160-600v-280h66.67v280h56.66v-280H350v280h56.67v-280h66.66v280q0 57.33-35.83 99T350-447.33V-80h-66.67Zm410 0v-320H576.67v-296.67q0-80.33 51.5-131.83Q679.67-880 760-880v800h-66.67Z" />
                    </svg>
                    <p>restaurant</p>
                </a>
            </div>

            <div class="link center">
                <input type="checkbox" id="sideBar">
                <label for="sideBar" class="openBar">
                    <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
                        fill="#e8eaed">
                        <path
                            d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" />
                    </svg>
                </label>
                <div class="link_container">
                    <div class="drop">
                        <label for="sideBar" class="closeBar">
                            <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960" width="40px"
                                fill="#e8eaed">
                                <path
                                    d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
                            </svg>
                        </label>
                        <ul class="center">
                            <li><a href="index.html" class="nav-link active">home</a></li>
                            <li><a href="about.html" class="nav-link">about</a></li>
                            <li><a href="service.html" class="nav-link">service</a></li>
                            <li><a href="menu.html" class="nav-link">menu</a></li>
                            <li><a href="contact.html" class="nav-link">contact</a></li>
                        </ul>
                    </div>
                    <div class="bookBtn">
                        <a href="booking.html" class="btn">book a table</a>
                    </div>
                </div>
            </div>
        </div>`;
    }
    let disElement = element(); // Directly get the string from the function
    nav.innerHTML = disElement; // Set the inner HTML

    // Call the function to highlight the active link based on the current page
    highlightActiveLink();
}
showNav();

// -----> toggle for open and close menu
const openBar = document.querySelector('.openBar');
const closeBar = document.querySelector('.closeBar');
const dropSection = document.querySelector('.drop');

closeBar.addEventListener('click', function() {
    dropSection.classList.toggle('active');
});
openBar.addEventListener('click', function() {
    dropSection.classList.toggle('active');
});

// -----> Function to highlight the active link based on the current page
function highlightActiveLink() {
    const links = document.querySelectorAll('.nav-link'); // All nav links
    const currentPath = window.location.pathname; // Get the current page path

    // Loop through each link and add 'active' class based on the URL
    links.forEach(link => {
        if (link.getAttribute('href') === currentPath.split('/').pop()) {
            link.classList.add('active'); // Add active class to the current page
        } else {
            link.classList.remove('active'); // Remove active class from other pages
        }
    });
}
