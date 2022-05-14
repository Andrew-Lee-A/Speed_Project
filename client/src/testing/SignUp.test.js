import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@emotion/react'
import colorTheme from '../theme'
import SignUp from '../components/SignUp'

const MockSignUp = () => {
  return (
    <ThemeProvider theme={colorTheme}>
      <BrowserRouter>
        <SignUp testing={true} />
      </BrowserRouter>
    </ThemeProvider>
  )
}

describe('Signup info present and useable', () => {
  it('should render text stating username and can be typed in', async () => {
    render(<MockSignUp />)
    const username = screen.getByText('Username')
    expect(username).toBeInTheDocument()
    const input = screen.getByTestId('username-input')
    fireEvent.change(input, { target: { value: 'foo' } })
    expect(input.value).toBe('foo')
  })

  it('should render the text stating the password and can be typed in', async () => {
    render(<MockSignUp />)
    const password = screen.getByText('Password')
    expect(password).toBeInTheDocument()
    const input = screen.getByTestId('password-input')
    fireEvent.change(input, { target: { value: 'bar' } })
    expect(input.value).toBe('bar')
  })

  it('should render the text stating to confirm password and can be typed in', async () => {
    render(<MockSignUp />)
    const confirmedPassword = screen.getByText('Confirm Password')
    expect(confirmedPassword).toBeInTheDocument()
    const input = screen.getByTestId('confirm-password-input')
    fireEvent.change(input, { target: { value: 'bar' } })
    expect(input.value).toBe('bar')
  })
})
