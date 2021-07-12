import React, { useRef, useContext, useEffect } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { motion, useAnimation } from "framer-motion"

import { useOnScreen } from "../../hooks/"
import Context from "../../context/"
import ContentWrapper from "../../styles/contentWrapper"

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%
    max-height: 30rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap:wrap;
    margin-top: 5rem;
    margin-bottom: 5rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
      flex-direction: row;
      justify-content: space-between;
      align-items: start;
    }
    .section-title {
      margin-bottom: 1rem;
      color: #fff;
    }
    .inner-wrapper {
      width: 49%;
      min-height:28rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: #17141d;
      border-radius: ${({ theme }) => theme.borderRadius};
      color: #fff;
      z-index: 3;
      padding: 3rem;
      margin-top:1rem;
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width:100%;
        padding:1.5rem;
      }
      &:hover {
        transform: translate3d(0px, -0.125rem, 0px);
        box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.32);
      }
    }
    .text-content {
      width: 100%;
  
    }
    .image-content {
      width: 49%;
      margin-top:1rem;
      margin-left: 0;

      .about-author {
        overflow:hidden;
        height:28rem;
        max-width: 100%;
        border-radius: ${({ theme }) => theme.borderRadius};
        box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.16);
        filter: grayscale(20%) contrast(1) brightness(90%);
        transition: all 0.3s ease-out;
        &:hover {
          filter: grayscale(50%) contrast(1) brightness(90%);
          transform: translate3d(0px, -0.125rem, 0px);
          box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.32);
        }
      }
    
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        height:25rem;
        width:100%;
        margin-bottom:3rem;
      }
    }

    
  }
`
const About = ({ content }) => {
  const { frontmatter, body } = content[0].node
  const { isIntroDone } = useContext(Context).state
  const tControls = useAnimation()
  const iControls = useAnimation()

  // Required for animating the text content
  const tRef = useRef()
  const tOnScreen = useOnScreen(tRef)

  // Required for animating the image
  const iRef = useRef()
  const iOnScreen = useOnScreen(iRef)

  // Only trigger animations if the intro is done or disabled
  useEffect(() => {
    if (isIntroDone) {
      if (tOnScreen) tControls.start({ opacity: 1, y: 0 })
      if (iOnScreen) iControls.start({ opacity: 1, x: 0 })
    }
  }, [isIntroDone, tControls, iControls, tOnScreen, iOnScreen])

  return (
    <StyledSection id="about">
      <StyledContentWrapper>
        <div
          className="inner-wrapper"
          ref={tRef}
          initial={{ opacity: 0, y: 20 }}
          animate={tControls}
        >
          <h3 className="section-title">{frontmatter.title}</h3>
          <div className="text-content">
            <MDXRenderer>{body}</MDXRenderer>
          </div>
        </div>
        {frontmatter.images.map((img, idx) => (
          <div className="image-content" key={idx}>
            <Img className="about-author" fluid={img.childImageSharp.fluid} />
          </div>
        ))}
      </StyledContentWrapper>
    </StyledSection>
  )
}

About.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        body: PropTypes.string.isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default About
