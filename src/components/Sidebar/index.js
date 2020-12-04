import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarWrap,
  SidebarRoute
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      {/* <SidebarContainer> */}
      <Icon>
        <CloseIcon onClick={toggle} />
      </Icon>
      <SidebarMenu>
        <SidebarLink to="/">Pizzas</SidebarLink>
        <SidebarLink to="/">Deserts</SidebarLink>
        <SidebarLink to="/">Full Menu</SidebarLink>
      </SidebarMenu>
      <SidebarWrap>
        <SidebarRoute to="/">Order Now</SidebarRoute>
      </SidebarWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
