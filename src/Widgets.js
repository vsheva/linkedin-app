import React from 'react';
import "./Widgets.css"
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

  const newsArticle =(heading, subtitle)=>(
      <div className="widgets__article">
        <div className="widgets__articleLeft">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__articleRight">
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
      </div>
  )

  return <div className="widgets">
    <div className="widgets__header">
      <h2>LinkedIn News</h2>
      <InfoIcon />
    </div>

      {newsArticle("Vally in React", "Top news- 9099 readers")}
      {newsArticle("Coronavius: USA updates", "Top news- 886 readers")}
      {newsArticle("Tesla hits new hights", "Car & auto- 300 readers")}
      {newsArticle("Bitcoin Breaks $22k", "Crypto-8000 readers")}
      {newsArticle("Is Redux too good?", "Code- 123 readers")}
      {newsArticle("Vally finished this project?", "Top news- 6583 reader")}
      {newsArticle("React vs Vue - what thech is better and why?!", "Top news- 9455 readers")}
  </div>;
}

export default Widgets;
