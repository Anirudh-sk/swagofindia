class  LatestSection extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <section class='latest-prods' aria-label='latest products section'>
        <div class="latest-prod-title-bar" aria-label='latest products section title bar'>
            <h2 class="text-center">LATEST PRODUCTS</h2>
            <ul class="desc-tabs nav nav-tabs" id="myProductsTab" role="tablist">
                <li class="nav-item">
                    <a href="#pd-list-1" id="tab1" class='nav-link active' aria-controls="product list 1"
                    aria-selected='true' role="tab" tabindex=1 data-toggle='tab'>All</a>
                </li>
                <li class="nav-item">
                    <a href="#pd-list-2" id="tab2" class='nav-link' aria-controls="create-account" aria-selected='false'
                    role="tab" tabindex=0 data-toggle='tab'>Featured</a>
                </li>
                <li class="nav-item">
                    <a href="#pd-list-3" id="tab3" class='nav-link' aria-controls="create-account" aria-selected='false'
                        role="tab" tabindex=0 data-toggle='tab'>Latest</a>
                    </li>
                <li class="nav-item">
                    <a href="#pd-list-4" id="tab4" class='nav-link' aria-controls="create-account" aria-selected='false'
                        role="tab" tabindex=0 data-toggle='tab'>Best Rated</a>
                </li>
            </ul>
        </div>
        <div class="desc-tabs-content tab-content" id="myProductsTabContent">
            <div class="tab-pane active" id="pd-list-1" role="tabpanel" aria-labelledby="tab1" aria-hidden='false'>
                <div class="container-fluid mt-5">
                    <item-component></item-component>
                </div>
                </div>
                <div class="tab-pane" id="pd-list-2" role="tabpanel" aria-labelledby="tab2" aria-hidden='false'>
                    <div class="container-fluid mt-5">
                    <item-component></item-component>
                </div>
            </div>
            <div class="tab-pane" id="pd-list-3" role="tabpanel" aria-labelledby="tab3" aria-hidden='false'>
                <div class="container-fluid mt-5">
                    <item-component></item-component>
                </div>
            </div>
            <div class="tab-pane" id="pd-list-4" role="tabpanel" aria-labelledby="tab4" aria-hidden='false'>
                <div class="container-fluid mt-5">
                    <item-component></item-component>
                </div>
            </div>
        </div>
        <div class="view-more-btn" aria-label='view more button holder'>
            <a><button aria-labelledby="view more">VIEW MORE +</button></a>
        </div>
    </section>
        `;
      }
  }

customElements.define('latest-component',  LatestSection);