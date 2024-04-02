import Blog from "@/app/components/home/home-1/Blog";
//import CarIntro from "@/app/components/home/home-3/CarIntro";
import SaleBanner from "@/app/components/home/home-2/SaleBanner";
import PopularVehicles from "@/app/components/home/home-4/PopularVehicles";
import Category from "@/app/components/home/home-7/Category";
import FilterBox from "@/app/components/home/home-3/FilterBox";
import WhyChoose from "@/app/components/common/WhyChoose";
import LoginSignupModal from "@/app/components/common/login-signup";
import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import DefaultHeader from "@/app/components/common/DefaultHeader";
import MobileMenu from "@/app/components/common/MobileMenu";
import HeaderTop from "@/app/components/home/home-3/HeaderTop";
import Link from "next/link";
import FeaturedFilterListing from "@/app/components/home/home-1/FeaturedFilterListing";
import Hero from "@/app/components/home/home-3/Hero";
import Footer from "@/app/components/home/home-2/Footer";
import Testimonial from "@/app/components/common/Testimonial";
import Partner from "@/app/components/common/Partner";
import Counter from "@/app/components/home/home-1/Counter";
import FeaturedFilterListing1 from "@/app/components/home/home-4/FeaturedListings";




export const metadata = {
  title: "AutoShop",
  description: `AutoShop`,
};

const Home_1 = () => {
  return (
    <div className="wrapper ovh">
    {/* Sidebar Panel Start */}

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

    {/* Hero */}
      {/* End Main Header Nav For Mobile */}

      {/* Hero */}
      <section className="home-one mt0 mt70-992 p0">
        <div className="container-fluid p0">
          <div className="row">
            <div className="col-lg-12">
              <Hero />
            </div>
          </div>
        </div>
      </section>
     
      {/* End Hero */}
      
      <section className="features pt20 pb20 bgc-thm2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="home1_advance_search_wrapper home3_style">
                <FilterBox />
              </div>
            </div>
          </div>
        </div>
      </section>
          
      {/* Car Category */}
      <section className="our-partner pt0 pb100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title mt-5 text-center">
                <h2>Find The Cars Of Your Choice</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="partner_divider">
            <div className="row">
            <Category />
            </div>
            {/* End .row */}
          </div>
        </div>
      </section>
      <div className="container">
      <div className="row">
            <div className="col-lg-12" data-aos-delay="100" data-aos="fade-up">
              <FeaturedFilterListing1 />
            </div>
          </div>
          </div>
      {/* End Car Cartegory */}
       {/* Our Partners */}
       <section className="our-partner pt0 pb100">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Explore Popular Brands</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="partner_divider">
            <div className="row">
              <Partner />
            </div>
            {/* End .row */}
          </div>
        </div>
      </section>
      {/* End  Our Partners */}
     
      {/* Featured Product  */}
      <section className="featured-product">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>Featured Cars</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos-delay="100" data-aos="fade-up">
              <FeaturedFilterListing />
            </div>
          </div>
          {/* End .row */}

          <div className="row mt20">
            <div className="col-lg-12">
              <div className="text-center">
                <Link href="/listing-v5" className="more_listing">
                  Show All Cars{" "}
                  <span className="icon">
                    <span className="fas fa-plus" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Featured Product  */}

      {/* Why Chose us  */}
      <section className="why-chose pt0 pb90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>Why Choose Us?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <WhyChoose />
          </div>
        </div>
      </section>
      {/* Why Chose us  */}

      {/* Delivery Divider */}
      <section className="home2_img_divider bg-img2">
        <div className="container">
          <div className="row">
            <SaleBanner />
          </div>
        </div>
      </section>
      {/* End Delivery Divider */}

      {/* Our Popular Listing */}
     
      {/* End Our Popular Listing */}

      {/* <!-- Funfact --> */}
      <section className="our-funfact pt50 pb30">
        <div className="container">
          <div className="row">
            <Counter />
          </div>
        </div>
      </section>
      {/* <!-- End Funfact --> */}
      <section className="popular-listing pt0 pb110">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Popular Vehicles</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="col-lg-12">
            <div
              className="home1_popular_listing home4_style"
              data-aos="fade"
              data-aos-delay="100"
            >
              <div className="listing_item_car_grid_slider ">
                <PopularVehicles />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials  */}
      <section className="our-testimonials-home1 pt120 pb120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>Testimonials</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial_slider_home1">
                <Testimonial />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Testimonials  */}

      {/* Our Blog */}
     
      {/* End Our Blog */}

     

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}

      {/* Modal */}
      <div
        className="sign_up_modal modal fade"
        id="logInModal"
        data-backdrop="static"
        data-keyboard="false"
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

export default Home_1;
