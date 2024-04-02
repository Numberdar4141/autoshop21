import Image from "next/image";

const AboutTextBlock = () => {
  return (
    <>
      <div className="col-lg-6">
        <div className="about_thumb mb30-md">
          <Image
            width={636}
            height={667}
            priority
            style={{ objectFit: "cover" }}
            className="thumb1"
            src="/images/home/kiasel.jpg"
            alt="1.jpg"
          />
          <Image
            width={365}
            height={238}
            priority
            style={{ objectFit: "cover" }}
            className="img-fluid thumb2"
            src="/images/listing/1S32.avif"
            alt="2.jpg"
          />
        </div>
      </div>
      {/* End .col */}
      <div className="col-lg-5 offset-lg-1">
        <div className="about_content">
          <h2 className="title">Welcome To The Auto Shop</h2>
          <p className="mb30">
          Welcome to Premier Auto Shop, your premier destination for all your automotive needs. Whether youre in the market for a reliable pre-owned vehicle or seeking expert maintenance and repair services, we ve got you covered. With a commitment to excellence and customer satisfaction, we strive to provide you with an unparalleled experience every step of the way.
          </p>
          <p className="mb50">
          Browse through our extensive inventory of top-quality vehicles from leading manufacturers. From sleek sedans to rugged SUVs and everything in between, we offer a diverse selection to suit every taste and budget. Each vehicle in our inventory undergoes a rigorous inspection process to ensure it meets our high standards of quality and reliability.
          </p>
          <a className="btn btn-thm about-btn" href="#">
            Learn More
          </a>
        </div>
      </div>
      {/* End .col */}
    </>
  );
};

export default AboutTextBlock;
