
class LatestItem extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div class="row">
                        <div class="p-col-1 col col-lg-4 col-md-6 col-sm-12">
                            <div class="prod-card mb-4" id="product1">
                                <div class="icons d-flex justify-content-center" id="card_icons">
                                     
                                </div>
                                <img class="card-img-top" src="assets/product1.png" alt="Card image cap">
                                <span class='new_tag'>NEW</span>
                                <div class="card-body d-flex flex-column align-items-center">
                                    <h5 class="card-title">Dummy Text Lorel</h5>
                                    <p class="card-text mb-0"><strong>Rs 480</strong> <del>Rs 1200</del> <span
                                        class="offer">(60%Off)</span></p>
                                        <div class="stars-group d-flex align-items-center mt-2" id="starsgroup">
                                            <img class="stars" src="assets/star.png" alt="star-rating" role="icon"
                                            aria-label='star rating'>
                                            <img class="stars" src="assets/star.png" alt="star-rating" role="icon"
                                            aria-label='star rating'>
                                            <img class="stars" src="assets/star.png" alt="star-rating" role="icon"
                                            aria-label='star rating'>
                                            <img class="stars" src="assets/star-empty.png" alt="star-rating" role="icon"
                                            aria-label='star rating'>
                                            <img class="stars" src="assets/star-empty.png" alt="star-rating" role="icon"
                                            aria-label='star rating'>
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <div class="p-col-1 col col-lg-4 col-md-6 col-sm-12">
                            <div class="prod-card mb-4" id="product2">
                                <div class="icons d-flex justify-content-center" id="card_icons">
                                    
                                        </div>
                                        <img class="card-img-top" src="assets/product2.png" alt="Card image cap">
                                        <div class="card-body d-flex flex-column align-items-center">
                                            <h5 class="card-title">Dummy Text Lorel</h5>
                                            <p class="card-text mb-0"><strong>Rs 536</strong> <del>Rs 1340</del> <span
                                                class="offer">(60%Off)</span></p>
                                                <div class="stars-group d-flex align-items-center mt-2" id="starsgroup">
                                                    <img class="stars" src="assets/star.png" alt="star-rating" role="icon"
                                                    aria-label='star rating'>
                                                    <img class="stars" src="assets/star.png" alt="star-rating" role="icon"
                                                    aria-label='star rating'>
                                                    <img class="stars" src="assets/star.png" alt="star-rating" role="icon"
                                                    aria-label='star rating'>
                                                    <img class="stars" src="assets/star.png" alt="star-rating" role="icon"
                                                    aria-label='star rating'>
                                                    <img class="stars" src="assets/star-empty.png" alt="star-rating" role="icon"
                                                    aria-label='star rating'>
                                                </div>
                                            </div>
                                        </div>
                        </div>
                        <div class="p-col-2 col col-lg-4 col-md-6 col-sm-12">
                            <div class="prod-card mb-4" id="product3">
                                <div class="icons d-flex justify-content-center" id="card_icons">
                                     
                                    </div>
                                    <img class="card-img-top" src="assets/product3.png" alt="Card image cap">
                                    <span class='new_tag'>NEW</span>
                                    <div class="card-body d-flex flex-column align-items-center">
                                        <h5 class="card-title">Dummy Text Lorel</h5>
                                        <p class="card-text mb-0"><strong>Rs 824</strong> <del>Rs 2060</del> <span
                                            class="offer">(60%Off)</span></p>
                                            <div class="stars-group d-flex align-items-center mt-2" id="starsgroup">
                                                <img class="stars" src="assets/star.png" alt="star-rating" role="icon"
                                                aria-label='star rating'>
                                                <img class="stars" src="assets/star.png" alt="star-rating" role="icon"
                                                aria-label='star rating'>
                                                <img class="stars" src="assets/star.png" alt="star-rating" role="icon"
                                                aria-label='star rating'>
                                                <img class="stars" src="assets/star.png" alt="star-rating" role="icon"
                                                aria-label='star rating'>
                                                <img class="stars" src="assets/star.png" alt="star-rating" role="icon"
                                                aria-label='star rating'>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        <div class="p-col-2 col col-lg-4 col-md-6 col-sm-12">
                            <div class="prod-card mb-4" id="product4">
                                <div class="icons d-flex justify-content-center" id="card_icons">
                                     
                                    </div>
                                    <img class="card-img-top" src="assets/product4.png" alt="Card image cap">
                                    <span class='new_tag'>NEW</span>
                                    <div class="card-body d-flex flex-column align-items-center">
                                        <h5 class="card-title">Dummy Text Lorel</h5>
                                        <p class="card-text mb-0"><strong>Rs 748</strong> <del>Rs 1870</del> <span
                                            class="offer">(60%Off)</span></p>
                                            <div class="stars-group d-flex align-items-center mt-2" id="starsgroup">
                                                <img class="stars" src="assets/star.png" alt="star-rating" role="icon"
                                                aria-label='star rating'>
                                                <img class="stars" src="assets/star.png" alt="star-rating" role="icon"
                                                aria-label='star rating'>
                                                <img class="stars" src="assets/star-empty.png" alt="star-rating" role="icon"
                                                aria-label='star rating'>
                                                <img class="stars" src="assets/star-empty.png" alt="star-rating" role="icon"
                                                aria-label='star rating'>
                                                <img class="stars" src="assets/star-empty.png" alt="star-rating" role="icon"
                                                aria-label='star rating'>
                                            </div>
                                        </div>
                            </div>
                        </div>
                        <div class="p-col-3 col col-lg-4 col-md-6 col-sm-12">
                            <div class="prod-card mb-4" id="product5">
                                <div class="icons d-flex justify-content-center" id="card_icons">
                                     
                                    </div>
                                    <img class="card-img-top" src="assets/product5.png" alt="Card image cap">
                                    <div class="card-body d-flex flex-column align-items-center">
                                        <h5 class="card-title">Dummy Text Lorel</h5>
                                        <p class="card-text mb-0"><strong>Rs 400</strong> <del>Rs 1000</del> <span
                                            class="offer">(60%Off)</span></p>
                                            <div class="stars-group d-flex align-items-center mt-2" id="starsgroup">
                                                <img class="stars" src="assets/star.png" alt="star-rating" role="icon"
                                                aria-label='star rating'>
                                                <img class="stars" src="assets/star.png" alt="star-rating" role="icon"
                                                aria-label='star rating'>
                                                <img class="stars" src="assets/star.png" alt="star-rating" role="icon"
                                                aria-label='star rating'>
                                                <img class="stars" src="assets/star.png" alt="star-rating" role="icon"
                                                aria-label='star rating'>
                                                <img class="stars" src="assets/star-empty.png" alt="star-rating" role="icon"
                                                aria-label='star rating'>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="p-col-3 col col-lg-4 col-md-6 col-sm-12">
                            <div class="prod-card mb-4" id="product6">
                                <div class="icons d-flex justify-content-center" id="card_icons">
                                    
                                </div>
                                <img class="card-img-top" src="assets/product6.png" alt="Card image cap">
                                <div class="card-body d-flex flex-column align-items-center">
                                    <h5 class="card-title">Dummy Text Lorel</h5>
                                    <p class="card-text mb-0"><strong>Rs 1200</strong> <del>Rs 3000</del> <span
                                        class="offer">(60%Off)</span></p>
                                        <div class="stars-group d-flex align-items-center mt-2" id="starsgroup">
                                            <img class="stars" src="assets/star.png" alt="star-rating" role="icon"
                                            aria-label='star rating'>
                                            <img class="stars" src="assets/star.png" alt="star-rating" role="icon"
                                            aria-label='star rating'>
                                            <img class="stars" src="assets/star.png" alt="star-rating" role="icon"
                                            aria-label='star rating'>
                                            <img class="stars" src="assets/star-empty.png" alt="star-rating" role="icon"
                                            aria-label='star rating'>
                                            <img class="stars" src="assets/star-empty.png" alt="star-rating" role="icon"
                                            aria-label='star rating'>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
        `;
      }
  }

customElements.define('item-component', LatestItem);