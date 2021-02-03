import React from "react"
import styled from "styled-components"

const MenuContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  padding: 1rem 1rem 1rem 0;
`

const MenuButton = styled.button`
  background: none;
  outline: none;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in;
  position: relative;
  font-weight: 600;
  letter-spacing: 0.2rem;
  font-family: "Roboto Condensed", sans-serif;
  font-size: 1.5rem;

  ::before,
  ::after {
    content: "";
    position: absolute;
    left: 0.7rem;
    display: block;
    width: 70%;
    height: 3px;
    background-color: black;
    transition: transform 0.3s ease-in;
  }

  ::before {
    /* transform: translateY(0.5rem); */
    /* top: 0.5rem; */
    top: 0;
  }
  ::after {
    /* transform: translateY(-0.5rem); */
    bottom: 0;
    /* bottom: 0.5rem; */
  }
`

const Burger = () => {
  return (
    <MenuContainer>
      <MenuButton>Menu</MenuButton>
    </MenuContainer>
  )
}

export default Burger
