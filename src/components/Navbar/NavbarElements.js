import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaPizzaSlice } from "react-icons/fa";

export const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: center;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  background-color: transparent;

  @media screen and (max-width: 300px) {
    position: absolute;
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  background-color: transparent;

  p {
    transform: translate(-175%, 130%);
    font-weight: bold;
    background-color: transparent;
    @media screen and (max-width: 450px) {
      display: none;
    }
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  transform: translate(-50%, 10%);
  background-color: transparent;
  @media screen and (max-width: 450px) {
    transform: translate(-80%, 80%);
  }
`;
