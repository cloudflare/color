import React from "react"
import theme from "../theme"

const DashboardNav = ({ activeLink, ...props }) => {
  return (
    <Flex
      width={1}
      py={3}
      borderBottom="1px solid"
      borderColor="gray.8"
      style={{
        overflowX: "auto",
        boxSizing: "border-box"
      }}
      {...props}
    >
      <NavIcon
        href="/"
        color={activeLink === "home" ? "gray.0" : "gray.3"}
        mx={[2, 2, 3]}
        type="clipboard"
        text="Home"
      />
      <NavIcon
        color={activeLink === "analytics" ? "gray.0" : "gray.3"}
        mx={[2, 2, 3]}
        type="analytics"
        text="Analytics"
      />
      <NavIcon
        color={activeLink === "dns" ? "gray.0" : "gray.3"}
        mx={[2, 2, 3]}
        type="dns"
        text="DNS"
      />
      <NavIcon
        color={activeLink === "crypto" ? "gray.0" : "gray.3"}
        mx={[2, 2, 3]}
        type="crypto"
        text="Crypto"
      />
      <NavIcon
        color={activeLink === "firewall" ? "gray.0" : "gray.3"}
        mx={[2, 2, 3]}
        type="firewall"
        text="Firewall"
      />
      <NavIcon
        color={activeLink === "access" ? "gray.0" : "gray.3"}
        mx={[2, 2, 3]}
        type="access"
        text="Access"
      />
      <NavIcon
        color={activeLink === "speed" ? "gray.0" : "gray.3"}
        mx={[2, 2, 3]}
        type="speed"
        text="Speed"
      />
      <NavIcon
        color={activeLink === "caching" ? "gray.0" : "gray.3"}
        mx={[2, 2, 3]}
        type="caching"
        text="Caching"
      />
      <NavIcon
        color={activeLink === "workers" ? "gray.0" : "gray.3"}
        mx={[2, 2, 3]}
        type="workers"
        text="Workers"
      />
      <NavIcon
        color={activeLink === "pagerules" ? "gray.0" : "gray.3"}
        mx={[2, 2, 3]}
        type="pagerules"
        text="Page Rules"
      />
      <NavIcon
        color={activeLink === "network" ? "gray.0" : "gray.3"}
        mx={[2, 2, 3]}
        type="network"
        text="Network"
      />
      <NavIcon
        color={activeLink === "traffic" ? "gray.0" : "gray.3"}
        mx={[2, 2, 3]}
        type="traffic"
        text="Traffic"
      />
      <NavIcon
        color={activeLink === "stream" ? "gray.0" : "gray.3"}
        mx={[2, 2, 3]}
        type="stream"
        text="Stream"
      />
      <NavIcon
        color={activeLink === "apps" ? "gray.0" : "gray.3"}
        mx={[2, 2, 3]}
        type="apps"
        text="Apps"
      />
    </Flex>
  )
}

DashboardNav.defaultProps = {
  justifyContent: "center",
  activeLink: "crypto"
}

export default DashboardNav
