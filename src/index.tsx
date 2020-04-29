import * as React from "react";

type ReactChildArray = ReturnType<typeof React.Children.toArray>;

function flattenChildren(children: React.ReactNode): ReactChildArray {
  const childrenArray = React.Children.toArray(children);
  return childrenArray.reduce((flatChildren: ReactChildArray, child) => {
    if ((child as React.ReactElement<any>).type === React.Fragment) {
      return flatChildren.concat(
        flattenChildren((child as React.ReactElement<any>).props.children)
      );
    }
    flatChildren.push(child);
    return flatChildren;
  }, []);
}

export default flattenChildren;
