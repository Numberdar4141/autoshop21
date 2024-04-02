const Overview = () => {
    const carData = [
      { label: "Make", value: "Toyota" },
      { label: "Model", value: "Innova Crysta" },
      { label: "Color", value: "Grey" },
      { label: "Drive Type", value: "4x4" },
      { label: "Transmission", value: "Manual" },
      { label: "Make Year", value: " Jul 2016" },
      { label: "Registration Year", value: " Oct 2016" },
      { label: "Mileage", value: "46K Km" },
      { label: "Fuel Type", value: "Petrol" },
      { label: "Fuel tank capacity", value: "37L" },
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
  