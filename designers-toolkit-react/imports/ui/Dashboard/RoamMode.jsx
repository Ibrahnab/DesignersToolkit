import React from "react";


export const RoamMode = () => (
  
    <div>
        <p className ="dashboardHeader">Use without an account</p>
        <img className ='dashboardCardImage'
             src='dashboard_cards_image.svg'/>
        <button className='dashboardStartButton'><img className='dashboardButtonImage' src='dashboard_roam_button.svg' onClick={myFunc}/></button>
        <p className='dashboardRoamPara'>You can only search for and browse through methodologies in this mode. If you want to create projects and save your progress, 
            please sign in or create a new account on the right hand side.</p>
    </div>
  ); 

  function myFunc(){
      console.log("Clicked");
  }