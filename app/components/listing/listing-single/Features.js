const Features = () => {
  const featureCategories = [
    {
      title: "COMFORT & CONVENIENCE",
      items: [
        "Steering mounted controls",
       
        "Adjustable ORVM",
        "Automatic climate control",
      ],
    },
    {
      title: "Entertainment",
      items: ["Apple CarPlay/Android Auto", "Bluetooth", "Integrated (in-dash) music system"],
    },
    {
      title: "Exterior",
      items: ["Rear wiper", "Sunroof/Moonroof","Rear defogger"],
    },
    {
      title: "Safety",
      items: [
        "Anti pinch power windows",
        "Airbags",
        "Parking sensors",
        "LED Headlights",
        
      ],
    },
  ];

  return (
    <>
      <div className="col-lg-12">
        <h4 className="title">Features</h4>
      </div>
      {featureCategories.map((category, index) => (
        <div className="row" key={index}>
          <div className="col-lg-6 col-xl-6">
            <h5 className="subtitle">{category.title}</h5>
          </div>
          <div className="col-lg-6 col-xl-5">
            <ul className="service_list">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex}>{item}</li>
              ))}
            </ul>
          </div>
          {index < featureCategories.length - 1 && <hr />}
        </div>
      ))}
    </>
  );
};

export default Features;
