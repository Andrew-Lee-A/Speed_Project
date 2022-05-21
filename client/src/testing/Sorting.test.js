import React from 'react'
import {render, screen} from '@testing-library/react'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import colorTheme from '../theme'
import Input from '../components/component-controller/Input'
import ArticleTable from '../components/ArticleTable'
import { expectCt } from 'helmet'

const MockInput = () => {
    return (
        <ThemeProvider theme={colorTheme}>
            <BrowserRouter>
                <ArticleTable>

                </ArticleTable>
            </BrowserRouter>
        </ThemeProvider>
    )
}

test('should render text of the ascending DOI\'s', ()=> {
    render(<MockInput/>)
    const arrayOfDOIs = []
    expectCt(arrayOfDOIs)
})