import Image from "next/image";

const BannerWidget = () => {
  return (
    <div className="sidebar_vichel_avail_Widget">
      <div className="thumb">
        <Image
          width={306}
          height={357}
          priority
          style={{ objectFit: "cover", height: "100%", width: "100%" }}
          src="/images/about/sidebar-vichel.jpg"
          alt="sidebar-vichel.jpg"
        />
      </div>
      {/* End thumb */}

      <div className="details">
        <div className="wrapper">
          <div className="title_count">
            450+
            <span>
              <Image
                width={60}
                height={8}
                priority
                style={{ objectFit: "contain" }}
                src="/images/home/title-bottom-border.svg"
                alt="icon"
              />
            </span>
          </div>
          <h4 className="title">Vehicle Sold</h4>
          <p className="para">Get the right price of your Car</p>
          <p className="subtitle">CALL US NOW</p>
          <a className="phone_number" href="#">
            +91 9999923923
          </a>
        </div>
      </div>
    </div>
  );
};

export default BannerWidget;