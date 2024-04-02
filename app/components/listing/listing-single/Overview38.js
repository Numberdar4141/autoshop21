const Overview = () => {
    const carData = [
      { label: "Make", value: "Maruti Suzuki" },
      { label: "Model", value: " ZDi" },
      { label: "Color", value: "White" },
      { label: "Drive Type", value: "4x4" },
      { label: "Transmission", value: "Automatic" },
      { label: "Make Year", value: "2022" },
      { label: "Registration Year", value: "2022" },
      { label: "Mileage", value: "34K Km" },
      { label: "Fuel Type", value: "Diesel" },
      { label: "Fuel tank capacity", value: "26L" },
      { label: "Doors", value: "5" },
      { label: "Owener", value: "1st" },
     
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
  