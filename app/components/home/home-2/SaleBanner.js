const saleBanners = [
 
];

const SaleBanner = () => {
  return (
    <>
      {saleBanners.map((banner) => (
        <div
          key={banner.id}
          className={banner.className}
          data-aos="fade-up"
          data-aos-delay={banner.dataAosDelay}
        >
          <div className={banner.styleClassName}>
            <div className={banner.iconClassName}>
              <span className={banner.icon} />
            </div>
            <div className={banner.detailsClassName}>
              <h3 className="title">{banner.title}</h3>
              <p>{banner.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SaleBanner;
