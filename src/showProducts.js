export default class ShowProducts {
    constructor() {}
    showProductList(productList) {
        const productHTMLList = [...productList].map(product => 
            `<li id="${product.id}" class="col">
                <div class="card w-100">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="d-grid gap-2">
                                <div class="d-flex justify-content-center">
                                    <input id="productPriceInput-${product.id}" class="form-control form-control-sm" type="number">
                                    <button type="button" class="btn btn-success btn-sm">
                                        <i class="bi bi-check-lg"></i>
                                    </button>
                                </div>
                                <button type="button" class="btn btn-success" data-bs-toggle="collapse"
                                    data-bs-target="#car" aria-expanded="false" aria-controls="car"><i
                                        class="bi bi-caret-down-fill"></i></button>
                            </div>
                        </li>
                        <li class="collapse list-group-item" id="car">
                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary mx-1"><i class="bi bi-pencil"></i></button>
                                <button class="btn btn-danger mx-1"><i class="bi bi-trash"></i></button>
                            </div>
                        </li>
                    </ul>
                </div>
            </li>`
        ).join('')
        document.getElementById('productList').innerHTML = productHTMLList
    }
}