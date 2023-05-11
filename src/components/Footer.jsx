import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <h4 className="text-white"> Customer Service</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mt-3 mb-0">Help centre</Link>
                <br />
                <Link className="text-white mb-0">Payment methods</Link>
                <br />
                <Link className="text-white mb-0">Contact us</Link>
                <br />
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white">About</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mt-3 mb-0">About us</Link>
                <br />
                <Link className="text-white mb-0">Seller centre</Link>
              </div>
            </div>
            <div className="col-3 ">
              <h4 className="text-white">Follow Us</h4>
              <div className="footer-links d-flex flex-column">
                <Link href="" className="d-flex align-items-center mb-0 mt-3 gap-10 text-white">
                  <img
                    src={process.env.PUBLIC_URL + "/images/facebook.png"}
                    width="25"
                    height="25"
                    style={{ filter: "invert(100%)" }}
                    alt="cart"
                  />
                  <p className="mb-0" style={{ margin: 2 }}>
                    Facebook
                  </p>
                </Link>
                <br />
                <Link href="" className="d-flex align-items-center mb-0 gap-10 text-white">
                  <img
                    src={process.env.PUBLIC_URL + "/images/instagram.png"}
                    width="25"
                    height="25"
                    style={{ filter: "invert(100%)" }}
                    alt="cart"
                  />
                  <p className="mb-0" style={{ margin: 2 }}>
                    instagram
                  </p>
                </Link>
                <br />
                <Link href="" className="d-flex align-items-center mb-0 gap-10 text-white">
                  <img
                    src={process.env.PUBLIC_URL + "/images/twitter.png"}
                    width="25"
                    height="25"
                    style={{ filter: "invert(100%)" }}
                    alt="cart"
                  />
                  <p className="mb-0" style={{ margin: 2 }}>
                    Twitter
                  </p>
                </Link>
              </div>
            </div>
            <div className="col-3 ">
              <h4 className="text-white">Quick Links</h4>
              <div className="footer-links d-flex flex-column">
                <Link className="text-white mt-3 mb-0">Clothing</Link>
                <br />
                <Link className="text-white mb-0">Accessories</Link>
                <br />
                <Link className="text-white mb-0">Culinary</Link>
                <br />
                <Link className="text-white mb-0">Souvenirs</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                NusantaraStore final project 2023
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
