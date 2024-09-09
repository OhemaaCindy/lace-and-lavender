import React from "react";
import "./Navbar.css";


const Navbar = () => {
  return (
    <div>
      {/* <div className="overlay"></div> */}
      <div className="wrapper">
        <header>
          <a href="/">
            <img
              src="https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?ga=GA1.1.166793676.1725274971&semt=ais_hybrid"
              className="logo"
              alt="logo"
            />
          </a>

          <nav>
            <ul>
              <li>
                <a className="active" href="#home">
                  Home
                </a>
              </li>
              <li>
                <a href="#Products">Products</a>
              </li>
              <li>
                <a href="#Gallery">Gallery</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <div className="left-col">
            <h1>Quality Apparel Without the Price Tag</h1>
            <p className="subhead">
              No need to spend $xxx on apparel just for the name sake. Our
              premium apparel is made for the same stuff.
            </p>

            <div className="cta-btns">
              <a href="/#" className="primary-cta">
                {" "}
                Browse Our Collection
              </a>
              <a href="/#" className="secondary-cta">
                <span>'23 Collection </span>
              
              </a>
            </div>

            <div className="news">
              <p className="employees">50K</p>
              <p className="details">
                We are proud to announce that we now employ a workforce of over
                <strong> 50,000 </strong> It all possible because of you.
              </p>
            </div>
          </div>

          <div className="right-col">
            <div className="card card1">
              <div className="card-details">
                <div>
                  <a href="/#" className="product-title">
                    Lace and Lavender
                  </a>
                  <p>Running shoes</p>
                </div>
                <p className="product-price">$49</p>
              </div>
            </div>
            <div className="card card2">
              <div className="card-details">
                <div>
                  <a href="/#" className="product-title">
                    Lace and Lavender
                  </a>
                  <p>Running shoes</p>
                </div>
                <p className="product-price">$49</p>
              </div>
            </div>
            <div className="card card3">
              <div className="card-details">
                <div>
                  <a href="/#" className="product-title">
                    Lace and Lavender
                  </a>
                  <p>Running shoes</p>
                </div>
                <p className="product-price">$49</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Navbar;
