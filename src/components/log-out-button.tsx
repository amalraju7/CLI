interface LogoutButtonProps{
    onLogOut:(value:boolean)=>void;
}

const LogoutButton = ({onLogOut}:LogoutButtonProps) => {
  

    const handleLogout = () => {
      localStorage.removeItem('token');
      onLogOut(false);

  
    };
  
    return (
      <button style={{ backgroundColor: '#282d32' , color: 'white',margin:'4px' }} onClick={handleLogout}>Logout</button>
    );
  };

  export default LogoutButton;
  