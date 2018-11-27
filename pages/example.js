import React from "react"

import data from "../data"

const Example = props => (
  <Div bg="cyan.9" color="cyan.2" py={[5, 6, 7]} px={[4, 5]}>
    <H1>An Example Page That Uses Dynamic Data</H1>

    <H1 f={4} mt={5} borderBottom="1px solid currentColor">
      Being Explicit
    </H1>
    <H2>{data.users[0].email}</H2>
    <P>{data.users[0].first_name}</P>
    <P>{data.users[0].last_name}</P>

    <H2>{data.users[1].email}</H2>
    <P>{data.users[1].first_name}</P>
    <P>{data.users[1].last_name}</P>

    <H1 f={4} mt={5} borderBottom="1px solid currentColor">
      Using .map()
    </H1>
    {data.users.map((user, i) => (
      <Div key={i}>
        <H2>{user.email}</H2>
        <P>{user.first_name}</P>
        <P>{user.last_name}</P>
      </Div>
    ))}
  </Div>
)

export default Example
