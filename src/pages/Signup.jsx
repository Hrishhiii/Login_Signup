import React, { useState } from 'react';
import './signup.css';

function Signup() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [title, setTitle] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [dateOfJoining, setDateOfJoining] = useState('');
  const [gender, setGender] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [placeOfBirth, setPlaceOfBirth] = useState('');
  const [emergencyContactName, setEmergencyContactName] = useState('');
  const [emergencyContactNumber, setEmergencyContactNumber] = useState('');
  const [emergencyContactRelationship, setEmergencyContactRelationship] = useState('');
  const [capabilityName, setCapabilityName] = useState('');
  const [baseLocation, setBaseLocation] = useState('');
  const [careerManager, setCareerManager] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [passwordStrength, setPasswordStrength] = useState({
    text: "",
    color: "",
  });

  const [errorMessage, setErrorMessage] = useState('');

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const checkPasswordStrength = (pwd) => {
    if (pwd.length < 6) {
      setPasswordStrength({ text: "Weak", color: "red" });
    } else if (pwd.match(/[A-Z]/) && pwd.match(/[0-9]/) && pwd.match(/[@$!%*?&#]/)) {
      setPasswordStrength({ text: "Strong", color: "green" });
    } else {
      setPasswordStrength({ text: "Medium", color: "orange" });
    }
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    checkPasswordStrength(pwd);
  };

  // Validation function
  const validateForm = () => {
    let errors = "";

    // Name validation: No numeric values allowed
    if (/\d/.test(firstName) || /\d/.test(lastName)) {
      errors += "First name and last name should not contain numeric values.\n";
    }

    // Mobile number validation: Should be exactly 10 digits
    if (!/^\d{10}$/.test(mobileNumber)) {
      errors += "Mobile number should be exactly 10 digits.\n";
    }

    // Email validation: Should end with @bluealtair.com
    if (!email.endsWith('@bluealtair.com')) {
      errors += "Email should end with @bluealtair.com.\n";
    }

    // Password match validation
    if (password !== confirmPassword) {
      errors += "Passwords do not match.\n";
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform validation
    const errors = validateForm();

    if (errors) {
      setErrorMessage(errors); // Display error messages
    } else {
      setErrorMessage(''); // Clear error messages
      alert('Form Submitted Successfully!');
    }
  };

  return (
    <div className="signup-container">
      <img src="BA.png" alt="BlueAltair Logo" />
      <h2>REGISTRATION</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        
        <h3>Account Details</h3>
        <input
          type="email"
          placeholder="Official BA Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Employee ID"
          onChange={(e) => setEmployeeId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Mobile Number"
          onChange={(e) => setMobileNumber(e.target.value)}
          required
        />
        <input
          type="date"
          onChange={(e) => setDateOfJoining(e.target.value)}
          required
        />

        <h3>Personal Details</h3>
        <select
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <select 
          onChange={(e) => setBloodGroup(e.target.value)}
          required
        >
          <option value="">Select Blood Group</option>
          <option value ="A+">A+</option>
          <option value ="A-">A-</option>
          <option value ="B+">B+</option>
          <option value ="B-">B-</option>
          <option value ="AB+">AB+</option>
          <option value ="AB-">AB-</option>
          <option value ="O+">O+</option>
        </select>
        {/* <input
          type="text"
          placeholder="Blood Group"
          onChange={(e) => setBloodGroup(e.target.value)}
          required
        /> */}
        <input
          type="date"
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Place of Birth"
          onChange={(e) => setPlaceOfBirth(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Emergency Contact Name"
          onChange={(e) => setEmergencyContactName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Emergency Contact Number"
          onChange={(e) => setEmergencyContactNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Emergency Contact Relationship"
          onChange={(e) => setEmergencyContactRelationship(e.target.value)}
          required
        />
    
        <h3>Organization Details</h3>
        <select
        onChange={(e) => setCapabilityName(e.target.value)}
        required
        >
          <option value="">Select Capability</option>
          <option value="Digitial Application Development">Digitial Application Development</option>
          <option value="Data Management">Data Management</option>
          <option value="Data Science & AI">Data Science & AI</option>
          <option value="API Management & Integration">API Management & Integration</option>
        </select>
        <input
          type="text"
          placeholder="Base Location"
          onChange={(e) => setBaseLocation(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Career Manager"
          onChange={(e) => setCareerManager(e.target.value)}
          required
        />

        <h3>Credentials</h3>
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={handlePasswordChange}
            required
          />
          <i
            className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            onClick={togglePasswordVisibility}
          ></i>
          <p style={{ color: passwordStrength.color, fontWeight: "bold" }}>
            {passwordStrength.text && `Password Strength: ${passwordStrength.text}`}
          </p>
        </div>

        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <i
            className={`fa ${showPassword ? "fa-eye-slash" : "fa-eye"}`}
            onClick={togglePasswordVisibility}
          ></i>
        </div>

        {errorMessage && <div style={{ color: "red" }}><p>{errorMessage}</p></div>}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
