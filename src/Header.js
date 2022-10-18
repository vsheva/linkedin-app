import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import  HomeIcon from '@material-ui/icons/Home'
import  SupervisorAccount from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                    alt=""
                />

                <div className="header__search">
                    <SearchIcon/>
                    <input type="text"/>
                </div>
            </div>

            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home"/>
                <HeaderOption Icon={SupervisorAccount} title="My Network"/>

                <HeaderOption Icon={BusinessCenterIcon} title="Jobs"/>
                <HeaderOption Icon={ChatIcon} title="Messaging"/>
                <HeaderOption Icon={NotificationsIcon} title="Notifications"/>
                <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/D4E03AQH2gPhvlW9Nvg/profile-displayphoto-shrink_800_800/0/1664786666033?e=1671667200&v=beta&t=SxbJuJx_kcD80joOqq5f03a9LqpL8_VDV_Qbmq1ectQ" title="me" />
            </div>
        </div>
    );
};

export default Header;
