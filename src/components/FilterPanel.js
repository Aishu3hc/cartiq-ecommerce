import { useState } from "react";

export default function FilterPage({ items, getState }) {
  const [selected, setSelected] = useState("");

  function handleChange(event) {
    setSelected(event.target.value);
  }

  function applyFilter() {
    const filtered = items.filter((item) => {
      const price = parseFloat(item.price); // Ensure it's a number
      switch (selected) {
        case "0-50":
          return price >= 0 && price <= 50;
        case "50-100":
          return price > 50 && price <= 100;
        case "100-1000":
          return price > 100 && price <= 1000;
        case "1000-10000":
          return price > 1000 && price <= 10000;
        case "10000+":
          return price > 10000;
        default:
          return true;
      }
    });

    getState(filtered);
  }

  return (
    <div className="ms-3 col-2">
      <h6>Filter by price</h6>
      <p><input type="radio" name="priceFilter" value="0-50" onChange={handleChange} /> 0–50</p>
      <p><input type="radio" name="priceFilter" value="50-100" onChange={handleChange} /> 50–100</p>
      <p><input type="radio" name="priceFilter" value="100-1000" onChange={handleChange} /> 100–1000</p>
      <p><input type="radio" name="priceFilter" value="1000-10000" onChange={handleChange} /> 1000–10000</p>
      <p><input type="radio" name="priceFilter" value="10000+" onChange={handleChange} /> &gt; 10000</p>

      <button className="btn btn-primary mt-2" onClick={applyFilter}>
        Apply Filter
      </button>
    </div>
  );
}
