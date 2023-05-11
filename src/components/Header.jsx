import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <p className="text-black mb-0">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div className="col-6">
              <p
                className="text-end text-black mb-0"
                style={{ paddingRight: "10px" }}
              >
                Hotline:
                <a className="text-black" href="tel: +62 87870091903" style={{ color: "black" }}>
                  +91 82600000
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-3">
              <h2>
                <Link className="text-white">NusantaraStore</Link>
              </h2>
            </div>
            <div className="col-5">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-2"
                  placeholder="Search product here..."
                  aria-label="Search product here..."
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-3" id="basic-addon2">
                  <BsSearch className="fs-6" />
                </span>
              </div>
            </div>
            <div className="col-4">
              <div className="header-upper-links d-flex align-items-center justify-content-between">
                {/* <div>
                  <Link>
                  <img src="images/compare.svg" alt="" />
                  <p></p>
                  </Link>
                </div> */}
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Link to= "/wishlist" className="d-flex align-items-center gap-10 text-white">
                    <img
                      src={process.env.PUBLIC_URL + "/images/wishlist.png"}
                      width="35"
                      height="35"
                      style={{ filter: "invert(100%)" }}
                      alt="wishlist"
                    />
                    <p className="mb-" style={{ margin: 8 }}>
                      Favourite <br /> wishlist
                    </p>
                  </Link>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Link to= "/cart" className="d-flex align-items-center gap-10 text-white">
                    <img
                      src={process.env.PUBLIC_URL + "/images/cart.png"}
                      width="35"
                      height="35"
                      style={{ filter: "invert(100%)" }}
                      alt="cart"
                    />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark">0</span>
                      <p className="mb-0">$ 500</p>
                    </div>
                    {/* <p style={{ margin: 8 }}>
                      Cart <br /> my order
                    </p> */}
                  </Link>
                </div>
                <div>
                  <Link to= "/login" className="d-flex align-items-center gap-10 text-white">
                    <img
                      src={process.env.PUBLIC_URL + "/images/user.png"}
                      width="35"
                      height="35"
                      style={{ filter: "invert(100%)" }}
                      alt="cart"
                    />
                    <p className="mb-0" style={{ margin: 8 }}>
                      Log in <br /> my account
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex align-items-center gap-30">
                <div>
                  <div class="dropdown">
                    <button
                      class="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-10 d-flex align-items-center text-white"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="../images/menu.png"
                        width="20"
                        height="20"
                        alt="wishlist"
                      />
                      Shop Categories
                    </button>
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a class="dropdown-item" href="#">
                          Clothing
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Accessories
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Culinary
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Souvenir
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex align-items-center gap-15">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about-us">About us</NavLink>
                    <NavLink to="/start-selling">Start selling</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
