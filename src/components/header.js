import React from "react"
import styled from "styled-components"
import ChevronDown from "../svg/chevronDown.svg"

const SiteHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
`

const SpanSlight = styled.span`
  color: var(--black);
  text-transform: lowercase;
  display: block;
  font-weight: 600;
  font-size: 1.8rem;
`

const Cap = styled.span`
  text-transform: uppercase;
`

const Button = styled.button`
  background: none;
  border: none;
  border-radius: 25rem;
  outline: none;
  width: 4rem;
  height: 4rem;
  padding: inherit;
`

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <h1>
      <SpanSlight>
        <Cap>H</Cap>i, I'm{" "}
      </SpanSlight>
      Oliver.{" "}
      <SpanSlight>and I'm a professional circus artist turned </SpanSlight>
      Software Developer
    </h1>
    <h2>Find out more:</h2>
    <Button>
      <img src={ChevronDown} />
    </Button>
  </SiteHeader>
)

export default Header
