import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory from React Router

interface LogoutButtonProps {
  onLogOut: (value: boolean) => void;
}

const LogoutButton = ({ onLogOut }: LogoutButtonProps) => {
  const navigate = useNavigate(); // Initialize history

  const handleLogout = () => {
    localStorage.removeItem('token');
    onLogOut(false);

    // Redirect to a different page
    navigate('/login'); // Replace 'login' with your desired route
  };

  return (
    <button style={{ backgroundColor: '#282d32', color: 'white', margin: '4px' }} onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
