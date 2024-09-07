let currentPage = window.location.pathname.split('/').pop();
let foodCon = document.getElementById('foodCards');
async function fetchData() {
    try{
        const res = await fetch('foodData.json')
        const data = await res.json()
        if(currentPage === 'index.html' || currentPage === ""){
            displayCard(data.slice(0,3))
        }else{
            displayCard(data)
        }
    }catch(err){
        console.log(err)
    }    
}

function displayCard(items) {
    let element = items.map(function (item) {
        return `<div class="card center">
                    <div class="image center">
                        <img src="${item.image}" alt="">
                    </div>
                    <div class="text center">
                            <div class="info center">
                                <h1>${item.name}</h1>
                                <p class="price">$${item.price}</p>
                            </div>
                            <div>
                                <p class="discription">${item.description}</p>
                            </div>
                            <div class="btn">
                                <a id="addCart">add cart</a>
                            </div>
                    </div>
                </div>`
    })
    let disEle = element.join("");
    foodCon.innerHTML = disEle;
}
fetchData();