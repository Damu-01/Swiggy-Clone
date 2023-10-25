
import { useState } from 'react';
import './App.css';
// import Text from './component/TextForm';
import Header from './component/Header';
// import Body from './component/Body';
// import About from './component/About';
// import Contact from './component/Contact Us';
import { Outlet } from 'react-router-dom';
import UserContext from './utilities/UserContext';
import store from './utilities/store';
import { Provider } from 'react-redux';


export function App({ user }) {
  const [userDetails, setuserDetails] = useState(
    {
    'name': 'James joshi',
    'email': 'jamesjoshi@gmail.com'
    },
)


  return (
    <div >
    <Provider store={store} >
        <div >
      <UserContext.Provider value={{
        userData : userDetails,
        refurbish : setuserDetails
      }
      } >
        <Header title1="Home" title2="About" title3="Contact" title5="Cart" title6="Login" title7='Instamart'/>
       
      <Outlet />
      </UserContext.Provider>
      {/* <Body/>
      <About/>
      <Contact/>
      <Text/> */}
    </div>
    </Provider>
    </div>
     );
}

// export default App;
