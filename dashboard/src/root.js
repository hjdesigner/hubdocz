import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { CategoryProvider, ArticleProvider } from 'context';
import theme from 'utils/theme';
import App from './App'


function Root () {
  return (
    <ThemeProvider theme={theme}>
      <CategoryProvider>
        <ArticleProvider>
          <BrowserRouter>
            <GlobalStyle />
            <Route component={App} />
          </BrowserRouter>
        </ArticleProvider>
      </CategoryProvider>
    </ThemeProvider>
    
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  body,
  html,
  #root {
    font-family: 'Open Sans', sans-serif;
    font-size: 10px;
    display: flex;
    width: 100%;
    height: 100%;
  }
`
export default Root;