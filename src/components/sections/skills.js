import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "../../styles/hoverCards.css"
import ContentWrapper from "../../styles/contentWrapper"

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
  margin-top: 2rem;
  margin-bottom: 2rem;

  .card-list {
    display: flex;
    padding: 1rem;
    overflow-x: hidden;
    overflow-y: hidden;
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      overflow-x: scroll;
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
  }
`

const Skills = ({ content }) => {
  // Extract GraphQL data here
  const sectionDetails = content[0].node
  const { frontmatter, exports } = sectionDetails
  return (
    <StyledSection id="skills">
      <StyledContentWrapper>
        {/* ____SectionContent____ */}
        <StyledProjectContainer>
          <section className="card-list">
            <article className="card first">
              <div className="card-author">
                <footer className="card-header ">
                  <h1>{frontmatter.title}</h1>
                </footer>
              </div>
            </article>
            {exports.interests.map((interest, idx) => (
              <article className="card" key={idx}>
                <header className="card-header">
                  <h2>{interest.name}</h2>
                  <p>{interest.description}</p>
                </header>
                <div className="tags">
                  {interest.technologies.map((tech, idx) => (
                    <a key={idx}>{tech}</a>
                  ))}
                </div>
              </article>
            ))}
          </section>
        </StyledProjectContainer>
      </StyledContentWrapper>
    </StyledSection>
  )
}

Skills.propTypes = {
  content: PropTypes.any.isRequired,
}

export default Skills
