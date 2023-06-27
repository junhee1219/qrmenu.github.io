var menuData = [
    {name: "떡볶이", price: 6500, image: "메뉴1.jpg"},
    {name: "김밥", price: 3000, image: "메뉴2.jpg"},
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
