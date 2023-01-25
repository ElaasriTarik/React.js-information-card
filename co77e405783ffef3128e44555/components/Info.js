import React from "react"

export default function Info() {
    return (
        <header className="info">
        
          <img src="./images/myImage.jpg" className="profileImage"/>
          
          <div className="subInfo">
            <div className="nameOccupation">
              <h2 className="fullName">Abdessadek EL AASRI</h2>
              <h4 className="ocupation">Frontend developer</h4>
              <p className="website">tarekel.web</p>
           </div>
            
            <div className="social">
            
               <div className="emailBtn">
                  <img src="../icons/mail.png"/>
                  <button>Email</button>
               </div>
               
               <div className="linkedInBtn" hre="https://www.linkedin.com/in/abdessadek-el-aasri-3b8590148/" target="_target">
                  <img src="../icons/linkedIn.png"/>
                  <button>LinkedIn</button>
               </div>
               
            </div>
          </div>
          
        </header>
    )
}