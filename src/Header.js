import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUser} from "./features/userSlice";
import firebase from 'firebase/compat/app';


const Header = () => {
    const dispatch = useDispatch();
    const auth = firebase.auth();

    const user = useSelector(selectUser)

    const logoutOfApp=()=> {
        dispatch(logout());
        auth.signOut();
    }

  return (
    <div className="header">
      <div className="header__left">
        <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
        <div className="header__search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>

      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccount} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          avatar={true}
          title="me"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
};

export default Header;


/*
<HeaderOption
    avatar="https://media-exp1.licdn.com/dms/image/D4E03AQH2gPhvlW9Nvg/profile-di1671667200&v=beta&t=SxbJuJx_kcD80joOqq5f03a9LqpL8_VDV_Qbmq1ectQ"
    title="me"
    onClick={logoutOfApp}
/>*/
