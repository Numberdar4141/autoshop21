"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";
import Link from "next/link";

const listingCar = [
  {
    id: 1,
    featured: true,
    image: "/images/listing/P1.webp",
    photosCount: 12,
    videosCount: 1,
    title: "2018 Maruti Suzuki Baleno Delta Petrol",
    price: "₹ 5.09 Lakh",
    rating: 4.7,
    reviewsCount: 284,
    mileage: "23K Km",
    fuelType: "Petrol",
    transmission: "Manual",
    tags: ["Maruti Suzuki"],
  },
  {
    id: 2,
    featured: true,
    image: "/images/listing/P2.webp",
    photosCount: 22,
    videosCount: 3,
    title: "2021 Mahindra XUV500 W11 AT",
    price: "₹ 15.50 Lakh",
    rating: 4.7,
    reviewsCount: 198,
    mileage: "16K Km",
    fuelType: "Diesel",
    transmission: "Automatic",
    tags: ["used"],
  },
  {
    id: 3,
    featured: true,
    image: "/images/listing/P3.png",
    photosCount: 7,
    videosCount: 3,
    title: "2019 Hyundai Elite i20 Asta (O) CVT",
    price: "₹ 7.20 Lakh",
    rating: 4.7,
    reviewsCount: 124,
    mileage: "23K Km",
    fuelType: "Petrol",
    transmission: "Automatic",
    tags: ["used"],
  },
  {
    id: 4,
    featured: true,
    image: "/images/listing/P4.jpg",
    photosCount: 7,
    videosCount: 3,
    title: "2016 Renault Kwid RXT Opt",
    price: "₹ 2.09 Lakh",
    rating: 4.7,
    reviewsCount: 364,
    mileage: "43K Km",
    fuelType: "Petrol",
    transmission: "Manual",
    tags: ["used"],
  },
  {
    id: 5,
    featured: true,
    image: "/images/listing/P5.webp",
    photosCount: 22,
    videosCount: 3,
    title: "2019 Nissan Kicks XV Premium (O)",
    price: "₹ 8.10 Lakh",
    rating: 4.7,
    reviewsCount: 684,
    mileage: "22 kmpl",
    fuelType: "Diesel",
    transmission: "Manual",
    tags: ["used"],
  },
];

const PopularVehicles = () => {
  return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        speed={1000}
        centeredSlides={true}
        initialSlide={Math.floor(listingCar.length / 2)} // Set initial slide to the middle index
        modules={[Pagination, Navigation]}
        pagination={{
          el: ".js-pagination-pag2",
          spaceBetween: 10,
          clickable: true,
        }}
        navigation={{
          nextEl: ".p3-arrow-next",
          prevEl: ".p3-arrow-prev",
        }}
        breakpoints={{
          // breakpoints for responsive design
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },

          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {listingCar.map((listing) => (
          <SwiperSlide key={listing.id}>
            <div className="item">
              <div className="carlisting-popular-vehicles">
                <div className="details text-center">
                  <div className="wrapper">
                    <h5 className="price text-thm4">{listing.price}</h5>
                    <h6 className="title">
                      <Link href={"/listing-single-v3"+listing.id}>{listing.title}</Link>
                    </h6>
                   
                  </div>
                  <div className="listing_footer">
                    <ul>
                      <li className="list-inline-item">
                        <span className="flaticon-road-perspective me-2" />
                        {listing.mileage}
                      </li>
                      <li className="list-inline-item">
                        <span className="flaticon-gas-station me-2" />
                        {listing.fuelType}
                      </li>
                      <li className="list-inline-item">
                        <span className="flaticon-gear me-2" />
                        {listing.transmission}
                      </li>
                    </ul>
                  </div>
                </div>
                {/* End details */}

                <div className="thumb">
                  <Image
                    width={284}
                    height={183}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    priority
                    src={listing.image}
                    alt={listing.title}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="arrow-70-plus light-arrow_btn d-none d-sm-block">
        <div className="slider-arrow-center">
          <button className="prev p3-arrow-prev">
            <i className="flaticon-left-arrow"></i>
          </button>
          <button className="next p3-arrow-next">
            <i className="flaticon-right-arrow"></i>
          </button>
        </div>
      </div>

      <div className="text-center">
        <div className="js-pagination-pag2" />
      </div>
    </>
  );
};

export default PopularVehicles;
