// import dependencies
import React from 'react'

// import react-testing methods
import { render } from '@testing-library/react'

// add custom jest matchers from jest-dom

// the component to test
import Header from '../header'

describe('<Header />', () => {
  test('Displays the correct site title', () => {
    // Arrange
    const siteTitle = 'Costa Codes'
    const { getByTestId } = render(<Header siteTitle={siteTitle} />)

    // Act

    // Assert
    expect(getByTestId('site-title')).toHaveTextContent(siteTitle)
  })
})
