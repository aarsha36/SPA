import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    uid: "",
    age: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted!");
  };

  const handleReset = () => {
    setFormData({
      name: "",
      uid: "",
      age: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div className="app">
      <div className="form-box">
        <h1>Simple Form</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <br></br>

          <div className="form-group">
            <label>UID</label>
            <input
              name="uid"
              value={formData.uid}
              onChange={handleChange}
              placeholder="Enter your UID"
            />
          </div>
          <br></br>
          <div className="form-group">
            <label>Age</label>
            <input
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
            />
          </div>
          <br></br>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>
          <br></br>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </div>
          <br></br>
          <div style={{ display: "flex", gap: "10px" }}>
            <button type="submit">Submit</button>
            <button type="button" className="reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
