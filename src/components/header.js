import React from "react"
import styled from "styled-components"

const SiteHeader = styled.header`
  min-height: 100vh;
`

const SpanSlight = styled.span`
  color: var(--black);
  text-transform: lowercase;
  display: block;
  font-weight: 600;
  font-size: 1.8rem;
`

const Header = ({ siteTitle }) => (
  <SiteHeader>
      <h1><SpanSlight>Hi, I'm </SpanSlight>Oliver. <SpanSlight>and I'm a professional circus artist turned </SpanSlight>Software Developer</h1>
      <h2>Find out more:</h2>
  </SiteHeader>
)


export default Header
