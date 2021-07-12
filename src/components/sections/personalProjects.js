import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import ContentWrapper from "../../styles/contentWrapper"
import Underlining from "../../styles/underlining"
import Img from "gatsby-image"
import Icon from "../../components/icons"
import { lightTheme, darkTheme } from "../../styles/theme"
import Tilt from "react-parallax-tilt"
import Button from "../../styles/button"

// Full Width Section
const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 6rem;
  .btn {
    display: block;
    text-align: center;
    margin: 2rem auto;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin: 0 auto;
    }
  }
`

// Fixed width container for content stuff
const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`
const StyledProjectDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
  color: #fff;
  overflow-x: scroll;
  overflow-y: hidden;
  padding-top: 3rem;
  padding-bottom: 1.5rem;
  padding-left: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    margin: 0;
  }
  ::-webkit-scrollbar {
    width: 30rem;
    height: 0.5rem;
  }
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to right, #cdf3e1, #10422a);
    border-radius: 10px;
    box-shadow: inset 2px 2px 2px hsla(0, 0%, 100%, 0.25),
      inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.background};
  }
  .card {
    background: #17141d;
    height: 100%;
    width: 100%;
    flex: 1;
    min-width: 20rem;
    min-height: 30rem;
    display: flex;
    flex-direction: column;
    margin-top: 0;
    margin-right: 2rem;

    .category {
      font-size: 0.875rem;
      line-height: 1rem;
      text-transform: uppercase;
      letter-spacing: +1px;
    }
    .title {
      margin-top: 0.625rem;
      margin-bottom: 0.625rem;
      font-size: 1.375rem;
      line-height: 1.625rem;
      font-weight: 700;
    }
    .tags {
      display: flex;
      flex-wrap: wrap;
      margin-top: 1.5rem;
      line-height: 1.2rem;
      span {
        margin-right: 1rem;
        margin-bottom: 1rem;
      }
    }
    .links {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      margin-top: 1rem;
      a {
        display: inline-block;
        margin-right: 2rem;
      }
      svg {
        width: 1.3rem;
        height: 1.3rem;
        transition: all 0.3s ease-out;
      }
      svg:hover {
        fill: ${({ theme }) => theme.colors.secondary};
      }
    }
  }
  .card-image {
    background: ${({ theme }) => theme.colors.background};
    flex: 1;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    margin-right: 2rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-top: 0;
    }
    .screenshot {
      object-fit: cover;
      flex: 1;
      height: 30rem;
      min-width: 20rem;
      border-radius: ${({ theme }) => theme.borderRadius};
      box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.16);
      transition: all 0.3s ease-out;
      &:hover {
        transform: translate3d(0px, -0.125rem, 0px);
        box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.32);
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        height: 30rem;
        width: 20rem;
      }
    }
  }
  .card-image-pc {
    background: white;
    flex: 1;
    max-height: 25rem;
    min-width: 25rem;
    display: flex;
    flex-direction: column;
    margin-right: 2rem;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      margin-top: 0;
    }
    .screenshot {
      object-fit: cover;
      flex: 1;
      width: 100%;
      height: 100%;
      border-radius: ${({ theme }) => theme.borderRadius};
      box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.16);
      transition: all 0.3s ease-out;
      &:hover {
        transform: translate3d(0px, -0.125rem, 0px);
        box-shadow: 0 0 2.5rem rgba(0, 0, 0, 0.32);
      }
      @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      }
    }
  }
`

const StyledProjectCard = styled.div``

// Add more styled components here

const PersonalProjects = ({ content }) => {
  // Extract GraphQL data here
  const sectionDetails = content[0].node
  const projects = content.slice(1, content.length)
  return (
    <StyledSection id="___SectionHashId___">
      <StyledContentWrapper>
        <h2 style={{ marginBottom: 1 }}>Personal Projects</h2>
        {/* ____SectionContent____ */}
        {projects.map((project, key) => {
          const { body, frontmatter } = project.node
          return (
            <StyledProjectDetails key={key}>
              <div className="card">
                <div className="category">
                  {frontmatter.emoji} {frontmatter.category}
                </div>
                <div className="title">{frontmatter.title}</div>
                <MDXRenderer>{body}</MDXRenderer>
                <div className="tags">
                  {frontmatter.tags.map(tag => (
                    <Underlining key={tag} highlight>
                      {tag}
                    </Underlining>
                  ))}
                </div>
                <div className="links">
                  {frontmatter.github && (
                    <a
                      href={frontmatter.github}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label="External Link"
                    >
                      <Icon name="github" color={lightTheme.colors.subtext} />
                    </a>
                  )}
                  {frontmatter.external && (
                    <a
                      href={frontmatter.external}
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      aria-label="External Link"
                    >
                      <Icon name="external" color={lightTheme.colors.subtext} />
                    </a>
                  )}
                </div>
              </div>
              {frontmatter.screenshots.map((image, idx) => (
                <div className="card-image" key={idx}>
                  <Tilt>
                    <Img
                      className="screenshot"
                      fluid={image.childImageSharp.fluid}
                    />
                  </Tilt>
                </div>
              ))}
            </StyledProjectDetails>
          )
        })}
      </StyledContentWrapper>
      {sectionDetails.frontmatter.buttonVisible && (
        <div
          style={{
            justifyContent: "center",
            display: "flex",
            flexDirection: "row",
            marginTop: "2rem",
          }}
        >
          <a
            href={sectionDetails.frontmatter.buttonUrl}
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="External Link"
          >
            <Button className="btn" type="button" textAlign="center" center>
              {sectionDetails.frontmatter.buttonText}
            </Button>
          </a>
        </div>
      )}
    </StyledSection>
  )
}

PersonalProjects.propTypes = {
  content: PropTypes.any.isRequired,
}

export default PersonalProjects
