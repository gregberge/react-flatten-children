import React from 'react'

function flattenChildren(children) {
  return React.Children.toArray(children).reduce((flatChildren, child) => {
    if (child.type === React.Fragment) {
      return flatChildren.concat(flattenChildren(child.props.children))
    }
    flatChildren.push(child)
    return flatChildren
  }, [])
}

export default flattenChildren
