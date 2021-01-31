import { render } from '@redwoodjs/testing'

import SwipingPage from './SwipingPage'

describe('SwipingPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SwipingPage />)
    }).not.toThrow()
  })
})
