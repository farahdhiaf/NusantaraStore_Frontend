const AddProduct = () => {

return AddProduct (
<div>
<div className="main-product-wrapper py-5 home-wrapper-2 d-flex justify-content-center align-items-center">
    <div className="container-xxl">
      <div className="row">
        <div className="col-12 text-center">
          <div className="main-product-image d-flex mb-5">
            <img src="../images/kemeja-batik.png" className="img-fluid" alt="Product" />
          </div>
          <div className="col-12">
            <div className="main-product-details">
              <div className="border-bottom mb-3">
                <h3 className="name">Add Product</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="mini-text">Start selling your things here</p>
              </div>
              <div className="border-bottom pb-3">
                <form>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter your product title"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter your product description"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter your product category"
                    />
                  </div>
                </form>
              </div>
              <div className="border-bottom pb-3">
                <div className="input-data">
                  <div className="d-flex gap-10 flex-column">
                    <h6>Stock</h6>
                    <div className="mb-3">
                      <input
                        type="number"
                        name=""
                        min={1}
                        max={3}
                        style={{ width: "50px" }}
                        className="form-control"
                        id=""
                      />
                    </div>
                    <div className="d-flex align-items-center justify-content-center mt-3">
                      <button className="btn btn-primary" type="submit">
                        Add Product
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)

}

export default AddProduct