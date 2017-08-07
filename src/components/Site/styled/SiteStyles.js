import styled from 'styled-components'
import * as theme from 'constants/theme'
import {linearGradient} from 'lib/tools'

export const SiteStyles = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${props => linearGradient(props.gradientAngle, theme.color.pink, theme.color.orange)};
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
    text-shadow: ${props => props.shadowAngle}px 7px 20px rgba(0, 0, 0, 0.25);
  }
  h2 {
    width: 100%;
    margin: 0 0;
    font-family: ${theme.font.family.header};
    font-size: 5em;
    font-weight: ${theme.font.weight.regular};
    text-align: center;
    text-shadow: ${props => props.shadowAngle}px 7px 20px rgba(0, 0, 0, 0.25);
  }
  h3 {
    width: 100%;
    margin: 0.4em 0;
    font-family: ${theme.font.family.header};
    font-size: 1.75em;
    font-weight: ${theme.font.weight.book};
    text-align: center;
  }
  h4 {
    width: 100%;
    margin: 0.3em 0;
    font-family: ${theme.font.family.regular};
    font-size: 1.25em;
    font-weight: ${theme.font.weight.bold};
    text-align: center;
  }
`
