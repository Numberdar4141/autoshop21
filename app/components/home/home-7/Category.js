import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    imgSrc: "/images/partners/3.webp",
    title: "SUV",
    delay: 100,
    listing:2342,
  },
  {
    imgSrc: "/images/partners/2.webp",
    title: "Sedan",
    delay: 200,
    listing:4982,
  },
  {
    imgSrc: "/images/partners/h4.jpg",
    title: "Hatchback",
    delay: 300,
    listing:5642,
  },
  {
    imgSrc: "/images/category-item/MUV.jpeg",
    title: "MUV",
    delay: 400,
    listing:3798,
  },
  
];

const Category = () => {
  return (
    <>
      {categories.map((category, index) => (
        <div
          className="col-6 col-sm-6 col-md-4 col-lg col-xl"
          data-aos="fade-up"
          data-aos-offset="0"
          data-aos-delay={index * 200 + 100}
          key={index}
        >
          <div className="category_item home7_style">
            <div className="thumb">
              <Image
                width={148}
                height={57}
                style={{ objectFit: "cover", maxWidth: "100%", height: "60px" }}
                src={category.imgSrc}
                alt="car"
              />
            </div>
            <div className="details">
              <p className="title">
                <Link href="/listing-single-v2">{category.title}</Link>
              </p>
              
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Category;
