import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"

const Portal = ({ children }) => {
  const [domNode, setDomNode] = useState()
  useEffect(() => setDomNode(document.querySelector("#modal")))

  if (domNode === undefined) {
    return null
  }

  return ReactDOM.createPortal(children, domNode)
}

export default Portal
