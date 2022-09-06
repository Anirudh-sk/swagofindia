class Categories extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <section class="categories-section" aria-label='Categories section'>
        <div class="container-fluid w-75 p-0" id="categories">
            <h1>SHOP BY CATEGORIES</h1>
            <div class="row">
                <div class="col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <img src="assets/cat1.png" alt="womens wear" >
                    <div class="text-box text-box1" >
                        <h2>WOMENS</h2>
                        <button>SHOP NOW</button>
                    </div>
                </div>
                <div class="col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12">
                    <img src="assets/cat2.png" alt="ethnic wear" >
                    <div class="text-box text-box2" >
                        <h2>ETHNIC WEAR</h2>
                        <button >SHOP NOW</button>
                    </div>
                </div>
                <div class="col col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12 mt-lg-0 mt-md-4 mt-sm-4 mt-xs-0">
                    <img src="assets/cat3.png" >
                    <div class="text-box text-box3" >
                        <h2>MENS</h2>
                        <button>SHOP NOW</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    
        `;
      }
  }

customElements.define('categories-component', Categories);