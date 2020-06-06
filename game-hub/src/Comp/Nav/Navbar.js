import React from "react";

import NNotLogged from "./navType/NNotLogged";
import NLogged from "./navType/NLogged";

const Navbar = () => {
  
  if (localStorage.token === ""){
    return (
      <> 
      <NNotLogged/>
      </>
    )
  }else{
    return <> <NLogged/> </>
    }
  // return (
  //   <>
  //   </>
  // );
};

export default Navbar;
