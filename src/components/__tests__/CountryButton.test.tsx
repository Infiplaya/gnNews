import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import CountryButton from "../CountryButton"

test('renders CountryButton component', () => {
    const country = {
      name: 'India',
      code: 'IN',
    }
    render(
      <MemoryRouter>
        <CountryButton country={country} />
      </MemoryRouter>
    )
  
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('href', '/country/in')
  
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveStyle({
      textAlign: 'left',
      display: 'flex',
    })
  
    const imageElement = screen.getByRole('img')
    expect(imageElement).toHaveAttribute(
      'src',
      'https://flagsapi.com/IN/flat/16.png'
    )
  
    const textElement = screen.getByText('India')
    expect(textElement).toBeInTheDocument()
  })
  
  
  
  
  