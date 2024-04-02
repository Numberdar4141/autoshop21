const Overview = () => {
    const carData = [
      { label: "Make", value: "Kia" },
      { label: "Model", value: "HTX G" },
      { label: "Color", value: "White" },
      { label: "Drive Type", value: "4x4" },
      { label: "Transmission", value: "Manual" },
      { label: "Make Year", value: " Jan 2020" },
      { label: "Registration Year", value: " May 2020" },
      { label: "Km driven", value: "65K Km" },
      { label: "Fuel Type", value: "Petrol" },
      { label: "Fuel tank capacity", value: "50L" },
      { label: "Doors", value: "5" },
      { label: "No. of Owner", value: "1st Owner" },
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
  