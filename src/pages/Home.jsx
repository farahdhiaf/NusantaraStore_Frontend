import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import ProductCard from "../components/ProductCard";

const Home = () => {
  return (
    <>
      <section className="marquee-wrapper tagline py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <Marquee className="d-flex align-items-center mb-0">
                <div className="mx-4 22-25">
                  <p>
                    Welcome to NusantaraStore
                  </p>
                </div>
                <div className="tagline mx-4 22-25 align-items-center mb-0">
                  <p>Your one-stop shop for authentic Indonesian products</p>
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </section>
      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              {/* <h3 className="section-heading"></h3> */}
            </div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
