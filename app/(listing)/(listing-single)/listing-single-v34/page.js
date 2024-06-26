import Footer from "@/app/components/home/home-2/Footer";
import DefaultHeader from "@/app/components/common/DefaultHeader";
import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import HeaderTop from "@/app/components/common/HeaderTop";
import MobileMenu from "@/app/components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import BreadCrumb from "@/app/components/listing/listing-single/BreadCrumb";
import ShareMeta from "../../../components/listing/listing-single/ShareMeta";
import ProductGallery from "@/app/components/listing/listing-single/listing-single-v34/ProductGallery";
import Overview from "@/app/components/listing/listing-single/Overview34";

import Features from "@/app/components/listing/listing-single/Features";

import Link from "next/link";
import ReleatedCar from "@/app/components/listing/listing-single/ReleatedCar";
import SellerDetail2 from "@/app/components/listing/listing-single/sidebar/ContactSeller";
import Map from "@/app/components/common/Map";

export const metadata = {
  title:
    "AutoShop || Buy car",
};

const ListingSingleV3 = () => {
  return (
    <div className="wrapper">
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <HeaderSidebar />
      </div>
      {/* Sidebar Panel End */}

      {/* header top */}
      <HeaderTop />
      {/* End header top */}

      {/* Main Header Nav */}
      <DefaultHeader />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}

      {/* Agent Single Grid View */}
      <section className="our-agent-single bgc-f9 pb90 mt70-992 pt30">
        <div className="container">
          <div className="row mb30">
            <div className="col-xl-12">
              <div className="breadcrumb_content style2">
                <BreadCrumb />
              </div>
            </div>
          </div>
          {/* End .row bradcrumb */}

          <div className="row mb30">
            <div className="col-lg-7 col-xl-8">
              <div className="single_page_heading_content">
                <div className="car_single_content_wrapper">
                  <ul className="car_info mb20-md">
                    <li className="list-inline-item">
                      <a href="#">BRAND NEW - IN STOCK</a>
                    </li>
                    
                    <li className="list-inline-item">
                     
                    </li>
                  </ul>
                  <h2 className="title"> 2016 Renault Kwid RXT Opt</h2>
                  <p className="para">
                  Fully loaded variant offering the best of features
                  </p>
                </div>
              </div>
            </div>  
            {/* End .col-lg-7 */}

            <div className="col-lg-5 col-xl-4">
              <div className="single_page_heading_content text-start text-lg-end">
                <div className="share_content">
                  <ShareMeta />
                </div>
                <div className="price_content">
                  <div className="price mt60 mb10 mt10-md">
                    <h3>
                      <small className="mr15">
                        <del>₹2.95 Lakh</del>
                      </small>
                      ₹ 2.09 Lakh
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/* End col-lg-5 */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-xl-6 mb30">
              <ProductGallery />
              {/* End Car Gallery */}
            </div>
            {/* End .col-xl-6 */}

            <div className="col-md-6 col-xl-3">
              <div className="opening_hour_widgets p30 mb30">
                <div className="wrapper">
                  <Overview />
                </div>
              </div>
              {/* End opening_hour_widgets */}
            </div>
            {/* End col-xl-3 */}

            <div className="col-md-6 col-xl-3">
              <div className="offer_btns">
                <div className="text-end">
                  <button className="btn btn-thm ofr_btn1 btn-block mt0 mb20">
                    <span className=" mr10 fz18 vam" />
                    Book Now
                  </button>
                 
                </div>
              </div>
              {/* End offer_btn
               */}
              <div className="sidebar_seller_contact mb30">
                <SellerDetail2 />
              </div>
            </div>
            {/* End col-xl-3 */}
          </div>
          {/* End .row top portion*/}

          <div className="row">
            <div className="col-lg-6 col-xl-6">
              <div className="user_profile_service">
                <Features />
                <hr />
                <div className="row">
                  <div className="col-lg-12">
                    <a className="fz12 tdu color-blue" href="#">
                      View all features
                    </a>
                  </div>
                </div>
              </div>
              {/* End user profile service */}

             
              {/* End ConsumerReviews */}
            </div>
            {/* End .col-xl-6 */}

            <div className="col-lg-6 col-xl-6">
             
              {/* End car descriptions */}

              <div className="user_profile_location">
                <h4 className="title">Location</h4>
                <div className="property_sp_map mb40">
                  <div className="h400 bdrs8 map_in" id="map-canvas">
                    <Map />
                  </div>
                </div>
                <div className="upl_content d-block d-md-flex">
                  <p className="float-start fn-sm mb20-sm">
                    <span className="fas fa-map-marker-alt pr10 vam" />
                    New Market, Vikas Puri , Delhi
                  </p>
                  <button className="btn location_btn">Get Direction</button>
                </div>
              </div>
              {/* End Location */}

           
              {/* End ReviewBox */}
            </div>
            {/* End col-xl-6 */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Agent Single Grid View */}

      {/* Car For Rent */}
      <section className="car-for-rent bb1">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="main-title text-center text-md-start mb10-520">
                <h2 className="title">Similar Cars</h2>
              </div>
            </div>
            {/* End .col-sm-6 */}

            <div className="col-sm-6">
              <div className="text-center text-md-end mb30-520">
                <Link href="/page-list-v1" className="more_listing">
                  Show All Cars
                  <span className="icon">
                    <span className="fas fa-plus" />
                  </span>
                </Link>
              </div>
            </div>
            {/* End .col-sm-6 */}
          </div>
          {/* End .row */}

          <div className="col-lg-12">
            <div
              className="home1_popular_listing home3_style"
              data-aos-delay="100"
            >
              <div className="listing_item_4grid_slider nav_none">
                <ReleatedCar />
              </div>
            </div>
          </div>
          {/* End .col-lg-12 */}
        </div>
        {/* End .container */}
      </section>
      {/* End Car For Rent */}

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}

      {/* Modal */}
      <div
        className="sign_up_modal modal fade"
        id="logInModal"
        data-backdrop="static"
        data-keyboard=""
        tabIndex={-1}
        aria-hidden="true"
      >
        <LoginSignupModal />
      </div>
      {/* End Modal */}
    </div>
    // End wrapper
  );
};

export default ListingSingleV3;
