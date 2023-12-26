import React, { useState } from "react";
import { Link } from "react-router-dom";

const initialFormData = {
  name: "",
  store_location: "",
  email: "",
  mobileno: "",
  website: "",
};

function Form() {
  const [formData, setFormData] = useState(initialFormData);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.store_location &&
      formData.email &&
      formData.mobileno && 
      formData.website
    ) {
      console.log("Form submitted:", formData);
      setFormData(initialFormData);
    } else {
      alert("Please fill in all required fields");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "100px",
      }}
    >
      <h1>Add Financer Details</h1>
      <form onSubmit={handleSubmit} style={{width:'100%'}}>
        <div>
          <div style={{ margin: "10px", padding: "10px" }}>
            <label htmlFor="name">
              Name
              <div>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleInputChange}
                placeholder="your Name"
                value={formData.name}
                maxLength="50"
                required
              /></div>
            </label>
          </div>

          <div style={{ margin: "10px", padding: "10px" }}>
            <label htmlFor="store_location">
              Store Location
              <div>
              <input
                type="text"
                id="store_location"
                name="store_location"
                onChange={handleInputChange}
                placeholder="Your store location"
                value={formData.store_location}
                maxLength="50"
                required
              /> </div>
            </label>
          </div>

          <div style={{ margin: "10px", padding: "10px" }}>
            <label htmlFor="email">
              Email
              <div>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleInputChange}
                placeholder="Email"
                value={formData.email}
                maxLength="50"
                required
              /></div>
            </label>
          </div>

          <div style={{ margin: "10px", padding: "10px" }}>
            <label htmlFor="mobileno">
              Mobile No
              <div>
              <input
                type="tel"
                name="mobileno"
                id="mobileno"
                onChange={handleInputChange}
                placeholder="eg. 91********"
                value={formData.mobileno}
                maxLength="10"
                required
              /></div>
            </label>
          </div>

          <div style={{ margin: "10px", padding: "10px" }}>
            <label htmlFor="website">
              Website
              <div>
              <input
                type="url"
                id="website"
                name="website"
                onChange={handleInputChange}
                placeholder="website"
                value={formData.website}
                maxLength="50"
                required
              /></div>
            </label>
          </div>

          <input type="submit" />

          <Link to="/form/step1">Next</Link>
        </div>
      </form>
    </div>
  );
}

export default Form;
