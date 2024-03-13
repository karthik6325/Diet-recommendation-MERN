import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import "./form.css";

const Diet = () => {
  const [selectedValue, setSelectedValue] = useState('weight_gain');
  const [selectedFoodTiming, setSelectedFoodTiming] = useState('')
  const history = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [cameFromHealthy, setCameFromHealthy] = useState(false);
  const [user, setUser] = useState({
    Age: "",
    Weight: "",
    Height: "",
    Diet_Type: "weight_gain",
    Food_Timing: "1",
    Disease: "None",
    WeightGainField: "",
    WeightGainGoal: "",
    Activity_level: "",
    WeightLossField: "",
    WeightLossGoal: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log(`Key pressed: ${name}, Value: ${value}`);
  };

  const handleChange1 = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log(`Key pressed: ${name}, Value: ${value}`);
    setSelectedValue(e.target.value);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleFoodTimingChange = (eventKey) => {
    setSelectedFoodTiming(eventKey);
  };

  useEffect(() => {
    console.log(user)
  }, [user])

  const print = async (e) => {
    e.preventDefault();

    const formData = {
      ...user,
    };

    try {
      const response = axios.post(
        `http://localhost:3001/api/v1/${user.Diet_Type}`,
        formData
      );
      history("../user")

      console.log("Response from server:", response.data);
    } catch (error) {
      console.error("Error sending request:", error);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 1:
  return (
    <div className="container">
      <div>
        <h1>Personal Information</h1>
        <form onChange={handleChange}>
          <label>Age</label>
          <input id="Age" name="Age" type="text" />
          <label>Weight</label>
          <input id="Weight" name="Weight" type="text" />
          <label>Height</label>
          <input id="Height" name="Height" type="text" />
        </form>
      </div>
      <div className="btn-container1">
        <button type="button" onClick={nextPage} className="btn">
          Next
        </button>
      </div>
    </div>
  );
      case 2:
        return (
          <div>
          <div>
            <h1>Additional Information</h1>
            <form onChange={handleChange}>

              <label htmlFor="foodTiming">Food Timing</label>
              <select id="foodTiming" name="Food_Timing" className="dropdown-select">
                <option value="1" name="Breakfast">Breakfast</option>
                <option value="2" name="Lunch">Lunch</option>
                <option value="3" name="Dinner">Dinner</option>
              </select>

              <label htmlFor="disease">Disease</label>
              <select id="disease" name="Disease" className="dropdown-select">
                <option value="" name="None">None</option>
                <option value="hypertension" name="Hypertension">Hypertension</option>
                <option value="obesity" name="Obesity">Obesity</option>
                <option value="diabetes" name="Diabetes">Diabetes</option>
                <option value="kidney_disease" name="Kidney Disease">Kidney Disease</option>
                <option value="rickets" name="Rickets">Rickets</option>
                <option value="scurvy" name="Scurvy">Scurvy</option>
                <option value="anemia" name="Anemia">Anemia</option>
                <option value="goitre" name="Goitre">Goitre</option>
                <option value="eye_disease" name="Eye Disease">Eye Disease</option>
                <option value="low_blood_pressure" name="Low Blood Pressure">Low Blood Pressure</option>
                <option value="thyroid" name="Thyroid">Thyroid</option>
                <option value="cholera" name="Cholera">Cholera</option>
                <option value="malnutrition" name="Malnutrition">Malnutrition</option>
              </select>
            </form>
          </div>
          <div className="btn-container">
          <button type="button" onClick={prevPage} className="btn">
            Previous
          </button>
          <button type="button" onClick={nextPage} className="btn">
            Next
          </button>
          </div>
          </div>
        );
      case 3:
        return (
          <div>
          <div>
            <h1>Diet preferences</h1>
            <form onChange={handleChange1}>
              {/* <Select label="Diet type" id="Diet_type" name="Diet_Type" defaultValue={selectedValue} >
                <option value="weight_gain">Weight_gain</option>
                <option value="weight_loss">Weight_loss</option>
                <option value="healthy">Healthy</option>
              </Select> */}
              <label >Diet type</label>
              <select id="Diet_type" name="Diet_Type" className="dropdown-select" value={selectedValue} >
                <option value="weight_gain">Weight gain</option>
                <option value="weight_loss">Weight loss</option>
                <option value="healthy">Healthy</option>
              </select>
            </form>
            </div>
            <div className="btn-container">
          <button type="button" onClick={prevPage} className="btn">
            Previous
          </button>
          <button type="button" onClick={nextPage} className="btn">
            Next
          </button>
          </div>
          </div>
        );
      case 4:
        // Render additional details based on diet type preference
        const dietType = user.Diet_Type;
        console.log(dietType);
        return (
          <div>
          <div>
            <h1>Additional Details for {dietType}</h1>

            {/* Additional fields based on diet type */}
            {dietType === "weight_gain" && (
              <form onChange={handleChange}>
                <label>How much weight do you want to gain?</label>
                <input id="WeightGainField" name="WeightGainField" type="text" />
                <label>You want to achieve the above goal in how many days</label>
                <input id="WeightGainGoal" name="WeightGainGoal" type="text" />
                <label>Activity level</label>
                <select id="Activity_level" name="Activity_level" className="dropdown-select">
                  <option value="1">Sedentary (Little to no exercise)</option>
                  <option value="2">Lightly active (Light exercise/sports 1-3 days/week)</option>
                  <option value="3">Moderately active (Moderate exercise/sports 3-5 days/week)</option>
                  <option value="4">Very active (Hard exercise/sports 6-7 days a week)</option>
                  <option value="5">Extremely active (Very hard exercise/sports & physical job)</option>
                </select>
              </form>
            )}
            {dietType === "weight_loss" && (
              <form onChange={handleChange}>
                <label>How much weight do you want to lose?</label>
                <input id="WeightLossField" name="WeightLossField" type="text" />
                <label>You want to achieve the above goal in how many days</label>
                <input id="WeightLossGoal" name="WeightLossGoal" type="text" />
                <label>Activity level</label>
                <select id="Activity_level" name="Activity_level" className="dropdown-select">
                  <option value="1">Sedentary (Little to no exercise)</option>
                  <option value="2">Lightly active (Light exercise/sports 1-3 days/week)</option>
                  <option value="3">Moderately active (Moderate exercise/sports 3-5 days/week)</option>
                  <option value="4">Very active (Hard exercise/sports 6-7 days a week)</option>
                  <option value="5">Extremely active (Very hard exercise/sports & physical job)</option>
                </select>
              </form>
            )}
            {dietType === "healthy" && (
              <form onChange={handleChange}>
                <label>Activity level</label>
                <select id="Activity_level" name="Activity_level" className="dropdown-select">
                  <option value="1">Sedentary (Little to no exercise)</option>
                  <option value="2">Lightly active (Light exercise/sports 1-3 days/week)</option>
                  <option value="3">Moderately active (Moderate exercise/sports 3-5 days/week)</option>
                  <option value="4">Very active (Hard exercise/sports 6-7 days a week)</option>
                  <option value="5">Extremely active (Very hard exercise/sports & physical job)</option>
                </select>
              </form>
            )}
            {/* Common fields */}

          </div>
          <div className="btn-container">
          <button type="button" onClick={prevPage} className="btn">
            Previous
          </button>
          <button type="button" onClick={nextPage} className="btn">
            Next
          </button>
          </div>
          </div>
        );
      case 5:
        return (
          <div>

          <form>
            <h1>Confirmation</h1>
            <p>Personal Information:</p>
            <p>Age: {user.Age}</p>
            <p>Weight: {user.Weight}</p>
            <p>Height: {user.Height}</p>
            <p>Additional Information:</p>
            <p>Food Timing: {user.Food_Timing}</p>
            <p>Disease: {user.Disease}</p>
            <p>Diet Preference: {user.Diet_preference}</p>
            <p>Diet Type: {user.Diet_Type}</p>
            {user.Diet_Type === "weight_gain" && (
              <div>
                <p>Desired Weight Gain: {user.WeightGainField}</p>
                <p>Days to Achieve Goal: {user.WeightGainGoal}</p>
                <p>Activity Level: {user.Activity_level}</p>
              </div>
            )}
            {user.Diet_Type === "weight_loss" && (
              <div>
                <p>Desired Weight Loss: {user.WeightLossField}</p>
                <p>Days to Achieve Goal: {user.WeightLossGoal}</p>
                <p>Activity Level: {user.Activity_level}</p>
              </div>
            )}
          </form>
          <div className="btn-container">
          <button type="button" onClick={prevPage} className="btn">
            Previous
          </button>
          <button type="button" onClick={nextPage} className="btn">
            Next
          </button>
          </div>
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="container">{renderPage()}</div>;
};

export default Diet;
