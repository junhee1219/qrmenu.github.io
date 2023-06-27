var menuData = [
    {name: "떡볶이", price: 6500, image: "메뉴1.jpg"},
    {name: "김밥", price: 3000, image: "메뉴2.jpg"},
    {name: "라면", price: 3500, image: "메뉴3.jpg"},
    {name: "모듬튀김", price: 5000, image: "메뉴4.jpg"},
    {name: "우동", price: 7000, image: "메뉴5.jpg"},
    {name: "쫄면", price: 7000, image: "메뉴6.jpg"},
    // 더 많은 메뉴 데이터...
];

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
}

var container = document.querySelector('.row');  // 카드를 추가할 컨테이너 선택

menuData.forEach(function(menu, index) {
    var col = document.createElement('div');
    col.className = 'col-6';

    var card = document.createElement('div');
    card.className = 'card';
    card.id = 'card' + (index + 1);

    // 카드 클릭 이벤트 추가
    card.addEventListener('click', function(event) {
        if (event.target === this) {
            this.classList.toggle('checked');
        }
    });

    var img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = menu.image;
    img.alt = menu.name;

    var cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    var title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = menu.name;

    var text = document.createElement('p');
    text.className = 'card-text';
    text.textContent = formatPrice(menu.price);

    cardBody.appendChild(title);
    cardBody.appendChild(text);
    card.appendChild(img);
    card.appendChild(cardBody);
    col.appendChild(card);

    container.appendChild(col);  // 컨테이너에 카드 추가
});

let total = 0;

function handleCardClick(e, price) {
    const priceDisplay = document.getElementById("price-display");
    const totalPrice = document.getElementById("total-price");

    e.currentTarget.classList.toggle("selected");
    
    if (e.currentTarget.classList.contains("selected")) {
        total += price;
    } else {
        total -= price;
    }

    if (total > 0) {
        totalPrice.textContent = total.toLocaleString();
        priceDisplay.classList.remove("hidden");
    } else {
        priceDisplay.classList.add("hidden");
    }
}

menuData.forEach((menu, i) => {
    const card = document.getElementById(`card${i+1}`);  // i에 1을 더해줍니다.
    card.onclick = (e) => handleCardClick(e, menu.price);
});