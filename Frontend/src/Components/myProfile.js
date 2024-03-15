import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useLogin } from '../Context/LoginContext';
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";


export default function ProfilePage() {
  const { userToken, setLoginUser } = useLogin();
  const [userDetails, setUserDetails] = useState({});
  const [activity, setActivity] = useState("");
  const history = useNavigate();

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
        console.log(response.data.data);
        setUserDetails(response.data.data);
        setActivity(getActivityLevel(response.data.data.Activity_level));
      }
    } catch (error) {
      console.error("Error!!");
      console.error(error.response.data);
    }
  }

  useEffect(() => {
    getDetails();
  }, [])

  const handleClick = () => {
    history('/diet');
  }
  const getActivityLevel = (level) => {
    switch (level) {
      case '1':
        return "Little to no exercise";
      case '2':
        return "Light exercise/sports 1-3 days/week";
      case '3':
        return "Moderate exercise/sports 3-5 days/week";
      case '4':
        return "Hard exercise/sports 6-7 days a week";
      case '5':
        return "Very hard exercise/sports & physical job";
      default:
        return "";
    }
  };

  return (
    <div>
      <section>
        <MDBContainer>
          <MDBRow style={{ marginTop: '10vh' }}>
            <MDBCol lg="4">
              <MDBCard className="mb-4" style={{ backgroundColor: 'rgb(160, 160, 160)' }}>
                <MDBCardBody className="text-center">
                  <MDBCardImage
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    className="rounded-circle"
                    fluid
                  />
                  <p className="text-muted mb-1">{userDetails.Name}</p>
                  <div className="d-flex justify-content-center mb-2">
                    <button className='btn' onClick={handleClick}>Edit</button>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol lg="8">
              <MDBCard className="mb-4" style={{ backgroundColor: 'rgb(160, 160, 160)' }}>
                <MDBCardBody>
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText className="text-muted">Age</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{userDetails.Age}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText className="text-muted">Weight</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{userDetails.Weight}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText className="text-muted">Height</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{userDetails.Height}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText className="text-muted">Disease</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{userDetails.Disease}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText className="text-muted">Diet Type</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{userDetails.Diet_Type}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow>
                    <MDBCol sm="3">
                      <MDBCardText className="text-muted">Activity Level</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">{activity}</MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </div>
  );
}
