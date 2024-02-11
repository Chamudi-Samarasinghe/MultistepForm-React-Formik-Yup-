import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//import { Button } from "@mui/material";

// Slide 1: Login Form

const Slide1 = ({ onNext }) => {
  return (
    <div className="form-container">
      <h4 className="form-heading">Login</h4>
      <Form>
        <div className="form-field">
          <label htmlFor="email" className="form-label">Email</label>
          <Field name="email" type="text" className="form-input" />
          <ErrorMessage className="form-error" name="email" component="div" />
        </div>

        <div className="form-field">
          <label htmlFor="password" className="form-label">Password</label>
          <Field name="password" type="password" className="form-input" />
          <ErrorMessage className="form-error" name="password" component="div" />
        </div>

        <p>Forgot Password?</p>
        
        <button type="submit">Login</button>
      </Form>

      <p>New to Us? <b onClick={onNext} className="P-link">Join Now</b></p>
    </div>
  );
};



// Slide 2: Create Account Form
const Slide2 = ({ onPrev, onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isNextDisabled, setIsNextDisabled] = useState(true);

  const handleOptionSelect = (e) => {
    const option = e.target.value;
    setSelectedOption(option);
    setIsNextDisabled(option !== "Business");
  };

  const handleNext = () => {
    if (selectedOption === "Business") {
      onNext();
    }
  };

  return (
    <div className="form-container">
      <h4 className="form-heading">Create a New Account</h4>
      <p className="form-description">
        Come join our Community!Let's set up your Account. Already have one?{" "}
        <b onClick={onPrev} className="P-link">
         Sign in here
        </b>
      </p>
      <Form>
        <div className="form-field">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <Field name="email" type="text" className="form-input" />
          <ErrorMessage className="form-error" name="email" component="div" />
        </div>

        <p>Select the option</p>

        <div className="form-field">
          <label>
            <input
              type="radio"
              name="accountType"
              value="Business"
              checked={selectedOption === "Business"} 
              onChange={handleOptionSelect}
            />
            Business
          </label>
        </div>
        <div className="form-field">
          <label>
            <input
              type="radio"
              name="accountType"
              value="Individual"
              checked={selectedOption === "Individual"}
              onChange={handleOptionSelect}
            />
            Individual
          </label>
        </div>

        <button type="button" onClick={handleNext} disabled={isNextDisabled}>
          Next
        </button>
      </Form>
    </div>
  );
};



// Slide 3: ID Verification Form
const Slide3 = ({ onPrev, onNext }) => {
  const [droppedImage, setDroppedImage] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    handleImage(file);
  };

  const handleImage = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setDroppedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    handleImage(file);
  };

  const handleSubmit = (values) => {
    // Handle form submission
    onNext();
  };

  return (
    <div className="form-container">
      <h4>Step 1</h4>
      <h4>ID Verification</h4>
      <p>Upload your Driving License/Passport</p>
      <Form>
        <div
          className="dropzone"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          {droppedImage ? (
            <img src={droppedImage} alt="Dropped" />
          ) : (
            <p>Drag and drop your image here or click to select</p>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageSelect}
            style={{ display: "none" }}
            id="fileInput"
          />
          <label htmlFor="fileInput" className="P-link">Select Image</label>
        </div>

        <button type="submit" onClick={handleSubmit}>
          Next
        </button>
      </Form>
    </div>
  );
};

// Slide 4: Step 2 Form
// Add Slide4 component for Step 2 form...
const Slide4 = ({ onPrev, onNext }) => {
  return (
    <div className="form-container">
      <h4>Step 2</h4>
      <Form>
        <div className="form-field">
          <label htmlFor="businessName" className="form-label">Business Name</label>
          <Field name="businessName" type="text" className="form-input" />
          <ErrorMessage className="form-error" name="businessName" component="div" />
        </div>

        <div className="form-field">
          <label htmlFor="companyNumber" className="form-label">Company Number</label>
          <Field name="companyNumber" type="text" className="form-input" />
          <ErrorMessage className="form-error" name="companyNumber" component="div" />
        </div>

        <div className="form-field">
          <label htmlFor="address" className="form-label">Address</label>
          <Field name="address" type="text" className="form-input" />
          <ErrorMessage className="form-error" name="address" component="div" />
        </div>

        <button onClick={onPrev} class="previous-B">Previous</button>
        <button type="submit" onClick={onNext} class="next-B">Next</button>
      
      </Form>

      
    </div>
  );
};

