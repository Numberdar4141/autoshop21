const Overview = () => {
    const carData = [
      { label: "Make", value: "Mahindra" },
      { label: "Model", value: "XUV500 W11" },
      { label: "Color", value: "White" },
      { label: "Drive Type", value: "4x4" },
      { label: "Transmission", value: "Automatic" },
      { label: "Make Year", value: " May 2021" },
    { label: "Registration Year", value: "Jul 2021" },
    { label: "Km Driven", value: "16K Km" },
    { label: "Fuel Type", value: "Diesel" },
    { label: "Fuel tank capacity", value: "43L" },
    { label: "Doors", value: "5" },
    { label: "No. of Owener", value: "1st Owner" },
     
    ];
  
    return (
      <ul className="list-group">
        {carData.map((item, index) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-start"
            key={index}
          >
            <div className="me-auto">
              <div className="day">{item.label}</div>
            </div>
            <span className="schedule">{item.value}</span>
          </li>
        ))}
      </ul>
    );
  };
  
  export default Overview;
  