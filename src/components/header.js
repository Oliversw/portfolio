import React from "react"
import styled from "styled-components"

const HiddenH1 = styled.h1`
  position: absolute;
  left: 999999px;
  height: 1px;
  width: 1px;
`

const Header = () => (
  <header>
    <HiddenH1>Oliver Smith-Wellnitz, Software Developer</HiddenH1>
  </header>
)

export default Header
