import React, { useState } from "react";

function Form() {
  // Step 1: Define state for form inputs and submitted data
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  // Step 2: Create functions to handle input changes
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  // Step 3: Create a function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Step 4: Add validation logic
    if (firstName.trim() === "") {
      setErrors(["First name is required!"]);
    } else {
      const formData = { firstName, lastName };
      const dataArray = [...submittedData, formData];
      setSubmittedData(dataArray);
      setFirstName("");
      setLastName("");
      setErrors([]);
    }
  };

  // Step 5: Display the form and submitted data
  const listOfSubmissions = submittedData.map((data, index) => (
    <div key={index}>
      {data.firstName} {data.lastName}
    </div>
  ));

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={handleLastNameChange}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Conditionally render error messages */}
      {errors.length > 0 && (
        <div>
          {errors.map((error, index) => (
            <p key={index} style={{ color: "red" }}>
              {error}
            </p>
          ))}
        </div>
      )}

      <h3>Submissions</h3>
      {listOfSubmissions}
    </div>
  );
}

export default Form;
