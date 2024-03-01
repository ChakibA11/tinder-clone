import { useState } from "react";

import { useNavigate } from "react-router-dom";

const AuthModel = ({ setShowModal, isSignUp }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);
  const [isCollapsed, setCollapsed] = useState(true);

  console.log(email, password, confirmPassword);

  const handleClick = async e => {
    setShowModal(false);
    e.preventDefault();
  };

  const toggleCollapse = () => {};

  const handleSubmit = async e => {
    e.preventDefault();
  };

  return (
    <div>
      {isCollapsed &&
        <div className="auth-modal">
          <button className="close-icon" onClick={handleClick}>
            ⓧ
          </button>

          <h2>
            {isSignUp ? "CREATE ACCOUNT" : "LOG IN"}
          </h2>
          <p>
            By clicking Log In, you agree to our terms. Learn how we process
            your data in our Privacy Policy and Cookie Policy.
          </p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              required={true}
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              required={true}
              onChange={e => setPassword(e.target.value)}
            />
            {isSignUp &&
              <input
                type="password"
                id="password-check"
                name="password-check"
                placeholder="confirm password"
                required={true}
                onChange={e => setConfirmPassword(e.target.value)}
              />}
            <input className="secondary-button" type="submit" />
            <p>
              {error}
            </p>
          </form>
          <h2>GET THE APP</h2>
        </div>}
    </div>
  );
};

export default AuthModel;
