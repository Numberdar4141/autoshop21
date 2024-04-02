"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";

const slides = [
  
  {
    imageSrc: "/images/listing/5S.png",
    videoId: "VWrJkx6O0L8",
  },
  {
    imageSrc: "/images/listing/1S51.avif",
    videoId: "TLEyLGWvjII",
  },
  {
    imageSrc: "/images/listing/1S52.png",
    videoId: "BS2jGGYC60c",
  },
  {
    imageSrc: "/images/listing/1S53.png",
    videoId: "8PiZNUCexrA",
  },
  {
    imageSrc: "/images/listing/1S54.png",
    videoId: "m4ZGuAbUMg8",
  },
  {
    imageSrc: "/images/listing/1S55.avif",
    videoId: "m4ZGuAbUMg8",
  },
  {
    imageSrc: "/images/listing/1S56.png",
    videoId: "m4ZGuAbUMg8",
  },
  {
    imageSrc: "/images/listing/1S57.png",
    videoId: "m4ZGuAbUMg8",
  },
  {
    imageSrc: "/images/listing/1S8.avif",
    videoId: "m4ZGuAbUMg8",
  },
  {
    imageSrc: "/images/listing/1S9.avif",
    videoId: "m4ZGuAbUMg8",
  },
  {
    imageSrc: "/images/listing/1S10.avif",
    videoId: "m4ZGuAbUMg8",
  },
  {
    imageSrc: "/images/listing/1S58.avif",
    videoId: "m4ZGuAbUMg8",
  },
  {
    imageSrc: "/images/listing/1S58.avif",
    videoId: "m4ZGuAbUMg8",
  },
  
];

export default function ProductGallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState("");

  const openModal = (id) => {
    setVideoId(id);
    setOpen(true);
  };

  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2 sps_content single_product_grid user_profile "
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="item">
                  <Image
                    width={856}
                    height={554}
                    priority
                    style={{ objectFit: "cover" }}
                    className="w-100 h-100"
                    src={slide.imageSrc}
                    alt="large car"
                  />
                  
         

                  <div className="overlay_icon">
                    <button
                      className="video_popup_btn popup-img popup-youtube"
                      onClick={() => openModal(slide.videoId)}
                    >
                      <span className="flaticon-play-button" />
                      Video
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper mt-2 thumb-gallery-opacity"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <Image
                  width={163}
                  height={106}
                  priority
                  style={{ objectFit: "cover" }}
                  src={slide.imageSrc}
                  alt="thum car"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
      
    </>
  );
}