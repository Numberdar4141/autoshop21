const WhyChoose = () => {
  const reasons = [
    {
      iconClass: "flaticon-price-tag",
      title: "Best Price",
      description:
        "Welcome to our premier car dealership, where finding your dream car at the best price is our top priority. ",
      delay: 100,
      style: "style1",
    },
    {
      iconClass: "flaticon-car",
      title: "Trusted By Thousands",
      description:
        " Explore our inventory today and discover why thousands have made us their preferred automotive destination.",
      delay: 200,
      style: "style2",
    },
    {
      iconClass: "flaticon-trust",
      title: "Wide Range of Brands",
      description:
        "With our commitment to excellence and customer satisfaction, you can shop with confidence knowing that you'll find the perfect vehicle to suit your needs",
      delay: 300,
      style: "style3",
    },
  ];

  return (
    <>
      {reasons.map((reason, index) => (
        <div
          className="col-sm-6 col-lg-4"
          data-aos="fade-up"
          data-aos-delay={reason.delay}
          key={index}
        >
          <div className="why_chose_us home7_style">
            <div className={`icon ${reason.style}`}>
              <span className={reason.iconClass} />
            </div>
            <div className="details">
              <h5 className="title">{reason.title}</h5>
              <p>{reason.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
