import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const initialFormData = {
    firstname: "",
    lastname: "",
    email: "",
    mobileno: "",
  };
function Step1() {

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
        formData.firstname &&
        formData.lastname &&
        formData.email &&
        formData.mobileno
      ) {
        console.log("Form submitted:", formData);
        setFormData(initialFormData);
      } else {
        alert("Please fill in all required fields");
      }
    };

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <input
        type="text"
        name="firstname"
        onChange={handleInputChange}
        placeholder="First Name"
        value={formData.firstname}
        required
      />

      <br />

      <input
        type="text"
        name="lastname"
        onChange={handleInputChange}
        placeholder="Last Name"
        value={formData.lastname}
        required
      />
      <br />

      <input
        type="email"
        name="email"
        onChange={handleInputChange}
        placeholder="Email"
        value={formData.email}
        required
      />

      <br />

      <input
        type="tel"
        name="mobileno"
        onChange={handleInputChange}
        placeholder="eg. 91********"
        value={formData.mobileno}
        required
      />

      <input type="submit" />
     
     
      <Link to="/form/step2">Next</Link>
    </div>
    </form>
  )
}

export default Step1