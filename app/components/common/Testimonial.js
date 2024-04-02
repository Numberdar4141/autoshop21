"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Vikrant ",
    title: "Marketing Coordinator",
    text: "Unmatched professionalism and expertise at Auto Shop, highly recommend!. I get my dream car here in best price."},
  {
    id: 2,
    name: "Rajat ",
    title: "President of Sales",
    text: "Quick turnaround and fair pricing make Auto Shop my go-to for reliable car maintenance!"},
  {
    id: 3,
    name: "Shreya",
    title: "Marketing Coordinator",
    text: "Impressed by the knowledgeable staff and top-notch service at Auto Shop they exceeded my expectations!"},
  {
    id: 4,
    name: "Navnit ",
    title: "President of Sales",
    text: "Trustworthy and reliable, [Your Car Website] provides outstanding service that leaves me confident in my car's care!" },
];

const Testimonial = () => {
  return (
    <>
      <Swiper
        slidesPerView={2}
        speed={1000}
        spaceBetween={30}
        modules={[Pagination]}
        pagination={{
          el: ".js-pagination-pag",
          spaceBetween: 10,
          clickable: true,
        }}
        breakpoints={{
          // breakpoints for responsive design
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial_box">
              <div className="thumb">
                <Image
                  width={70}
                  height={70}
                  className="rounded-circle"
                  src={`/images/testimonial/${testimonial.id}.jpg`}
                  alt={`${testimonial.id}.png`}
                />
                <h4 className="title">
                  {testimonial.name} <br />
                  <small>{testimonial.title}</small>
                </h4>
              </div>
              <div className="details">
                <div className="icon">
                  <span className="fa fa-quote-left" />
                </div>
                <p>{testimonial.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-5 text-center">
        <div className=" js-pagination-pag" />
      </div>
    </>
  );
};

export default Testimonial;
