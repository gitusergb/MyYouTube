import React from 'react'
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import { SearchBar } from "./";
const Navbar = () => {
  return (
    <Stack 
      direction="row" 
      alignItems="center" 
      p={2} 
      sx={
          { position:  "sticky", 
          background: '#000', 
          top: 0, 
          justifyContent: "space-between" ,
          color:"#fff"
          }
        }
     >

    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img 
      src={logo} 
      alt="logo"
      style={{
        height: '40px', 
        borderRadius:'10px',
        boxShadow:'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset'
      }}
        />
        <h2 style={
        {color:"#c67d23",
        marginLeft:"10px"
      }
        }>My_YouTube</h2>
    </Link>
    <SearchBar />
  </Stack>
  )
}

export default Navbar