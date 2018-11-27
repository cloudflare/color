import React from "react"
import {
  TypeScale,
  Colorable,
  Matrix,
  Cartesian,
  LiveEditor,
  Library,
  Example,
  PropsForm,
  XRay,
  Font,
  Detail,
  Responsive,
  Frame,
  Diff
} from "@compositor/kit"

import theme from "../theme"

export default props => (
  <Library basename="_docs">
    <Example name="ELEMENTS">
      <A href="/typography" />
      <A href="/Block%20Level%20Wrappers" />
      <A href="/links" />
      <A href="/buttons" />
      <A href="/code" />
      <A href="/form" />
      <A href="/images" />
      <A href="/tables" />
      <A href="/lists" />
      <A href="/miscellaneous" />
    </Example>
    <Example name="Typography">
      <Div py={3} px={[4]}>
        <Detail>
          <H4 fontSize={[4, 5]} borderBottom="1px solid black" pb={2}>
            Typography
          </H4>
        </Detail>

        <Div mt={4}>
          <LiveEditor
            scope={{
              Div,
              B,
              S,
              U,
              Em,
              P,
              Sup,
              Sub,
              Small,
              Strong,
              Abbr,
              Time
            }}
            code={`
    <Div>
      <B>Some bolded text</B><br />
      <S>Some strikethrough text</S><br />
      <U>Some underlined text</U><br />
      <P>e = mc<Sup>2</Sup></P>
      <P>H<Sub>2</Sub>O is my favorite recipe for making water.</P>
      <Small fontSize={[0,1]}>This is small text that gets slightly less small on larger screens</Small><br />
      <Strong fontWeight='600'>This is some strong text</Strong><br />
      <Abbr title="Directly translates to 'id est' latin for 'in other words'">I.E. </Abbr><br />
      <Em color='gray.4'>Emphasised Text</Em><br />
      <Time>9999-12-31 23:59:59</Time>
      <P>  
        <B>Lorem ipsum dolor</B> sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud <Em>exercitation ullamco</Em> laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia
        deserunt mollit anim id est laborum.
      </P>
    </Div>

                  `}
          />
        </Div>
        <H4 fontSize={[4, 5]} borderBottom="1px solid black" pb={2} mt={5}>
          Headings
        </H4>
        <Div mt={4}>
          <LiveEditor
            scope={{ H1, H2, H3, H4, H5, H6, Header }}
            code={`
      <Header>
        <H1>Heading Level One</H1>
        <H2>Heading Level Two</H2>
        <H3>Heading Level Three</H3>
        <H4>Heading Level Four</H4>
        <H5>Heading Level Five</H5>
        <H6>Heading Level Six</H6>
      </Header>
                  `}
          />
        </Div>
        <H4 mt={5} fontSize={[4, 5]} borderBottom="1px solid black">
          Horizontal Rules
        </H4>
        <P mb={4}>
          The HTML &lt;hr&gt; element represents a thematic break between
          paragraph-level elements (for example, a change of scene in a story,
          or a shift of topic with a section); historically, this has been
          presented as a horizontal rule or line.
        </P>

        <LiveEditor
          scope={{ Hr }}
          code={`
              <Hr color='orange.4' />
              <Hr color='indigo.4' />
              <Hr color='gray.8' />
              <Hr color='gray.7' />
              <Hr color='gray.6' />
              <Hr color='gray.5' />
              <Hr color='gray.4' />
              <Hr color='gray.3' />
              <Hr color='gray.2' />
              <Hr color='gray.1' />
              <Hr color='gray.0' />
              <Hr color='black' />
                  `}
        />
        <Hr />
        <H4 fontSize={[4, 5]} borderBottom="1px solid black" pb={2} mt={5}>
          Type Scale
        </H4>
        <TypeScale value={theme.fontSizes} />
      </Div>
    </Example>
    <Example name="Block Level Wrappers">
      <Div px={4} py={3}>
        <H4 fontSize={[4, 5]} borderBottom="1px solid black" pb={2}>
          Block Level Wrappers
        </H4>
        <LiveEditor
          scope={{
            Div,
            Section,
            Article,
            Aside,
            Main,
            Footer,
            Header,
            Nav,
            H1,
            H2,
            H3,
            P,
            Time,
            Strong
          }}
          code={`
      <Div border='1px solid currentColor' px={[3,4,5]} py={[2,3,4]}>A division of content</Div>
      <Section width={1/2} border='1px solid currentColor' p={4} my={3}>A section of content set to 1/2 the width of it's parent container</Section>
      <Article color='gray.4' border='1px solid' borderRadius={2} p={4}>
        <Time fontSize={1} color='gray.4'>Publication Date</Time>
        <H3 mb={2} color='black'>This is an Article Title</H3>
        <P mt={0} color='black'>
          An article of content that has lots of fun lines that engage the reader. Something like Cloudflare has helped me save 19 GB in the last month. Or maybe something different.
        </P>
      </Article>
      <Aside width={1/2} mt={5}>
        <P>
          This is an aside but <Strong color='green.4'>the movie earned $87 million</Strong> during its initial release.
        </P>
      </Aside>
      <Header py={2} pl={3} mb={4} color='indigo.4' borderLeft='8px solid currentColor' mt={5}>
        <H1 color='black' fontSize={5} mb={2} mt={0}>Header Title</H1>
        <H2 color='black' fontSize={3} mt={0} mb={2}>Can contain multiple heading elements</H2>
        <P color='black' fontSize={3} mt={0} mb={0}>
            Can even contain paragraphs!
            Sunset is the time of day when our sky meets the outer space solar winds. There are blue, pink, and purple swirls, spinning and twisting, like clouds of balloons caught in a blender. 
        </P>
      </Header>
      <Nav bg='indigo.3' color='white' px={[3,4]} py={[2,3]} my={5} borderRadius={1}>
        An element for the nav component.
      </Nav>
      <Main bg='red.3' color='red.9' p={5} mx='auto' width={3/4}>
        An element to denote the main page content.
      </Main>
      <Footer bg='gray.9' color='gray.8' borderTop='1px solid currentColor' p={4} my={5}>
        <P color='gray.2' my={0}>
          The footer element represents a footer for its nearest
          sectioning content or sectioning root element. A footer
          typically contains information about the author of the
          section, copyright data or links to related documents.
          </P>
      </Footer>

                  `}
        />
      </Div>
    </Example>
    <Example name="Links">
      <Div px={4} py={3}>
        <H4 fontSize={[4, 5]} borderBottom="1px solid black" pb={2}>
          Links
        </H4>
        <Matrix
          x={[
            {
              href: "#0",
              children: "Click Here",
              color: "blue.4",
              hover: { color: "blue.5" }
            },
            {
              href: "#0",
              children: "Click Here",
              color: "red.4",
              hover: { color: "red.5" }
            },
            {
              href: "#0",
              children: "Click Here",
              color: "black",
              hover: { color: "gray.2" }
            }
          ]}
          y={[
            { fontSize: 2 },
            { fontSize: 2, fontWeight: 700 },
            { fontSize: 3 },
            { fontSize: 3, fontWeight: 700 },
            { fontSize: 4 },
            { fontSize: 4, fontWeight: 700 }
          ]}
          component={A}
        />
      </Div>
    </Example>
    <Example name="Buttons">
      <Div px={4} py={5}>
        <Detail>
          <P>
            Buttons should be used for actions that don't navigate the user to a
            new page.
          </P>

          <PropsForm>
            <Button
              borderRadius={2}
              px={4}
              py={2}
              border="0px solid transparent"
              color="white"
              bg="blue.4"
            >
              Hello
            </Button>
            <PropsForm.Input name="color" />
            <PropsForm.Select name="bg">
              <option>blue.4</option>
              <option>red.4</option>
              <option>gray.4</option>
              <option>green.4</option>
              <option>cyan.4</option>
              <option>orange.4</option>
              <option>indigo.4</option>
              <option>violet.4</option>
            </PropsForm.Select>
            <PropsForm.Select name="fontSize">
              <option>14px</option>
              <option>16px</option>
              <option>20px</option>
              <option>24px</option>
            </PropsForm.Select>
            <PropsForm.Select name="borderRadius">
              <option>3px</option>
              <option>5px</option>
              <option>9999px</option>
              <option>0</option>
            </PropsForm.Select>
          </PropsForm>
          <H4>Matrix View</H4>
        </Detail>
        <Matrix
          x={[
            {
              border: 0,
              borderRadius: 2,
              color: "white",
              href: "#0",
              mb: 2,
              children: "Click Here",
              bg: "blue.4"
            },
            {
              border: 0,
              borderRadius: 2,
              color: "white",
              href: "#0",
              mb: 2,
              children: "Кликните сюда",
              bg: "cyan.4"
            },
            {
              border: 0,
              borderRadius: 2,
              color: "white",
              href: "#0",
              mb: 2,
              children: "Cliquez ici",
              bg: "green.4"
            },
            {
              border: 0,
              borderRadius: 2,
              color: "white",
              href: "#0",
              mb: 2,
              children: "ここをクリック",
              bg: "orange.4"
            },
            {
              border: 0,
              borderRadius: 2,
              color: "white",
              href: "#0",
              mb: 2,
              children: "Klicka här",
              bg: "indigo.4"
            },
            {
              border: 0,
              borderRadius: 2,
              color: "white",
              href: "#0",
              mb: 2,
              children: "Klik hier",
              bg: "red.4"
            }
          ]}
          y={[
            { fontSize: 1 },
            { fontSize: 2 },
            { fontSize: 3 },
            { fontSize: 4 }
          ]}
          component={Button}
        />
        <H4>Responsive View</H4>
        <H4>Reference</H4>
        <A href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button">
          MDN Docs - Button
        </A>
      </Div>
    </Example>
    <Example name="Code">
      <Var>x</Var>
      <Code>var x = ymx + b</Code>
      <Samp>var x = ymx + b</Samp>
      <Pre>
        <Samp>
          <Span>mike@interwebz:~$</Span>
          <Kbd>md5 -s "Hello world"</Kbd>
          <br />
          MD5 ("Hello world") = 3e25960a79dbc69b674cd4ec67a72c62
          <br />
          <Span>mike@interwebz:~$</Span> <Span>█</Span>
          <br />
        </Samp>
      </Pre>
      <H4 borderBottom="1px solid black" pb={2}>
        Kbd
      </H4>
      <P>
        The HTML Keyboard Input element (&lt;kbd&gt;) represents a span of
        inline text denoting textual user input from a keyboard, voice input, or
        any other text entry device. By convention, the user agent defaults to
        rendering the contents of a &lt;kbd&gt; element using its default
        monospace font, although this is not mandated by the HTML standard.
      </P>
      <P>
        You can also create a new document using the keyboard shortcut
        <Kbd>
          <Kbd>Ctrl</Kbd>+<Kbd>N</Kbd>
        </Kbd>
        .
      </P>
      <Data value="400">Mega Jumbo Ketchup</Data>
    </Example>
    <Example name="Form">
      <Form>
        <Fieldset>
          <Legend>A Small Example Form</Legend>
          <Fieldset>
            <Legend>Personal Details</Legend>
            <Label>First Name</Label>
            <Input type="text" />
            <br />
            <Label>Last Name</Label>
            <Input type="text" />
            <br />
            <Label>Age</Label>
            <Input type="number" />
          </Fieldset>
          <Fieldset>
            <Legend>Payment Information</Legend>
            <Label>Address</Label>
            <Input type="text" />
            <Label>Credit Card</Label>
            <Input type="number" />
          </Fieldset>
          <Label>Password</Label>
          <Input type="password" />
          <Textarea defaultValue="There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..." />

          <Div>
            <Input type="submit" />
          </Div>
        </Fieldset>
      </Form>
    </Example>
    <Example name="Images">
      <Img src="https://imgplaceholder.com/900x180" />
    </Example>
    <Example name="Tables">
      <Table>
        <thead>
          <Th>Label 1</Th>
          <Th>Label 2</Th>
        </thead>
        <Tr>
          <Td>Cell 1</Td>
          <Td>Cell 2</Td>
        </Tr>
        <Tr>
          <Td>Cell 3</Td>
          <Td>Cell 4</Td>
        </Tr>
      </Table>
    </Example>
    <Example name="Lists">
      <Ol>
        <Li>List Item</Li>
        <Li>List Item</Li>
        <Li>List Item</Li>
        <Li>List Item</Li>
      </Ol>
      <Ul>
        <Li>List Item</Li>
        <Li>List Item</Li>
        <Li>List Item</Li>
        <Li>List Item</Li>
      </Ul>
      <Dl>
        <Dt>A Definition List</Dt>
        <Dd>
          The element encloses a list of groups of terms (specified using the
          &lt;dt&gt; element) and descriptions (provided by &lt;dd&gt;
          elements). Common uses for this element are to implement a glossary or
          to display metadata (a list of key-value pairs).
        </Dd>
      </Dl>
    </Example>
    <Example name="Miscellaneous">
      <Address>
        You can contact author at{" "}
        <a href="http://www.somedomain.com/contact">www.somedomain.com</a>.
        <br />
        If you see any bugs, please{" "}
        <a href="mailto:webmaster@somedomain.com">contact webmaster</a>.<br />
        You may also want to visit us:
        <br />
        Mozilla Foundation
        <br />
        331 E Evelyn Ave
        <br />
        Mountain View, CA 94041
        <br />
        USA
      </Address>
      <P>
        More information can be found in <Cite>[ISO-0000]</Cite>.
      </P>
      <Details>
        <Summary>System Requirements</Summary>
        <P>
          Requires a computer running an operating system. The computer must
          have some memory and ideally some kind of long-term storage. An input
          device as well as some form of output device is recommended.
        </P>
      </Details>
    </Example>

    <Example name="Container">
      <H4>Flush to top</H4>
      <LiveEditor
        scope={{ Container, Div, P }}
        code={`
        <Container bg='gray.3' innerBg='gray.9'>
          <Div p={4}>
            <P>Some content</P>
          </Div>
        </Container>
        `}
      />
      <H4 mt={5}>Padding around innner content</H4>
      <LiveEditor
        scope={{ Container, Div, P }}
        code={`
        <Container bg='gray.3' innerBg='gray.9' py={4}>
          <Div p={4}>
            <P>Some content</P>
          </Div>
        </Container>
        `}
      />
    </Example>
    <Example name="Flex Layout">
      <LiveEditor
        scope={{ Flex, Div }}
        code={`
      <Flex>
        <Div bg='blue.4' py={4}  />
      </Flex>
        `}
      />
      <LiveEditor
        scope={{ Flex, Div }}
        code={`
      <Flex>
        <Div bg='blue.4' py={4}  />
        <Div bg='blue.2' py={4}  />
      </Flex>
        `}
      />
      <LiveEditor
        scope={{ Flex, Div }}
        code={`
      <Flex>
        <Div bg='blue.4' py={4}  />
        <Div bg='blue.2' py={4}  />
        <Div bg='blue.7' py={4}  />
      </Flex>
        `}
      />
      <LiveEditor
        scope={{ Flex, Div }}
        code={`
      <Flex>
        <Div bg='blue.4' py={4} width={1/3} />
        <Div bg='blue.2' py={4}  />
      </Flex>
        `}
      />
      <LiveEditor
        scope={{ Flex, Div }}
        code={`
      <Flex mx={-3} flexWrap='wrap'>
        <Div width={1/4} p={3}><Div bg='blue.0' py={4}  /></Div>
        <Div width={1/4} p={3}><Div bg='blue.1' py={4}  /></Div>
        <Div width={1/4} p={3}><Div bg='blue.2' py={4}  /></Div>
        <Div width={1/4} p={3}><Div bg='blue.3' py={4}  /></Div>
        <Div p={3}><Div bg='blue.8' py={4}  /></Div>
        <Div width={1/2} p={3}><Div bg='blue.9' py={4}  /></Div>
        <Div width={1/2} p={3}><Div bg='blue.7' py={4}  /></Div>
        <Div width={1/3} p={3}><Div bg='blue.8' py={4}  /></Div>
        <Div width={1/3} p={3}><Div bg='blue.5' py={4}  /></Div>
        <Div width={1/3} p={3}><Div bg='blue.6' py={4}  /></Div>
      </Flex>
        `}
      />
      <LiveEditor
        scope={{ Flex, Div }}
        code={`
      <Flex mx={-3} flexWrap='wrap'>
        <Div width={[1, 1/2, 1/4]} p={3}><Div bg='blue.0' py={4}  /></Div>
        <Div width={[1, 1/2, 1/4]} p={3}><Div bg='blue.1' py={4}  /></Div>
        <Div width={[1, 1/2, 1/4]} p={3}><Div bg='blue.2' py={4}  /></Div>
        <Div width={[1, 1/2, 1/4]} p={3}><Div bg='blue.3' py={4}  /></Div>
      </Flex>
        `}
      />
      <LiveEditor
        scope={{ Flex, Div }}
        code={`
      <Flex mx={-3} flexWrap='wrap'>
        <Div width={[1, 1/3, 1/4]} p={3}><Div bg='blue.0' py={4}  /></Div>
        <Div width={[1, 1/3, 1/4]} p={3}><Div bg='blue.1' py={4}  /></Div>
        <Div width={[1, 1/3, 1/4]} p={3}><Div bg='blue.2' py={4}  /></Div>
        <Div width={[1, 1, 1/4]} p={3}><Div bg='blue.3' py={4}  /></Div>
      </Flex>
        `}
      />
    </Example>
    <Example name="MetaText">
      <LiveEditor
        scope={{ MetaText }}
        code={`

        <MetaText>This was last changed 7 months ago</MetaText>
                `}
      />
    </Example>
    <Example name="Beta">
      <Div p={4}>
        <LiveEditor scope={{ Beta }} code={`<Beta />`} />
      </Div>
      <Detail>
        <Div px={4} mb={4}>
          <P color="gray.3">
            Beta flag component. Can be used with card and page titles to denote
            that a feature is still in beta.
          </P>
        </Div>
      </Detail>
    </Example>
    <Example name="Logo">
      <Logo />
    </Example>
    <Example name="Avatar">
      <Div p={4}>
        <LiveEditor scope={{ Avatar }} code={`<Avatar />`} />
      </Div>
      <Detail>
        <Div px={4} mb={4}>
          <P color="gray.3">
            Avatar component. Can be used for the user profile dropdown in the
            navigation header.
          </P>
        </Div>
      </Detail>
    </Example>
    <Example name="Dashboard Nav">
      <Div p={4}>
        <LiveEditor
          scope={{ DashboardNav }}
          code={`<DashboardNav activeLink="home"/>`}
        />
      </Div>
      <Detail>
        <Div px={4} mb={4}>
          <P color="gray.3">
            The dashboard navigation component is used when the user is in the
            context of a zone. The home icon is visually distinguished by
            default (to indicate the current page) but you should set{" "}
            <code>activeLink</code> to the current page the user is on.
            <P>The Dashboard Nav component includes NavIcon.</P>
          </P>
        </Div>
      </Detail>
    </Example>
  </Library>
)
