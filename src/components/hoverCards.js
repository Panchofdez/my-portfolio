import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "../styles/hoverCards.css"
import ContentWrapper from "../styles/contentWrapper"

// Full Width Section
const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
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
const StyledProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #fff;
`

// Add more styled components here

const HoverCards = ({ content }) => {
  // Extract GraphQL data here
  const sectionDetails = content[0].node

  return (
    <StyledSection id="___SectionHashId___">
      <StyledContentWrapper>
        {/* ____SectionContent____ */}
        <StyledProjectContainer>
          <div className="card first">
            <div className="card-author">
              <footer className="card-header ">
                <h1>Personal Projects</h1>
              </footer>
            </div>
          </div>
          <section className="card-list">
            <article className="card">
              <header className="card-header">
                <p>April 21th 2021</p>
                <h2>Never forget</h2>
              </header>
              <div className="card-author">
                <a className="author-avatar" href="#">
                  <img src="https://avatars.githubusercontent.com/u/61791716?v=4" />
                </a>
                <svg className="half-circle" viewBox="0 0 106 57">
                  <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
                </svg>

                <div className="author-name">
                  <div className="author-name-prefix">Author</div>
                  Anmol Raj
                </div>
              </div>
              <div className="tags">
                <a href="#">html</a>
                <a href="#">css</a>
                <a href="#">web-dev</a>
              </div>
            </article>
            <article className="card">
              <header className="card-header">
                <p>Web Application</p>
                <h2>Creativ</h2>
                <p>
                  A quick and easy way to create a portfolio/visual resume for
                  creative professionals
                </p>
              </header>

              <div className="tags">
                <a href="#">html</a>
                <a href="#">css</a>
              </div>
            </article>

            <article className="card">
              <header className="card-header">
                <p>Mobile Application</p>
                <h2>PiggiBank</h2>
                <p>
                  A friendly budgeting app with a clean and uncluttered
                  interface that will help you save money.
                </p>
              </header>

              <div className="tags">
                <a href="#">html</a>
                <a href="#">css</a>
              </div>
            </article>

            <article className="card">
              <header className="card-header">
                <p>Mobile Application</p>
                <h2>Tavos</h2>
                <p>A planner that optimizes your time</p>
              </header>

              <div className="tags">
                <a href="#">html</a>
                <a href="#">css</a>
              </div>
            </article>
          </section>
        </StyledProjectContainer>
      </StyledContentWrapper>
    </StyledSection>
  )
}

HoverCards.propTypes = {
  content: PropTypes.any.isRequired,
}

export default HoverCards
