const Overview = () => {
    const carData = [
      { label: "Make", value: "Hyundai" },
      { label: "Model", value: "i20 Asta" },
      { label: "Color", value: "White" },
      { label: "Drive Type", value: "4x4" },
      { label: "Transmission", value: "Automatic" },
      { label: "Make Year", value: " Jan 2019" },
    { label: "Registration Year", value: "Mar 2019" },
    { label: "Km Driven", value: "23K Km" },
    { label: "Fuel Type", value: "Petrol" },
    { label: "Fuel tank capacity", value: "25L" },
    { label: "Doors", value: "5" },
    { label: "No. of Owener", value: "2nd Owner" },,
     
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
  