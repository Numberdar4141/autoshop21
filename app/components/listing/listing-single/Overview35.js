const Overview = () => {
    const carData = [
      { label: "Make", value: "Nissan" },
      { label: "Model", value: "XV Premium " },
      { label: "Color", value: "Amber Orange" },
      { label: "Drive Type", value: "4x4" },
      { label: "Transmission", value: "Manual" },
      { label: "Make Year", value: " Jan 2019" },
      { label: "Registration Year", value: " May 2019" },
      { label: "Mileage", value: "22K Km" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "Fuel tank capacity", value: "37L" },
      { label: "Doors", value: "5" },
      { label: "No. of Owener", value: "2nd Owner" },
     
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
