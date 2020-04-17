import React from 'react'

function flattenChildren(children, all) {
  return React.Children.toArray(children).reduce((flatChildren, child) => {
    if (child.type === React.Fragment || (all && child && child.props && child.props.children)) {
      return flatChildren.concat(flattenChildren(child.props.children))
    }
    flatChildren.push(child)
    return flatChildren
  }, [])
}

export default flattenChildren
