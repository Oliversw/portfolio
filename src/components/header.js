import React from "react"
import styled from "styled-components"
import ChevronDown from "../svg/chevronDown.svg"

const SiteHeader = styled.header`
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
`

const HiddenH1 = styled.h1`
  position: absolute;
  left: 999999px;
  height: 1px;
  width: 1px;
`

const TextWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`

const P = styled.p`
  font-size: 1.8rem;
  /* color: var(--black); */
  font-weight: 600;
  color: ${props => (props.primary ? "var(--primary)" : "var(--black)")};
  margin: 1rem 0 1rem 0;
  width: ${props => (props.short ? "10rem" : "auto")};
`

const SpanEmphasis = styled.span`
  color: var(--primary);
  text-transform: uppercase;
  display: block;
  font-weight: 600;
  font-size: 2.7rem;
  letter-spacing: 0.4rem;
`

const Button = styled.button`
  background: none;
  border: none;
  outline: none;
  padding: inherit;
  display: flex;
  flex-flow: column nowrap;
  justify-content: left;
`

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <HiddenH1>Oliver Smith-Wellnitz, Software Developer</HiddenH1>

    <TextWrapper>
      <P>
        Hi, I'm <SpanEmphasis>Oliver.</SpanEmphasis>
      </P>
      <P short>and I'm a professional circus artist turned</P>
      <P>
        <SpanEmphasis>Software Developer</SpanEmphasis>
      </P>
    </TextWrapper>

    <Button>
      <P primary>Find out more:</P>
      <img src={ChevronDown} />
    </Button>
  </SiteHeader>
)

export default Header
