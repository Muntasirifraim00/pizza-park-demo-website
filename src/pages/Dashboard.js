import React, { useState } from "react";
import Cart from "./Cart.js";


const Dashboard = () => {
  // const [current, setCurrent] = useState("Profile");
 

  return (
    <div>
      {(<Cart></Cart>)}
    </div>
  );
};

export default Dashboard;
