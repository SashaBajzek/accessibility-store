import "./VisuallyHidden.css";

import * as React from "react";

/**
 * Content that is only visible to a screen reader. This should be used for
 * giving context to content that can be inferred by sighted users. For
 * example, giving a group of items a heading that can be quickly navigated
 * to, but does not have a visual treatment to keep the UI uncluttered.
 */
export const VisuallyHidden: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <div className="VisuallyHidden" role="presentation">
      {children}
    </div>
  );
};
