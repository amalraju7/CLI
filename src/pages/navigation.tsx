
import { NavLink } from 'react-router-dom';
import LogoutButton from '../components/log-out-button';

interface NavigationProps{
  isLoggedIn:boolean,
  onLogOut: (value: boolean) => void;
}

const Navigation = ({isLoggedIn,onLogOut}:NavigationProps) => {

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
       
        <li>
          
          <NavLink to={isLoggedIn ?'/codecell' :'login' } >Code Cli</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
        
      {!isLoggedIn &&
          <li>
            <NavLink to='/login'>Login</NavLink>
           
          </li>}
     
          {!isLoggedIn &&
        <li>
          <NavLink to='/register'>Register</NavLink>
        </li>
}
        {isLoggedIn &&
        <li>
            <LogoutButton onLogOut={onLogOut} ></LogoutButton>
           
          </li>
}
      </ul>
    </nav>
  );
};
export default Navigation;
