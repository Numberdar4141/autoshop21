const SelectFilter = () => {
  const selectOptions = [
    
    {
      label: "Top Brands",
      options: ["Kia", "Maruti Suzuki", "Hyundai", "Honda", "Tata", "Renault", "Renault", "Mahindra", "Toyota", "Ford", "Nissan",  ],
    },
   
    {
      label: "Select Type",
      options: [ "MUV", "Hatchback", "Sedan", "SUV"],
    },
    {
      label: "Year",
      options: ["2015 & above", "2017 & above", "2019 & above", "2020 & above", "2022 & above","2023 & above","2024 & above"],
    },
  ];

  return (
    <>
      {selectOptions.map((option, index) => (
        <li key={index}>
          <div className="search_option_two">
            <div className="candidate_revew_select">
              <div className="dropdown bootstrap-select w100 show-tick">
                <select className="form-select dropdown-toggle w100 show-tick">
                  <option>{option.label}</option>
                  {option.options.map((value, index) => (
                    <option key={index}>{value}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </li>
      ))}
    </>
  );
};

export default SelectFilter;
