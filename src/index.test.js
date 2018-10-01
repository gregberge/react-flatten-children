import React from 'react'
import flattenChildren from '.'

const getChildren = element => element.props.children
const getTypes = children => React.Children.map(children, child => child.type)

describe('flattenChildren', () => {
  it('should convert child to array', () => {
    const children = getChildren(<>Hello</>)
    expect(flattenChildren(children)).toEqual(React.Children.toArray(children))
  })

  it('should convert children to array', () => {
    const children = getChildren(
      <>
        <a />
        <b />
      </>,
    )
    expect(flattenChildren(children)).toEqual(React.Children.toArray(children))
  })

  it('should flatten fragments', () => {
    const input = getChildren(
      <>
        <>
          <a />
          <b />
        </>
        <>
          <c />
        </>
        <d />
      </>,
    )
    expect(getTypes(flattenChildren(input))).toEqual(['a', 'b', 'c', 'd'])
  })

  it('should flatten nested fragments', () => {
    const input = getChildren(
      <>
        <>
          <a />
          <b />
        </>
        <>
          <c />
          <>
            <d />
            <e />
            <>
              <f />
            </>
          </>
        </>
        <g />
      </>,
    )
    expect(getTypes(flattenChildren(input))).toEqual([
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
    ])
  })
})
