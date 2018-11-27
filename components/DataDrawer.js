import React, { Component } from "react"

import settings from "../data/settings.json"
import zones from "../data/zones.json"
import user from "../data/user.json"
import abuseUrls from "../data/abuse_urls.json"
import zoneAnalyticsMonth from "../data/zone_analytics_month.json"
import zoneAnalyticsDay from "../data/zone_analytics_day.json"
import rateLimitingAnalytics from "../data/rate_limiting_analytics.json"
import dns from "../data/dns.json"
import firewallRules from "../data/firewall_rules.json"
import filters from "../data/filters.json"
import argoAnalytics from "../data/argo_analytics.json"
import argoGeoAnalytics from "../data/argo_geo_analytics.json"

import theme from "../theme"

const filterModes = [
  "achromatopsia",
  "protanopia",
  "protanomaly",
  "deuteranopia",
  "deuteranomaly",
  "tritanopia",
  "tritanomaly",
  "achromatomaly"
]

export default class DataDrawer extends Component {
  render() {
    const { visible, filter, handleFilterChange, filterActive } = this.props

    return (
      <Div
        p={4}
        color="indigo.6"
        bg="indigo.0"
        width={1 / 3}
        css={{
          position: "fixed",
          right: 0,
          top: 0,
          bottom: 0,
          overflow: "auto",
          transform: visible ? "" : "translateX(100%)",
          transition: "transform 300ms",
          backdropFilter: "blur(15px)",
          boxShadow: "2px 2px 0 black",
          zIndex: 1
        }}
      >
        <H1
          fontSize={1}
          m={0}
          mb={2}
          css={{
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          }}
        >
          Zones
        </H1>
        <DataGroup name="Zones" data={zones} />
        <DataGroup name="Zone Settings" data={settings} />
        <DataGroup name="Abuse URLs" data={abuseUrls} />

        <H1
          fontSize={1}
          m={0}
          mb={2}
          mt={3}
          css={{
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          }}
        >
          Users
        </H1>
        <DataGroup name="User" data={user} />

        <H1
          fontSize={1}
          m={0}
          mb={2}
          mt={3}
          css={{
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          }}
        >
          DNS
        </H1>
        <DataGroup name="DNS Records" data={dns} />

        <H1
          fontSize={1}
          m={0}
          mb={2}
          mt={3}
          css={{
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          }}
        >
          Firewall
        </H1>
        <DataGroup name="Firewall Rules" data={firewallRules} />
        <DataGroup name="Filters" data={filters} />

        <H1
          fontSize={1}
          m={0}
          mb={2}
          mt={3}
          css={{
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          }}
        >
          Analytics
        </H1>
        <DataGroup name="Zone Analytics (Month)" data={zoneAnalyticsMonth} />
        <DataGroup name="Zone Analytics (Day)" data={zoneAnalyticsDay} />
        <DataGroup
          name="Rate Limiting Analytics"
          data={rateLimitingAnalytics}
        />
        <DataGroup name="Argo Analytics" data={argoAnalytics} />
        <DataGroup name="Argo Geo Analytics" data={argoGeoAnalytics} />

        <Hr color="gray.6" my={3} />

        <H1
          fontSize={1}
          m={0}
          mb={2}
          mt={3}
          css={{
            textTransform: "uppercase",
            letterSpacing: "0.05em"
          }}
        >
          Color Filter
        </H1>
        <Select
          mb={2}
          disabled={!filterActive}
          value={filter}
          onChange={handleFilterChange}
        >
          {filterModes.map(filter => (
            <option key={filter} value={filter}>
              {filter}
            </option>
          ))}
        </Select>
      </Div>
    )
  }
}

class DataGroup extends Component {
  state = {
    selected: false
  }

  handleToggle = () => {
    this.setState({
      selected: !this.state.selected
    })
  }

  render() {
    const { data, name } = this.props

    return (
      <Div mb={2}>
        <H2
          onClick={this.handleToggle}
          fontSize={2}
          m={0}
          color="white"
          css={{
            cursor: "pointer"
          }}
        >
          {name}
        </H2>
        {this.state.selected && <JSONRenderer data={data} />}
      </Div>
    )
  }
}

const findType = data => {
  if (Array.isArray(data)) {
    return "array"
  } else if (data === null) {
    return "null"
  }

  return typeof data
}

const typeColors = {
  string: theme.colors.blue[5],
  number: theme.colors.red[4],
  array: theme.colors.violet[4],
  boolean: theme.colors.green[5],
  object: theme.colors.orange[5],
  null: theme.colors.gray[2]
}

const Badge = ({ value, color = "#aaa" }) => {
  return (
    <Div
      px={1}
      py={1}
      width="auto"
      bg={color}
      color="white"
      fontSize={1}
      css={{
        display: "flex",
        flexShrink: 0,
        alignItems: "center",
        justifyContent: "center",
        lineHeight: 1,
        fontWeight: "bold",
        borderRadius: 3,
        textTransform: "uppercase"
      }}
      title={value}
    >
      {value}
    </Div>
  )
}

class JSONRenderer extends Component {
  render() {
    const { data } = this.props

    return (
      <Div
        fontSize={2}
        mt={2}
        css={{
          fontFamily: "Menlo"
        }}
      >
        {Object.keys(data).map(key => (
          <DataRow key={key} name={key} value={data[key]} first />
        ))}
      </Div>
    )
  }
}

class DataRow extends Component {
  state = {
    selected: false
  }

  render() {
    const { value, name, first = false } = this.props

    const canExpand =
      (findType(value) === "object" || findType(value) === "array") &&
      value !== null &&
      Object.keys(value).length > 0

    return (
      <Div
        pl={first ? 2 : 3}
        borderLeft={first ? "" : "1px solid"}
        borderColor="rgba(0,0,0,0.1)"
      >
        <Div
          ml={-2}
          pb={1}
          display="flex"
          flexWrap="nowrap"
          alignItems="center"
          css={{ cursor: canExpand ? "pointer" : "initial" }}
          onClick={() => this.setState({ selected: !this.state.selected })}
        >
          <Badge
            value={findType(value)
              .toUpperCase()
              .slice(0, 1)}
            color={typeColors[findType(value)]}
          />
          <Span mx={1} css={{ whiteSpace: "nowrap" }}>
            {name}
          </Span>
          {canExpand && <Badge value={Object.keys(value).length.toString()} />}
          {!canExpand && (
            <strong style={{ whiteSpace: "nowrap" }}>
              {value === null ? "null" : value.toString()}
            </strong>
          )}
        </Div>

        <Div>
          {canExpand &&
            this.state.selected &&
            Object.keys(value).map(key => (
              <DataRow key={key} name={key} value={value[key]} />
            ))}
        </Div>
      </Div>
    )
  }
}