// Slide 5: Step 3 Form

const Slide5 = ({ onPrev, onNext }) => {
  return (
    <div className="form-container">
      <h4>Step 3</h4>
      <Form>
        <div className="form-field">
          <label htmlFor="country" className="form-label">Country</label>
          <Field name="country" type="text" className="form-input" />
          <ErrorMessage className="form-error" name="country" component="div" />
        </div>

        <div className="form-field">
          <label htmlFor="websiteLink" className="form-label">Website Link</label>
          <Field name="websiteLink" type="text" className="form-input" />
          <ErrorMessage className="form-error" name="websiteLink" component="div" />
        </div>

        <div className="form-field">
          <label htmlFor="pointOfContact" className="form-label">Point of Contact</label>
          <Field name="pointOfContact" type="text" className="form-input" />
          <ErrorMessage className="form-error" name="pointOfContact" component="div" />
        </div>

        <button type="submit" onClick={onNext} class="next-B">Next</button>
        
        <button onClick={onPrev} class="previous-B">Previous</button>
      </Form>

      
    </div>
  );
};

// Slide 6: Step 4 Form

const Slide6 = ({ onPrev, onNext }) => {
  return (
    <div className="form-container">
      <h4>Step 4</h4>
      <Form>
        <div className="form-field">
          <label htmlFor="firstName" className="form-label">First Name</label>
          <Field name="firstName" type="text" className="form-input" />
          <ErrorMessage className="form-error" name="firstName" component="div" />
        </div>

        <div className="form-field">
          <label htmlFor="middleName" className="form-label">Middle Name</label>
          <Field name="middleName" type="text" className="form-input" />
          <ErrorMessage className="form-error" name="middleName" component="div" />
        </div>

        <div className="form-field">
          <label htmlFor="lastName" className="form-label">Last Name</label>
          <Field name="lastName" type="text" className="form-input" />
          <ErrorMessage className="form-error" name="lastName" component="div" />
        </div>

        <button type="submit" onClick={onNext} class="next-B">Next</button>
        <button onClick={onPrev} class="previous-B">Previous</button>
      </Form>

      
    </div>
  );
};

// Slide 7: Step 5 Form
const Slide7 = ({ onPrev }) => {
  return (
    <div className="form-container">
      <h4>Step 5</h4>
      <Form>
        <div className="form-field">
          <label htmlFor="contactEmail" className="form-label">Contact Email</label>
          <Field name="contactEmail" type="email" className="form-input" />
          <ErrorMessage className="form-error" name="contactEmail" component="div" />
        </div>

        <div className="form-field">
          <label htmlFor="contactNumber" className="form-label">Contact Number</label>
          <Field name="contactNumber" type="tel" className="form-input" />
          <ErrorMessage className="form-error" name="contactNumber" component="div" />
        </div>

        <button type="submit" class="next-B">Submit</button>
        <button onClick={onPrev} class="previous-B">Previous</button>
      </Form>

    
    </div>
  );
};

const SignUpForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (values) => {
    console.log(values);
    // Handle form submission
  };

  return (

    <Formik
      initialValues={{
        email: "",
        password: "",
        image: "",
        contactEmail: "",
        contactNumber: "",
        firstName:"",
        lastName:"",
        businessName:"",
        address:"",
        country:"",

      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("Required"),
        image: Yup.mixed().required("Required"),
        firstName: Yup.string().required("Required"),
        lastName: Yup.string().required("Required"),
        contactEmail: Yup.string().email("Invalid email address").required("Required"),
        contactNumber: Yup.string().required("Required"),
        businessName: Yup.string().required("Required"),
        address: Yup.string().required("Required"),
        country: Yup.string().required("Required"),
      })}
      onSubmit={handleSubmit}
    >
      {formik => (
        <div>
          {step === 1 && <Slide1 onNext={nextStep} />}
          {step === 2 && <Slide2 onPrev={prevStep} onNext={nextStep} />}
          {step === 3 && <Slide3 onPrev={prevStep} onNext={nextStep} />}
          {step === 4 && <Slide4 onPrev={prevStep} onNext={nextStep} />}
          {step === 5 && <Slide5 onPrev={prevStep} onNext={nextStep} />}
          {step === 6 && <Slide6 onPrev={prevStep} onNext={nextStep} />}
          {step === 7 && <Slide7 onPrev={prevStep} />}
        </div>
      )}
    </Formik>
  );
};

export default SignUpForm;
