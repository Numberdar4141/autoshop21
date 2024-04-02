"use client";

import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";


SwiperCore.use([Navigation]);

const Hero = () => {
  const slides = [
    {
      id:11,
      image: "/images/home/kiasel.jpg",
      image1: "/images/listing/1H1.png",
      height: "640px",
      price: "₹11.24 Lakh",
      price1: "Seating capacity 5 units",
      title: "2020 Kia Seltos HTX G ",
      rating: "4.7",
      numReviews: "(684 reviews)",
      features: [
        { icon: "flaticon-road-perspective", text: "65K Km" },
        { icon: "flaticon-gas-station", text: "Petrol" },
        { icon: "flaticon-gear", text: "Manual" },
      ],
    },
    {
      id:7,
      image: "/images/listing/2H1.png",
      image1: "/images/listing/7S.png",
      height: "640px",
      price: "₹13.11 Lakh",
      price1: "Seating capacity 7 units",
      title: "2016 Toyota Innova Crysta 2.7 V ",
      rating: "4.7",
      numReviews: "(623 reviews)",
      features: [
        { icon: "flaticon-road-perspective", text: "49K Km" },
        { icon: "flaticon-gas-station", text: "Petrol" },
        { icon: "flaticon-gear", text: "Manual" },
      ],
    },
    {
      id:5,
      image: "/images/home/thar1.jpg",
      image1: "/images/listing/5S.png",
      height: "640px",
      price: "₹8.10 Lakh",
      price1: "Seating capacity 4 units",
      title: "2019 Nissan Kicks XV Premium (O) Dual Tone",
      rating: "4.7",
      numReviews: "(484 reviews)",
      features: [
        { icon: "flaticon-road-perspective", text: "34K km" },
        { icon: "flaticon-gas-station", text: "Diesel" },
        { icon: "flaticon-gear", text: "Manual" },
      ],
    },{
      id:8,
      image: "/images/home/carbg9.jpeg",
      image1: "/images/listing/8S.png",
      height: "640px",
      price: "₹6.80 Lakh",
      price1: "Seating capacity 5 units",
      title: "2019 Maruti Suzuki Swift ZDi Plus AMT",
      rating: "4.7",
      numReviews: "(284 reviews)",
      features: [
        { icon: "flaticon-road-perspective", text: "48K Km" },
        { icon: "flaticon-gas-station", text: "Diesel" },
        { icon: "flaticon-gear", text: "Automatic" },
      ],
    },
   
    
  ];

  const params = {
    spaceBetween: 0,
    slidesPerView: 1,
    loop: true,
    speed: 1000,

    navigation: {
      prevEl: ".left-btn",
      nextEl: ".right-btn",
    },
  };

  return (
    <div
      className="main-banner-wrapper home3_style "
      style={{ overflow: "hidden" }}
    >
      <div className="banner-style-one">
        <Swiper {...params}>
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="slide slide-one"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  height: slide.height,
                }}
              >
                <div className="container">
                  <div className="row home-content">
                    <div className="col-sm-9 col-md-6 col-lg-5 col-xl-3">
                      <div className="sliding-box-object">
                        <div className="car-listing">
                          <div className="details">
                            <div className="wrapper">
                            <Image
                    width={294}
                    height={183}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    priority
                    src={slide.image1}
                    alt={slide.title}
                  />
                             
                              <h6 className="title">
                                <Link href={"/listing-single-v3"+slide.id}>
                                  {slide.title}
                                </Link>
                              </h6>
                              <h5 className="price">{slide.price}</h5>
                             
                             
                            </div>
                            {/* wrapper */}

                            <div className="listing_footer">
                              <ul className="mb15">
                                {slide.features.map((feature, index) => (
                                  <li className="list-inline-item" key={index}>
                                    <a href="#">
                                      <span
                                        className={feature.icon + " me-2"}
                                      />
                                      {feature.text}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {/* End listing_footer */}
                            <Link
                              href={"/listing-single-v3"+slide.id}
                              className="btn btn_home3_style btn-thm"
                            >
                              Learn More
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="carousel-btn-block banner-carousel-btn">
        <span className="carousel-btn left-btn">
          <i className="flaticon-left-arrow left" />
        </span>
        <span className="carousel-btn right-btn">
          <i className="flaticon-right-arrow right" />
        </span>
      </div>
      {/* /.carousel-btn-block banner-carousel-btn */}
    </div>
  );
};

export default Hero;
