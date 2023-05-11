import React from "react";
import { useState } from "react";
import ProductCard from "../components/ProductCard";

const SingleProduct = () => {
  const [orderedProduct, setorderedProduct] = useState(true);
  return (
    <div>
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div children="col-6">
              <div
                className="main-product-image d-flex mb-0"
                //  style={{ maxWidth: "100%" }}
              >
                <img src="../images/kemeja-batik.png" className="img-fluid" />
                <div>
                  <div children="col-6">
                    <div className="main-product-details">
                      <div className="border-bottom">
                        <h3 className="name">Batik shirts for Men</h3>
                      </div>
                      <div className="border-bottom py-3">
                        <p className="price">Rp150.000,-</p>
                        <div className="d-flex align-items-center gap-10"></div>
                      </div>
                      <div className="border-bottom">
                        <div className="description">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                          </p>
                        </div>
                        <div></div>
                        <div className="d-flex align-items-center gap-10">
                          <h5>Category : </h5>
                          <p>clothing</p>
                        </div>
                        <div className="d-flex align-items-center gap-10">
                          <h5>Seller :</h5>
                          <p>farahdhiaf</p>
                        </div>
                        <div className="d-flex align-items-center gap-10">
                          <h5>Stock :</h5> <p>15</p>
                        </div>
                        <div className="d-flex align-items-center gap-10">
                          <h5>Sold :</h5> <p>10</p>
                        </div>
                        <div className="d-flex gap-10 flex-column">
                          <h6>Quantity</h6>
                          <div className="">
                            <input
                              type="number"
                              name=""
                              min={1}
                              max={5}
                              style={{ width: "50px" }}
                              className="form-control"
                              id=""
                            ></input>
                          </div>
                          <div className="d-flex align-items-center gap-30 mt-2">
                            <a>
                              <img
                                src={
                                  process.env.PUBLIC_URL + "/images/heart.png"
                                }
                                width="45"
                                height="45"
                              ></img>
                            </a>
                            <button className="button border-0" type>
                              Add to cart
                            </button>
                          </div>
                        </div>
                        <div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="description-wrapper py-2 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4> Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <section className="reviews-wrapper py-3 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4 className="mb-">Reviews</h4>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <h4 className="mb-2">Customer Reviews</h4>
                  <div>
                    <div className="d-flex align-items-center gap-10"></div>
                    {orderedProduct && (
                      <div>
                        <a
                          className="text-dark text-decoration-underline"
                          href=""
                        >
                          Write a Review
                        </a>
                      </div>
                    )}
                  </div>
                </div>
                <div className="review-form py-4">
                  <h4>write a review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <textarea
                        name=""
                        id=""
                        className="w-100 form-control"
                        cols="30"
                        rows="4"
                        placeholder="comments"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0 ">Submit</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4">
                  <div className="review">
                    <div className="d-flex gap-5 align-items-center">
                      <h6>Farah</h6>
                    </div>
                    <p className="mt-0">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default SingleProduct;
