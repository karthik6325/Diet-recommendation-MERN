import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, NavLink, useLocation } from "react-router-dom";
import { useLogin } from '../Context/LoginContext';
import toast from 'react-hot-toast';
import "./form.css";

const Diet = () => {
  const navigate = useNavigate();
  const [selectedValue, setSelectedValue] = useState("weight_gain");
  const [selectedFoodTiming, setSelectedFoodTiming] = useState("1");
  const [selectedDisease, setSelectedDisease] = useState("None");
  const [selectedGender, setSelectedGender] = useState("1");
  const [currentPage, setCurrentPage] = useState(1);
  const { userToken, setLoginUser } = useLogin();
  const [user, setUser] = useState({
    Age: "",
    Weight: "",
    Height: "",
    Gender: "1",
    Diet_Type: "weight_gain",
    Food_Timing: "1",
    Disease: "None",
    WeightGainField: "",
    WeightGainGoal: "",
    Activity_level: "1",
    WeightLossField: "",
    WeightLossGoal: "",
  });

  useEffect(() => {
    console.log(user);
  }, [user]);

  const validatePersonalInfo = () => {
    return user.Age && user.Weight && user.Height;
  };

  const validateAdditionalInfo = () => {
    return user.Food_Timing && user.Disease;
  };

  const validateDietPreferences = () => {
    return user.Diet_Type;
  };

  const getDetails = async () => {
    try {
      const response = await axios.get(
        'http://localhost:3001/api/v1/user/details',
        {
          headers: {
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      if (response) {
        const userData = response.data.data;
        console.log("userdata",userData)
        setUser({
          Age: userData.Age || "",
          Weight: userData.Weight || "",
          Height: userData.Height || "",
          Gender: userData.Gender || "1",
          Diet_Type: userData.Diet_Type || "weight_gain",
          Food_Timing: userData.Food_Timing || "1",
          Disease: userData.Disease || "None",
          WeightGainField: userData.WeightGainField || "",
          WeightGainGoal: userData.WeightGainGoal || "",
          Activity_level: userData.Activity_level || "1",
          WeightLossField: userData.WeightLossField || "",
          WeightLossGoal: userData.WeightLossGoal || "",
        });
        setSelectedValue(userData.Diet_Type || "weight_gain");
        setSelectedFoodTiming(userData.Food_Timing || "1");
        setSelectedDisease(userData.Disease || "None");
        setSelectedGender(userData.Gender || "1");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

  useEffect(() => {
    getDetails(); // Fetch user details when the component mounts
  }, []); 

  const validateAdditionalDetails = () => {
    if (user.Diet_Type === "weight_gain") {
      return user.WeightGainField && user.WeightGainGoal && user.Activity_level;
    } else if (user.Diet_Type === "weight_loss") {
      return user.WeightLossField && user.WeightLossGoal && user.Activity_level;
    } else {
      return user.Activity_level;
    }
  };

  const nextPage = () => {
    switch (currentPage) {
      case 1:
        if (!validatePersonalInfo()) {
          toast.error("Please fill in all fields for Personal Information");
          return;
        }
        break;
      case 2:
        if (!validateAdditionalInfo()) {
          toast.error("Please fill in all fields for Additional Information");
          return;
        }
        break;
      case 3:
        if (!validateDietPreferences()) {
          toast.error("Please select a Diet type");
          return;
        }
        break;
      case 4:
        if (!validateAdditionalDetails()) {
          toast.error("Please fill in all fields for Additional Details");
          return;
        }
        break;
      default:
        break;
    }
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

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

  const handleChange2 = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log(`Key pressed: ${name}, Value: ${value}`);
    setSelectedFoodTiming(e.target.value);
  };

  const handleChange4 = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log(`Key pressed: ${name}, Value: ${value}`);
    setSelectedGender(e.target.value);
  };

  const handleChange3 = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
    console.log(`Key pressed: ${name}, Value: ${value}`);
    setSelectedDisease(e.target.value);
  };

  const submitData = async (e) => {
    e.preventDefault();

    try {
      if (!validateAdditionalDetails()) {
        toast.error("Please fill in all fields for Additional Details");
        return;
      }
      else {
        //   const res = await axios.post(
        //     `http://localhost:3001/api/v1/${user.Diet_Type}`,
        //     { user },
        //     {
        //         headers: {
        //             Authorization: `Bearer ${userToken}`,
        //         },
        //     }
        //   );
        //   const response = axios.post(
        //     'http://localhost:3001/api/v1/user/details',
        //     { user },
        //     {
        //         headers: {
        //             Authorization: `Bearer ${userToken}`,
        //         },
        //     }
        // );
        // if(res) console.log("Success");
        // else console.error("Error!!");
        //  navigate("../user");
      }

      // console.log("Response from server:", response.data);
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
              <h1 className="heading1">Personal Information</h1>
              <form onChange={handleChange}>
                <label>Age</label>
                <input id="Age" name="Age" type="text" value={user.Age} />
                <label>Weight</label>
                <input id="Weight" name="Weight" type="text" value={user.Weight} />
                <label>Height</label>
                <input id="Height" name="Height" type="text" value={user.Height} />
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="Gender"
                  className="dropdown-select"
                  value={selectedGender}
                  onChange={handleChange4}
                >
                  <option value="1">Male</option>
                  <option value="0">Female</option>
                </select>
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
              <h1 className="heading1">Additional Information</h1>
              <form>
                <label htmlFor="foodTiming">Food Timing</label>
                <select
                  id="foodTiming"
                  name="Food_Timing"
                  className="dropdown-select"
                  value={selectedFoodTiming}
                  onChange={handleChange2}
                >
                  <option value="1">Breakfast</option>
                  <option value="2">Lunch</option>
                  <option value="3">Dinner</option>
                </select>

                <label htmlFor="disease">Disease</label>
                <select id="disease" name="Disease" className="dropdown-select" value={selectedDisease} onChange={handleChange3}>
                  <option value="None">None</option>
                  <option value="hypertension">Hypertension</option>
                  <option value="obesity">Obesity</option>
                  <option value="diabetes">Diabetes</option>
                  <option value="kidney_disease">Kidney Disease</option>
                  <option value="rickets">Rickets</option>
                  <option value="scurvy">Scurvy</option>
                  <option value="anemia">Anemia</option>
                  <option value="goitre">Goitre</option>
                  <option value="eye_disease">Eye Disease</option>
                  <option value="low_blood_pressure">Low Blood Pressure</option>
                  <option value="thyroid">Thyroid</option>
                  <option value="cholera">Cholera</option>
                  <option value="malnutrition">Malnutrition</option>
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
              <h1 className="heading1">Diet preferences</h1>
              <form onChange={handleChange1}>
                <label>Diet type</label>
                <select
                  id="Diet_type"
                  name="Diet_Type"
                  className="dropdown-select"
                  value={selectedValue}
                >
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
              <h1 className="heading1">Additional Details for {dietType}</h1>

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
              <NavLink to={'/user'}  state={user} className='btn' >Submit</NavLink>
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
