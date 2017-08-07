import styled from 'styled-components'
import * as theme from 'constants/theme'

export const SiteStyles = styled.div`
  width: 100vw;
  height: 100vh;
  color: ${theme.color.neutral};
  font-family: ${theme.font.family.regular};
  font-weight: ${theme.font.weight.regular};
  font-size: ${theme.font.size};
  line-height: ${theme.font.lineHeight};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  h1 {
    width: 100%;
    margin: 0 0;
    font-family: ${theme.font.family.regular};
    font-size: 5em;
    font-weight: ${theme.font.weight.bold};
    text-align: center;
  }
  h2 {
    width: 100%;
    margin: 0 0;
    font-family: ${theme.font.family.header};
    font-size: 5em;
    font-weight: ${theme.font.weight.regular};
    text-align: center;
  }
  h3 {
    width: 100%;
    margin: 0.3em 0;
    font-family: ${theme.font.family.header};
    font-size: 1.25em;
    font-weight: ${theme.font.weight.bold};
    text-align: center;
  }
  h4 {
    width: 100%;
    margin: 0.3em 0;
    font-family: ${theme.font.family.regular};
    font-size: 1.25em;
    font-weight: ${theme.font.weight.book};
    text-align: center;
  }
  p {
    padding: 0 1em;
    text-align: center;
  }
`
