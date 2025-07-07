import { createElement } from "react"

function Text({ as, text, children, ...props }) {
  return createElement(as, { ...props }, children ?? text);
}

export default Text
