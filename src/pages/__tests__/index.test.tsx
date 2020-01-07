// import dependencies
import React from 'react'

// import react-testing methods
import { render } from '@testing-library/react'

// add custom jest matchers from jest-dom

// the component to test
import Index from '../index'
import { StaticQuery } from 'gatsby'

// things to do before
beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `Default Starter`
        }
      }
    })
  )
})

describe('<Index />', () => {
  it('Renders correctly', () => {
    const tree = render.create(<Index />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('Displays at least one intro paragraph', () => {
    // Arrange
    const { getByTestId } = render(<Index />)

    // Act

    // Assert
    expect(getByTestId('site-title')).toHaveTextContent(siteTitle)
  })
})
