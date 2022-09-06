class Header extends HTMLElement {
    constructor() {
      super();
    }
    connectedCallback() {
        this.innerHTML = `
        
        <!-- firstnav -->
        <div class="top-h" role='top header' id="back-to-top">
            <div class="social-img-holder" role='image holder'>
                <img src="assets/facebook.png" alt="facebook-icon" role='icon' aria-label='facebook icon'>
                <img src="assets/youtube.png" alt="youtube-icon" role='icon' aria-label='youtube icon'>
                <img src="assets/Twitter.png" alt="twitter-icon" role='icon' aria-label='twitter icon'>
            </div>
            <div class="search-box" role='search' id="search-box">
                <input type="search" name="searchbox" role="form" id="searchbox"
                    placeholder="Search Products and Brands" aria-labelledby="search-box">
                <img src="assets/magglass.png" alt="search-icon" role='icon' aria-label='magnifying glass icon'>
            </div>
            <div class="info-tab" role="info container">
                <img src="assets/call.png" id='call-icon' alt="call-icon" role='icon' aria-label='Phone icon'>
                <a id='ph-number' href="" role='link'>+91 9838203708</a>
                <a href="#" role='link'>Sell on Company</a>
                <a href="#" role='link'>Download App</a>
                <img src="assets/langicon.png" id="flag-icon" alt="lang-icon" role='icon' aria-label='language icon'>
                <form action="#" aria-label='form'>
                    <select name="lang-select" id="lang-select" aria-labelledby="select box">
                        <option value="India" role="option" aria-labelledby="Option1">India</option>
                        <option value="UK" role="option" aria-labelledby="Option1">UK</option>
                        <option value="Canada" role="option" aria-labelledby="Option2">Canada</option>
                        <option value="Germany" role="option" aria-labelledby="Option3">Germany</option>
                    </select>
                </form>
            </div>
        </div>

        <!-- Second Nav -->
        <div class="bottom-header" id="bottom-head">
            <div class="sticky-bar-wrapper bg-white" id="sticky-section">
                <nav class="navbar navbar-expand-lg navbar-light bg-white" id="bottom-header-navbar">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#"><img id="logo_img" src="assets/logo.png" alt="logo"></a>
                        <div class="input-group d-xl-none d-lg-none" id="search-box-container">
                        <span id="basic-addon1"><img src="assets/magglass.png" alt="search-icon" role="icon"aria-labelledby="magnifying glass icon"></span>
                            <input type="search" id="search-box-hidden" class="form-control"
                                placeholder="Search products and Brands" aria-label="search box"
                                aria-describedby="basic-addon1">
                            <button class="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul class="navbar-nav mr-auto mt-2 ml-xl-5 ml-lg-5 ml-md-0 mt-lg-0 text-center">
                                <li class="nav-item">
                                    <a class="nav-link active" href="#">Home</a>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link drop-btn" href="#">Categories</a>
                                        <div class="dropdown-content mt-2">
                                            <a href="#">Men</a>
                                            <a href="#">Women</a>
                                            <a href="#">Ethnic</a>
                                        </div>
                                </li>
                                <li class="nav-item dropdown2">
                                    <a class="nav-link drop-btn2" href="#">Orders</a>
                                    <div class="dropdown-content2 mt-2">
                                        <a href="#">My Orders</a>
                                        <a href="#">Track Orders</a>
                                        <a href="#">Return Orders</a>
                                      </div>
                                </li>
                                <li class="nav-item wishlist">
                                    <a class="nav-link" href="#">Wishlist</a>
                                    <span class="badge" id="wishlist-badge">0</span>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link ml-xl-3 ml-md-0" href="#">Profile</a>
                                </li>
                                <li class="nav-item notification">
                                    <a class="nav-link" href="#" id="cart-btn">Cart</a>
                                    <span class="badge" id="cart-badge">0</span>
                                </li>
                            </ul>
                            <form class="form-inline my-2 my-lg-0 d-flex flex-column align-items-stretch justify-content-start">
                                <button class="btn btn-orange my-2 my-sm-0" id="signin" type="button" >SIGN IN</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
    
        `;
      }
  }

customElements.define('header-component', Header);