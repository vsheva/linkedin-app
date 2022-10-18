import React from 'react';
import Avatar from "@material-ui/core/Avatar";
import "./Sidebar.css"

const Sidebar = () => {

    const recentItem=(work)=>(
        <div className="sidebar__recentItem">
            <span className="sidebar__item">#</span>
            <p>{work}</p>
        </div>
    )

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3872&q=80" alt=""/>
                <Avatar className="sidebar__avatar" />
                <h2>Vally Shev</h2>
                <h4>valera.sheva@gmail.com</h4>
            </div>
            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you ?</p>
                    <p className="sidebar__statNumber">2.556</p>
                </div>
                <div className="sidebar__stat">
                    <p>Wiews on post ?</p>
                    <p className="sidebar__statNumber">2.321</p>
                </div>
            </div>
            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("nextjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </div>
        </div>
    )
};

export default Sidebar;
