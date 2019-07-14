import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../../assets/image/site/logo.png";

const AppHeader = ({ MenuItems }) => (
  <header>
    <nav className="navbar navbar-dark navbar-expand-lg header">
      <div className="container p-0">
        <Link className="navbar-brand" to="/">
          <img src={Logo} alt="logo" className="header-logo" />
        </Link>
        <button
          className="navbar-toggler collapsed ml-auto mt-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="collapse navbar-collapse"
          style={{ width: "100%" }}
          id="navbarSupportedContent"
        >
          <ul className="nav navbar-nav ml-auto mobilemenu">
            <li className="nav-item">
              {" "}
              {/*active*/}
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rescue">
                Rescue Team
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </li>
            <li className="nav-item donate d-none d-lg-block">
              <Link to="/donate">DONATE NOW</Link>
            </li>
            <li className="mob-donate d-sm-block d-lg-none">
              <Link className="nav-link" to="/donate">
                DONATE NOW
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
);

export default AppHeader;

// import React from "react";
// import { Link } from "react-router-dom";

// import Logo from "../../../assets/image/site/logo.png";

// const AppHeader = ({ MenuItems }) => (
//   <header>
//     <nav className="navbar navbar-dark navbar-expand-lg header">
//       <div className="container p-0">
//         <Link className="navbar-brand" to="/">
//           <img src={Logo} alt="logo" />
//         </Link>
//         <button
//           className="navbar-toggler collapsed ml-auto mt-0"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon" />
//         </button>
//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="nav navbar-nav ml-auto mobilemenu">
//             {MenuItems.map(menuItem => (
//               <li className="nav-item active" key={menuItem.id}>
//                 <Link className="nav-link" to={menuItem.path}>
//                   {menuItem.title}
//                 </Link>
//               </li>
//             ))}

//             <li className="nav-item donate d-none d-lg-block">
//               <Link to="/donate">DONATE NOW</Link>
//             </li>
//             <li className="mob-donate d-sm-block d-lg-none">
//               <Link className="nav-link" to="/donate">
//                 DONATE NOW
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   </header>
// );

// export default AppHeader;
