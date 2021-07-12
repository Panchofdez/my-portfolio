import styled from "styled-components"

const ContentWrapper = styled.div`
  max-width: ${({ theme }) => theme.pageWidth};
  margin: 0 auto;
  padding: 0 2.5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    max-width: ${({ theme }) => theme.pageWidthSmall};
    padding: 0 1rem;
  }
`
export default ContentWrapper
