import Image from "next/image";


const partners = [
  { imgPath: "/images/partners/1.png", delay: 100 },
  { imgPath: "/images/partners/2.jpg", delay: 100 },
  { imgPath: "/images/partners/3.png", delay: 100 },
  { imgPath: "/images/partners/4.png", delay: 300 },
  { imgPath: "/images/partners/5.png", delay: 500 },
  { imgPath: "/images/partners/6.png", delay: 700 },
  { imgPath: "/images/partners/7.png", delay: 700 },
  { imgPath: "/images/partners/8.png", delay: 700 },
  { imgPath: "/images/partners/9.png", delay: 900 },
  { imgPath: "/images/partners/10.png", delay: 1100 },
  { imgPath: "/images/partners/11.png", delay: 1100 },
  { imgPath: "/images/partners/12.png", delay: 1100 },
];

const Partner = () => {
  
  return (
    <>
    
      {partners.map((partner, index) => (
        <div
          key={index}
          className="col-5 col-xs-5 col-sm-3 col-xl-2"
          data-aos="fade-up"
          data-aos-delay={partner.delay}
        >
          <div className="partner_item">
            <Image
              width={150}
              height={60}
              style={{ objectFit: "contain" }}
              src={partner.imgPath}
              alt={`partner-${index}`}
            />
          </div>
          
        </div>
      ))}
    </>
  );
};

export default Partner;
