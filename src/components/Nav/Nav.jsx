/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./nav.css";
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FcGraduationCap } from "react-icons/fc";
import { MdOutlineHomeRepairService } from "react-icons/md";
import { BiMessageAltCheck } from "react-icons/bi";
import { useState } from "react";

const Nav = () => {
 const [activeNav, setActiveNav] = useState("#");
 return (
  <nav>
   <a
    href="#"
    onClick={() => setActiveNav("#")}
    className={activeNav === "#" ? "active" : ""}
   >
    <FaHome />
   </a>
   <a
    href="#about"
    onClick={() => setActiveNav("#about")}
    className={activeNav === "#about" ? "active" : ""}
   >
    <FaUserAlt />
   </a>
   <a
    href="#experience"
    onClick={() => setActiveNav("#experience")}
    className={activeNav === "#experience" ? "active" : ""}
   >
    <FcGraduationCap />
   </a>
   <a
    href="#services"
    onClick={() => setActiveNav("#services")}
    className={activeNav === "#services" ? "active" : ""}
   >
    <MdOutlineHomeRepairService />
   </a>
   <a
    href="#contact"
    onClick={() => setActiveNav("#contact")}
    className={activeNav === "#contact" ? "active" : ""}
   >
    <BiMessageAltCheck />
   </a>
  </nav>
 );
};

export default Nav;
