"use client";
import { useRouter } from "next/navigation";

const FilterBox = () => {
  const router = useRouter();

  const selectBoxes = [
   
    {
      id: 1,
      label: "Select Make",
      options: ["Maruti Suzuki", " Hyundai", "Honda", "Ford", " Tata", "Kia","Mahindra","Toyota","Nissan"],
    },
    {
      id: 2,
      label: "Select Model",
      options: ["i20","Grand i10",
      "Creta",
      "i10","Verna","Renault","Kwid","Triber","Kiger","Duster","Captur","Honda","City","Amaze","Jazz",
      "WR-V",
      "Brio",
      "Tata",
      "Nexon",
      "Tiago",
      "Altroz",
      "Tigor",
      "Zest",
      "Mahindra",
      "XUV500",
      "XUV 300",
      "XUV700",
      "TUV300"],
    },
    {
      id: 3,
      label: "Select Price",
      options: ["No max Price", "₹1 L", "₹5 L", "₹10 L", "₹15 L","₹25 L"],
    },
    {
      id: 4,
      label: "Fuel",
      options: ["Petrol", "Diesel", "CNG"],
    },
  ];

  return (
    <ul className="mb0 text-center filter-style_two d-block d-lg-flex justify-content-center flex-wrap">
      {selectBoxes.map((selectBox) => (
        <li key={selectBox.id}>
          <div className="select-boxes">
            <div className="car_brand">
              <select className="form-select">
                <option>{selectBox.label}</option>
                {selectBox.options.map((option) => (
                  <option key={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </li>
      ))}
      <li>
        <div className="d-block">
          <button
            className="btn btn-thm advnc_search_form_btn"
            onClick={() => router.push("/listing-v5")}
          >
            <span className="flaticon-magnifiying-glass" />
            Search
          </button>
        </div>
      </li>
    </ul>
  );
};

export default FilterBox;
