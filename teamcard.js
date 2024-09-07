// let currentPage = window.location.pathname.split('/').pop();
let cards = document.querySelector('.teamCards');
async function fetchData1() {
    try {
        const res = await fetch('teamData.json');
        const data = await res.json();
        if (currentPage === 'index.html' || currentPage === "") {
            displayCard1(data.slice(0, 3));
        }else{
            displayCard1(data)
        }
    } catch (err) {
        console.log(err);
    }
}

function displayCard1(items) {
    let element = items.map(function (item) {
        return `<div class="card center">
                        <div class="image center">
                            <img src="${item.image}" alt="">
                        </div>
                        <div class="text center">
                            <div class="info center">
                                <h1>${item.name}</h1>
                                <p class="workTag">${item.title}</p>
                            </div>
                            <div class="socail_links center">
                                <span><a href="#"><i class="fa-brands fa-facebook-f"></i></a></span>
                                <span><a href="#"><i class="fa-brands fa-twitter"></i></a></span>
                                <span><a href="#"><i class="fa-brands fa-instagram"></i></a></span>
                            </div>
                        </div>
                    </div>`
    })
    let disEle = element.join("");
    cards.innerHTML = disEle;
}
fetchData1();