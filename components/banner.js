class Banner extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        <div id="carousel-slider" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="https://swagofindia.netlify.app/Images/banner-model.png" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://swagofindia.netlify.app/Images/banner-model.png" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://swagofindia.netlify.app/Images/banner-model.png" alt="Third slide">
                    </div>
                    <div class="carousel-slider-text">
                        <p>60% Discount</p>
                        <h2>Ethnic<br>Collection</h2>
                        <p>Best Cloth Collection of 2020!</p>
                        <button>SHOP NOW</button>
                    </div>
                </div>
            </div>
    
        `;
      }
  }

customElements.define('banner-component', Banner);