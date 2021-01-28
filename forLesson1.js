class ProductList {
    #goods;
    #allProducts;


    constructor(container = '.products') {
        this.container = container;
        this.#goods =[];
        this.#allProducts =[];

        this.#fetchGoods();
        this.render();
    }

    #fetchGoods() {
        this.#goods = [
            {id: 1, title: 'Notebook', price: 35000, img: "laptop.png"},
            {id: 2, title: 'Mouse', price: 1500, img: "computer-mouse.png"},
            {id: 3, title: 'Monitor', price: 1200, img: "monitor.png"},
            {id: 4, title: 'Motherboard', price: 8500, img: "motherboard.png"},

        ];
    }

    render() {
        const block = document.querySelector(this.container);

        for (let product of this.#goods) {
            const productObject = new ProductItem(product);
            console.log(productObject);
            this.#allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }

}
}

class ProductItem {
    constructor(product, img='https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
            }

    render() {
        return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="productText">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
          </div>`;
    }
}
new ProductList();
