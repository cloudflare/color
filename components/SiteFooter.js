import React from "react"
import data from "../data"

import withVariations from "../utils/withVariations"

const SocialIcons = withVariations(({ variant, ...props }) => {
  switch (variant) {
    case 1:
      return (
        <Flex mx={-3} {...props}>
          <Div px={3}>
            <Icon color="blue.4" width={24} type="twitter" />
          </Div>
          <Div px={3}>
            <Icon width={24} color="blue.4" type="facebook" />
          </Div>
          <Div px={3}>
            <Icon width={24} color="blue.4" type="google" />
          </Div>
          <Div px={3}>
            <Icon width={24} color="blue.4" type="linkedin" />
          </Div>
        </Flex>
      )
    case 2:
      return (
        <Flex mx={-3} {...props}>
          <Div px={[2, 3]}>
            <Icon width={24} color="blue.4" type="facebook" />
          </Div>
          <Div px={[2, 3]}>
            <Icon width={24} color="blue.4" type="linkedin" />
          </Div>
          <Div px={[2, 3]}>
            <Icon color="blue.4" width={24} type="twitter" />
          </Div>
        </Flex>
      )
  }
}, 2)

const SiteFooter = ({ variant, ...props }) => {
  switch (variant) {
    case 1:
      return (
        <Footer borderTop="1px solid" color="gray.9" px={5} py={5} {...props}>
          <Flex
            color="gray.2"
            alignItems="flex-start"
            flexWrap="wrap"
            fontSize={2}
          >
            <Div mt={4} lineHeight={1.5} px={3} width={[1 / 2, 1 / 4, 1 / 6]}>
              <A
                py={1}
                display="block"
                fontSize={3}
                href="#"
                fontWeight={700}
                children="Analytics"
              />
              <A py={1} display="block" href="#" children="Traffic" />
              <A
                py={1}
                display="block"
                href="#"
                children="Origin Performance"
              />
              <A py={1} display="block" href="#" children="Rate Limiting" />
              <A py={1} display="block" href="#" children="DNS Traffic" />
              <A py={1} display="block" href="#" children="Geography" />
              <A py={1} display="block" href="#" children="Performance" />
              <A py={1} display="block" href="#" children="Security" />
            </Div>
            <Div mt={4} lineHeight={1.5} px={3} width={[1 / 2, 1 / 4, 1 / 6]}>
              <A
                py={1}
                display="block"
                href="#"
                fontWeight={700}
                children="DNS"
                fontSize={3}
              />
              <A py={1} display="block" href="#" children="Records" />
              <A py={1} display="block" href="#" children="Nameservers" />
              <A py={1} display="block" href="#" children="DNSSEC" />
              <A py={1} display="block" href="#" children="CNAME Flattening" />
            </Div>
            <Div mt={4} lineHeight={1.5} px={3} width={[1 / 2, 1 / 4, 1 / 6]}>
              <A
                py={1}
                display="block"
                href="#"
                fontWeight={700}
                fontSize={3}
                children="Crypto"
              />
              <A py={1} display="block" href="#" children="SSL" />
              <A py={1} display="block" href="#" children="Edge Certificates" />
              <A py={1} display="block" href="#" children="Custom Hostnames" />
              <A
                py={1}
                display="block"
                href="#"
                children="Origin Certificates"
              />
              <A py={1} display="block" href="#" children="Always Use HTTPS" />
              <A py={1} display="block" href="#" children="HSTS" />
              <A
                py={1}
                display="block"
                href="#"
                children="Authenticated Origin Pulls"
              />
              <A
                py={1}
                display="block"
                href="#"
                children="Minimum TLS Version"
              />
              <A
                py={1}
                display="block"
                href="#"
                children="Opportunistic Encryption"
              />
              <A py={1} display="block" href="#" children="TLS 1.3" />
              <A
                py={1}
                display="block"
                href="#"
                children="Automatic HTTPS Rewrites"
              />
              <A
                py={1}
                display="block"
                href="#"
                children="Disable Universal SSL"
              />
            </Div>
            <Div mt={4} lineHeight={1.5} px={3} width={[1 / 2, 1 / 4, 1 / 6]}>
              <A
                py={1}
                display="block"
                href="#"
                fontWeight={700}
                children="Firewall"
                fontSize={3}
              />
              <A py={1} display="block" href="#" children="Rate Limiting" />
              <A py={1} display="block" href="#" children="Security Level" />
              <A py={1} display="block" href="#" children="Challenge Passage" />
              <A py={1} display="block" href="#" children="IP Firewall" />
              <A
                py={1}
                display="block"
                href="#"
                children="Web Application Firewall"
              />
              <A
                py={1}
                display="block"
                href="#"
                children="User Agent Blocking"
              />
              <A py={1} display="block" href="#" children="Zone Lockdown" />
              <A
                py={1}
                display="block"
                href="#"
                children="Unmetered DDos Mitigation"
              />
              <A py={1} display="block" href="#" children="Firewall Events" />
            </Div>
            <Div mt={4} lineHeight={1.5} px={3} width={[1 / 2, 1 / 4, 1 / 6]}>
              <A
                py={1}
                display="block"
                fontSize={3}
                href="#"
                fontWeight={700}
                children="Speed"
              />
              <A py={1} display="block" href="#" children="Auto Minify" />
              <A py={1} display="block" href="#" children="Polish" />
              <A py={1} display="block" href="#" children="Railgun" />
              <A
                py={1}
                display="block"
                href="#"
                children="Accelerated Mobile Links"
              />
              <A py={1} display="block" href="#" children="Brotli" />
              <A py={1} display="block" href="#" children="Mirage" />
              <A py={1} display="block" href="#" children="Rocket Loader" />
              <A py={1} display="block" href="#" children="Mobile Rederict" />
              <A py={1} display="block" href="#" children="Prefetching URLs" />
            </Div>
            <Div mt={4} lineHeight={1.5} px={3} width={[1 / 2, 1 / 4, 1 / 6]}>
              <A
                py={1}
                display="block"
                href="#"
                fontSize={3}
                fontWeight={700}
                children="Access"
              />
              <A py={1} display="block" href="#" children="Policies" />
              <A py={1} display="block" href="#" children="Logs" />
              <A py={1} display="block" href="#" children="Workers" />
              <A py={1} display="block" href="#" children="Usage" />
              <A py={1} display="block" href="#" children="Stream" />
              <A py={1} display="block" href="#" children="Page Rules" />
            </Div>
            <Div mt={4} lineHeight={1.5} px={3} width={[1 / 2, 1 / 4, 1 / 6]}>
              <A
                py={1}
                display="block"
                fontWeight={700}
                fontSize={3}
                href="#"
                children="Caching"
              />
              <A py={1} display="block" href="#" children="Purge Cache" />
              <A py={1} display="block" href="#" children="Caching Level" />
              <A
                py={1}
                display="block"
                href="#"
                children="Browser Cache Expiration"
              />
              <A py={1} display="block" href="#" children="Always Online" />
              <A py={1} display="block" href="#" children="Development Mode" />
              <A
                py={1}
                display="block"
                href="#"
                children="Enable Query String Sort"
              />
            </Div>
            <Div mt={4} lineHeight={1.5} px={3} width={[1 / 2, 1 / 4, 1 / 6]}>
              <A
                fontWeight={700}
                fontSize={3}
                py={1}
                display="block"
                href="#"
                children="Network"
              />
              <A py={1} display="block" href="#" children="HTTP/2" />
              <A
                py={1}
                display="block"
                href="#"
                children="IPv6 Compatibility"
              />
              <A py={1} display="block" href="#" children="WebSockets" />
              <A py={1} display="block" href="#" children="Pseudo IPv4" />
              <A py={1} display="block" href="#" children="IP Geolocation" />
              <A
                py={1}
                display="block"
                href="#"
                children="Maximum Upload Size"
              />
              <A
                py={1}
                display="block"
                href="#"
                children="Response Buffering"
              />
              <A
                py={1}
                display="block"
                href="#"
                children="True-Client-IP Header"
              />
            </Div>
            <Div mt={4} lineHeight={1.5} px={3} width={[1 / 2, 1 / 4, 1 / 6]}>
              <A
                fontWeight={700}
                fontSize={3}
                py={1}
                display="block"
                href="#"
                children="Traffic"
              />
              <A py={1} display="block" href="#" children="Argo" />
              <A py={1} display="block" href="#" children="Load Balancing" />
              <A
                py={1}
                display="block"
                href="#"
                children="Load Balancing Logs"
              />
            </Div>
            <Div mt={4} lineHeight={1.5} px={3} width={[1 / 2, 1 / 4, 1 / 6]}>
              <A
                fontWeight={700}
                fontSize={3}
                py={1}
                display="block"
                href="#"
                children="Customize"
              />
              <A py={1} display="block" href="#" children="IP/Country Block" />
              <A py={1} display="block" href="#" children="WAF Block" />
              <A py={1} display="block" href="#" children="500 Class Errors" />
              <A
                py={1}
                display="block"
                href="#"
                children="Enable Origin Error Pages"
              />
              <A py={1} display="block" href="#" children="1000 Class Errors" />
              <A
                py={1}
                display="block"
                href="#"
                children="Always Online Error"
              />
              <A
                py={1}
                display="block"
                href="#"
                children="Basic Security Challenge"
              />
              <A py={1} display="block" href="#" children="WAF Challenge" />
              <A py={1} display="block" href="#" children="Country Challenge" />
              <A
                py={1}
                display="block"
                href="#"
                children="I'm Under Attack Mode Challenge"
              />
              <A py={1} display="block" href="#" children="429 Errors" />
            </Div>
            <Div mt={4} lineHeight={1.5} px={3} width={[1 / 2, 1 / 4, 1 / 6]}>
              <A
                fontWeight={700}
                fontSize={3}
                py={1}
                display="block"
                href="#"
                children="Apps"
              />
              <A py={1} display="block" href="#" children="Store" />
              <A py={1} display="block" href="#" children="Installed Apps" />
              <A py={1} display="block" href="#" children="Create an App" />
              <A py={1} display="block" href="#" children="Analytics" />
              <A
                py={1}
                display="block"
                href="#"
                children="Social and Communication"
              />
              <A py={1} display="block" href="#" children="UI and Design" />
              <A
                py={1}
                display="block"
                href="#"
                children="Widgets and Plugins"
              />
              <A
                py={1}
                display="block"
                href="#"
                children="Performance & Security"
              />
            </Div>
            <Div mt={4} lineHeight={1.5} px={3} width={[1 / 2, 1 / 4, 1 / 6]}>
              <A
                fontWeight={700}
                fontSize={3}
                py={1}
                display="block"
                href="#"
                children="Scrape Shield"
              />
              <A
                py={1}
                display="block"
                href="#"
                children="Email Address Obfuscation"
              />
              <A
                py={1}
                display="block"
                href="#"
                children="Server-side Excludes"
              />
              <A
                py={1}
                display="block"
                href="#"
                children="Hotlink Protection"
              />
            </Div>
          </Flex>
          <Flex
            color="gray.2"
            mt={5}
            pt={5}
            flexWrap="wrap"
            width={1}
            borderTop="1px solid rgba(0,0,0,.1)"
          >
            <Div width={1}>
              {data.footer.secondaryNav.map((item, i) => (
                <NavLink key={i} mr={4} children={item.text} />
              ))}
            </Div>
            <SocialIcons variant={1} />
          </Flex>
          <P color="gray.2">
            <Small>© Cloudflare Inc.</Small>
          </P>
        </Footer>
      )
    case 2:
      return (
        <Footer borderTop="1px solid" color="gray.8" {...props}>
          <Flex
            color="gray.2"
            px={[4, 5]}
            py={4}
            bg="white"
            alignItems="flex-end"
            flexWrap="wrap"
            fontSize={2}
            mx={-3}
          >
            <A
              py={2}
              px={3}
              display="block"
              fontSize={3}
              href="#"
              fontWeight={700}
              children="Home"
            />
            <A
              px={3}
              py={2}
              display="block"
              fontSize={3}
              href="#"
              fontWeight={700}
              children="Analytics"
            />
            <A
              py={2}
              px={3}
              display="block"
              href="#"
              fontWeight={700}
              children="DNS"
              fontSize={3}
            />
            <A
              py={2}
              px={3}
              display="block"
              href="#"
              fontWeight={700}
              fontSize={3}
              children="Crypto"
            />
            <A
              px={3}
              py={2}
              display="block"
              href="#"
              fontWeight={700}
              children="Firewall"
              fontSize={3}
            />
            <A
              px={3}
              py={2}
              display="block"
              fontSize={3}
              href="#"
              fontWeight={700}
              children="Speed"
            />
            <A
              px={3}
              py={2}
              display="block"
              href="#"
              fontSize={3}
              fontWeight={700}
            >
              Workers
              <Sup
                mt={0}
                lineHeight={1}
                pl={1}
                fontWeight={600}
                color="indigo.4"
                fontSize={1}
              >
                New
              </Sup>
            </A>
            <A
              px={3}
              py={2}
              display="block"
              href="#"
              fontSize={3}
              fontWeight={700}
            >
              Stream
              <Sup
                mt={0}
                lineHeight={1}
                pl={1}
                fontWeight={600}
                color="indigo.4"
                fontSize={1}
              >
                New
              </Sup>
            </A>
            <A
              px={3}
              py={2}
              display="block"
              fontWeight={700}
              fontSize={3}
              href="#"
              children="Caching"
            />
            <A
              px={3}
              fontWeight={700}
              fontSize={3}
              py={2}
              display="block"
              href="#"
              children="Network"
            />
            <A
              px={3}
              fontWeight={700}
              fontSize={3}
              py={2}
              display="block"
              href="#"
              children="Traffic"
            />
            <A
              px={3}
              fontWeight={700}
              fontSize={3}
              py={2}
              display="block"
              href="#"
              children="Customize"
            />
            <A
              px={3}
              fontWeight={700}
              fontSize={3}
              py={2}
              display="block"
              href="#"
              children="Apps"
            />
            <A
              px={3}
              fontWeight={700}
              fontSize={3}
              py={2}
              display="block"
              href="#"
              ml="auto"
              children="Account"
            />
            <A
              px={3}
              fontWeight={700}
              fontSize={3}
              py={2}
              display="block"
              href="#"
              children="Billing"
            />
            <A
              px={3}
              fontWeight={700}
              fontSize={3}
              py={2}
              display="block"
              href="#"
              children="Profile"
            />
            <A
              px={3}
              fontWeight={700}
              fontSize={3}
              py={2}
              display="block"
              href="#"
              children="Logs"
            />
          </Flex>
          <Flex
            color="gray.2"
            py={4}
            px={[4, 5]}
            flexWrap="wrap"
            alignItems="flex-start"
            width={1}
            borderTop="1px solid rgba(0,0,0,.05)"
          >
            <Div width="auto">
              <NavLink width={1} children="Contact support" />
              <NavLink width={1} children="Contact sales" />
              <NavLink width={1} children="+44 20 3514 6970" />
            </Div>
            <Div width="auto">
              {data.footer.secondaryNav.map((item, i) => (
                <NavLink width={1} key={i} children={item.text} />
              ))}
            </Div>
            <Div width="auto">
              <NavLink width={1} children="Blog" />
              <NavLink width={1} children="Careers" />
              <NavLink width={1} children="1.1.1.1" />
            </Div>
            <Div width="auto" mr="auto">
              <NavLink width={1} children="Community" />
              <NavLink width={1} children="Help center" />
            </Div>
            <Div width="auto" textAlign="right">
              <A
                fontWeight={700}
                fontSize={2}
                py={2}
                textAlign="right"
                display="block"
                href="#"
                children="Log out"
              />
            </Div>
          </Flex>
          <Flex px={[4, 5]} borderTop="1px solid rgba(0,0,0,.05)">
            <P color="gray.2" mr="auto">
              <Small fontSize={1} fontWeight={700}>
                © Cloudflare Inc.
              </Small>
              <A ml={3} fontSize={1} href="/terms">
                Terms
              </A>
              <A ml={3} fontSize={1} href="/privacy">
                Privacy Policy
              </A>
            </P>
            <SocialIcons variant={2} color="gray.2" />
          </Flex>
        </Footer>
      )
  }
}

SiteFooter.defaultProps = {
  variant: 2
}

export default withVariations(SiteFooter, 2)
