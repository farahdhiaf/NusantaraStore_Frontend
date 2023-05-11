// import React from 'react'
// //import BreadCrumb from '../components/BreadCrumb';
// //import Meta from './Meta';

// const Wishlist = () => {
//   <>
//   {/* <Meta title={'Wishlist'}>
//     <BreadCrumb title={'Wishlist'} /> */}
//     <div className='wishlist-wrapper home-wrapper-2 py-5'>
//         <div className='container-xxl'>
//             <div className='row'>
//                 <div className='col-3'>
//                     <div className='wishlist-card position-relative'>
//                         <img src='images/cross.png' alt='cross' className='position-absolute cross img-fluid'/>
//                         <div className='wishlist-card-image'>
//                             <img src="kemeja-batik.png"/>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//   {/* </Meta> */}
//   </>
// }

// export default Wishlist

import React from "react";

const Wishlist = () => {
  return (
    <div>
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-2">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.png"
                  alt="cross"
                  className="position-absolute cross img-fluid bg-white"
                  width="25"
                />
                <div className="wishlist-card-image">
                  <img
                    src="images/kemeja-batik.png"
                    className="bg-white img-fluid w-70"
                    alt="baju batik"
                  />
                </div>
                <div className="bg-white px-3 py-3">
                  <h5 className="title">Batik shirt for Men</h5>
                  <p className="">
                    High quality shirts with Batik motifs 
                  </p>
                  <h6 className="">Harga Produk</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
