import React from 'react';
import '../component/Contacts';
function Header(){ 
    return( 
<div className="header">
   <i className=" phone fa fa-phone" aria-hidden="true"></i>
  <div className="logo">
     <h3><span className="yellow">P</span><span className="black">BM</span></h3>
    <i className=" dot-yellow fas fa-ellipsis-h"></i>
     </div>
   
     <div className="right">
  <i className=" contact fas fa-address-book "></i>
     <span>Admin Admin</span>
     <i className="angle fas fa-angle-down"></i>
     </div>
   
   </div>
    )
}
export default Header;