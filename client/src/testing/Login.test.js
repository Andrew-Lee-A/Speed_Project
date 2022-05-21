import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import colorTheme from '../theme'
import Login from '../components/Login'

const MockLogin = () => {
  return (
    <ThemeProvider theme={colorTheme}>
      <BrowserRouter>
        <Login testing={true} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

describe('Login info present and useable', () => {
  it('should render text stating username and can be typed in', async () => {
    render(<MockLogin />)
    const username = screen.getByText('Username')
    expect(username).toBeInTheDocument()
    const input = screen.getByTestId('username-input')
    fireEvent.change(input, { target: { value: 'foo' } })
    expect(input.value).toBe('foo')
  })

  it('should render the text stating the password and can be typed in', async () => {
    render(<MockLogin />)
    const password = screen.getByText('Password')
    expect(password).toBeInTheDocument()
    const input = screen.getByTestId('password-input')
    fireEvent.change(input, { target: { value: 'bar' } })
    expect(input.value).toBe('bar')
  })
})
