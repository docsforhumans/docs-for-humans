import styled from 'styled-components'
import theme from 'constants/theme'

export const SiteStyles = styled.div`
  color: ${theme.colors.purple};
  background-color: ${theme.backgroundColor};
  font-family: ${theme.fontFamily};
  font-weight: ${theme.fontLight};
  font-size: ${theme.defaultFontSize};
  line-height: ${theme.defaultLineHeight};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  h1 {
    width: 100%;
    margin: 0.5em 0;
    font-family: ${theme.headerFontFamily};
    font-size: 2.1em;
    font-weight: ${theme.fontBook};
    text-align: center;
  }
  h2 {
    width: 100%;
    margin: 0.4em 0;
    font-family: ${theme.headerFontFamily};
    font-size: 1.75em;
    font-weight: ${theme.fontBook};
    text-align: center;
  }
  h3 {
    width: 100%;
    margin: 0.3em 0;
    font-family: ${theme.fontFamily};
    font-size: 1.25em;
    font-weight: ${theme.fontBold};
    text-align: center;
  }
  h4 {
    width: 100%;
    margin: 0.25em 0;
    font-family: ${theme.fontFamily};
    font-size: 1em;
    font-weight: ${theme.fontBold};
    text-align: center;
  }
  p {
    font-family: ${theme.fontFamily};
    font-size: 0.9em;
    font-weight: ${theme.fontBook};
  }
  a {
    text-decoration: none;
  }
  .row {
    margin-right: 0;
    margin-left: 0;
  }
`
