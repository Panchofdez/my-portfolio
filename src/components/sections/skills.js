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
`

// Add more styled components here

const Skills = ({ content }) => {
  // Extract GraphQL data here
  const sectionDetails = content[0].node
  const { frontmatter, exports } = sectionDetails
  return (
    <StyledSection id="___SectionHashId___">
      <StyledContentWrapper>
        {/* ____SectionContent____ */}
        <StyledProjectContainer>
          <div className="card first">
            <div className="card-author">
              <footer className="card-header ">
                <h1>{frontmatter.title}</h1>
              </footer>
            </div>
          </div>
          <section className="card-list">
            {exports.interests.map((interest, idx) => (
              <article className="card" key={idx}>
                <header className="card-header">
                  <h2>{interest.name}</h2>
                  <p>{interest.description}</p>
                </header>
                <div className="tags">
                  {interest.technologies.map((tech, idx) => (
                    <a href="#" key={idx}>
                      {tech}
                    </a>
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
