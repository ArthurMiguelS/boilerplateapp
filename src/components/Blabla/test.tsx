import { render, screen } from '@testing-library/react'

import Blabla from '.'

describe('<Blabla />', () => {
  it('should render the heading', () => {
    const { container } = render(<Blabla />)

    expect(screen.getByRole('heading', { name: /Blabla/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
