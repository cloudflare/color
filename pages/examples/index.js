import React from "react"
import theme from "../../theme"

const Home = props => (
  <Div>
    <Div bg="white">
      <SiteHeader />
      <Container py={5}>
        <Div px={[0, 3]}>
          <ModuleWrapper>
            <Flex px={[3, 4]} py={3} color="gray.1" width={1}>
              <Div width={1 / 2}>
                <H3 mb={0}>Access tokens</H3>
                <P mt={2}>Tokens created by you</P>
              </Div>
              <Div width={1 / 2} textAlign="right">
                <ButtonLink children="Create token" />
              </Div>
            </Flex>
            <Table color="gray.1">
              <Thead fontSize={2}>
                <Tr>
                  <TableHeaderCell>Token name</TableHeaderCell>
                  <TableHeaderCell>Account</TableHeaderCell>
                  <TableHeaderCell>Zone</TableHeaderCell>
                  <TableHeaderCell>Last used</TableHeaderCell>
                  <TableHeaderCell width={64}>
                    <Span display="none">Download</Span>
                  </TableHeaderCell>
                </Tr>
              </Thead>
              <Tfoot>
                <Pagination />
              </Tfoot>
              <Tbody>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot</TableCell>
                  <TableCell>
                    tacos.com, bobsrestaurant.com, fiesta.org
                  </TableCell>
                  <TableCell>15 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>Cache-pets</TableCell>
                  <TableCell>Pets</TableCell>
                  <TableCell>dogs.com</TableCell>
                  <TableCell>3 days ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>Billing-Apparel</TableCell>
                  <TableCell>Apparel</TableCell>
                  <TableCell>shirts.com</TableCell>
                  <TableCell>5 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot</TableCell>
                  <TableCell>
                    tacos.com, bobsrestaurant.com, fiesta.org
                  </TableCell>
                  <TableCell>15 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>DNS-Vacations</TableCell>
                  <TableCell>Vacations</TableCell>
                  <TableCell>
                    travelitaly.com, tourbus.com, cruises.com
                  </TableCell>
                  <TableCell>3 months ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
              </Tbody>
            </Table>
          </ModuleWrapper>
          <ModuleWrapper mt={4}>
            <Div px={[3, 4]} py={3} color="gray.1" width={1}>
              <Div width={1}>
                <H3 mb={0}>Managed access tokens</H3>
              </Div>
              <Flex width={1} alignItems="center" pb={3}>
                <Div width={3 / 4}>
                  <Search />
                </Div>
                <Div width={1 / 4} textAlign="right">
                  <Select mt={4}>
                    <option>All accounts</option>
                  </Select>
                </Div>
              </Flex>
            </Div>
            <Table color="gray.1">
              <Thead fontSize={2}>
                <Tr>
                  <TableHeaderCell>Token name</TableHeaderCell>
                  <TableHeaderCell>Account</TableHeaderCell>
                  <TableHeaderCell>Created by</TableHeaderCell>
                  <TableHeaderCell>Last used</TableHeaderCell>
                  <TableHeaderCell width={64} />
                </Tr>
              </Thead>
              <Tfoot>
                <Pagination />
              </Tfoot>
              <Tbody>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot, Pets</TableCell>
                  <TableCell>alice@burrito.com</TableCell>
                  <TableCell>3 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot, Pets</TableCell>
                  <TableCell>alice@burrito.com</TableCell>
                  <TableCell>3 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot, Pets</TableCell>
                  <TableCell>alice@burrito.com</TableCell>
                  <TableCell>3 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot, Pets</TableCell>
                  <TableCell>alice@burrito.com</TableCell>
                  <TableCell>3 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot, Pets</TableCell>
                  <TableCell>alice@burrito.com</TableCell>
                  <TableCell>3 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot, Pets</TableCell>
                  <TableCell>alice@burrito.com</TableCell>
                  <TableCell>3 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot, Pets</TableCell>
                  <TableCell>alice@burrito.com</TableCell>
                  <TableCell>3 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot, Pets</TableCell>
                  <TableCell>alice@burrito.com</TableCell>
                  <TableCell>3 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot, Pets</TableCell>
                  <TableCell>alice@burrito.com</TableCell>
                  <TableCell>3 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot, Pets</TableCell>
                  <TableCell>alice@burrito.com</TableCell>
                  <TableCell>3 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot, Pets</TableCell>
                  <TableCell>alice@burrito.com</TableCell>
                  <TableCell>3 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot, Pets</TableCell>
                  <TableCell>alice@burrito.com</TableCell>
                  <TableCell>3 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot, Pets</TableCell>
                  <TableCell>alice@burrito.com</TableCell>
                  <TableCell>3 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot, Pets</TableCell>
                  <TableCell>alice@burrito.com</TableCell>
                  <TableCell>3 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot, Pets</TableCell>
                  <TableCell>alice@burrito.com</TableCell>
                  <TableCell>3 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot, Pets</TableCell>
                  <TableCell>alice@burrito.com</TableCell>
                  <TableCell>3 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot, Pets</TableCell>
                  <TableCell>alice@burrito.com</TableCell>
                  <TableCell>3 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot, Pets</TableCell>
                  <TableCell>alice@burrito.com</TableCell>
                  <TableCell>3 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot, Pets</TableCell>
                  <TableCell>alice@burrito.com</TableCell>
                  <TableCell>3 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot, Pets</TableCell>
                  <TableCell>alice@burrito.com</TableCell>
                  <TableCell>3 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
                <Tr>
                  <TableCell>DNS-Burrito</TableCell>
                  <TableCell>Burritobot, Pets</TableCell>
                  <TableCell>alice@burrito.com</TableCell>
                  <TableCell>3 mins ago</TableCell>
                  <TableCell>[Actions]</TableCell>
                </Tr>
              </Tbody>
            </Table>
          </ModuleWrapper>
        </Div>
      </Container>
    </Div>
    <SiteFooter />
  </Div>
)

export default Home
