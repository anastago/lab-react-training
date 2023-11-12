import React, { useState } from 'react';

function SignUp(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nationality, setNationality] = useState('');

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleNationality = (event) => {
    setNationality(event.target.value);
  };


  return (
    <div>
      <input placeholder="Email:" type="text" onChange={handleEmail} />
      <input
        placeholder="Password:"
        type="password"
        onChange={handlePassword}
      />
      <select
        placeholder="Nationality:"
        onChange={handleNationality}
        value={nationality}
      >
        <option value="German">German</option>
        <option value="French">French</option>
        <option value="English">English</option>
      </select>
      {nationality === 'German' && <p>Hallo</p>}
      {nationality === 'French' && <p>Bonjour</p>}
      {nationality === 'English' && <p>Hi</p>}
      <p>Your email is {email}</p>
    </div>
  );
}

export default SignUp;
