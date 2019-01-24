import Flex from "components/Flex"
import Div from "elements/Div"
import P from "elements/P"
import Span from "elements/Span"
import Modal from "./Modal"
import colorable from "colorable"
import round from "lodash/round"

const getRating = accessibility => {
  if (accessibility["aaa"]) {
    return "AAA"
  } else if (accessibility["aaLarge"]) {
    return "AA Large"
  } else if (accessibility["aa"]) {
    return "AA"
  } else {
    return "Fail"
  }
}

const ContrastPreview = ({ color, bg }) => {
  const contrastObj = colorable([color, bg])[0].combinations[0]
  const contrastScore = round(contrastObj.contrast, 2)
  const rating = getRating(contrastObj.accessibility)
  return (
    <Flex width={[1, 1 / 2]} alignItems="center" flexWrap="wrap" p={3} bg={bg}>
      <P m={0} width={1 / 3} fontSize={9} fontWeight={4} color={color}>
        Aa
      </P>
      <P m={0} fontSize={9} fontWeight={4} width={1 / 3} color={color}>
        {contrastScore}
      </P>
      <Div
        alignSelf="center"
        width="auto"
        borderRadius={2}
        color={bg}
        bg={color}
        p={2}
        ml="auto"
      >
        <Span m={0} fontWeight={4} fontSize={5}>
          {rating}
        </Span>
      </Div>
      <P color={color}>
        Contrast is the difference in luminance or color that makes an object
        (or its representation in an image or display) distinguishable. In
        visual perception of the real world, contrast is determined by the
        difference in the color and brightness of the object and other objects
        within the same field of view.
      </P>
    </Flex>
  )
}

const ContrastModal = ({ color, handleClose }) =>
  color && (
    <Modal>
      <Flex
        style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0 }}
        bg="rgba(0,0,0,0.3)"
        onClick={() => handleClose(null)}
      >
        <Flex
          style={{
            position: "absolute",
            top: 40,
            bottom: 40,
            left: 40,
            right: 40
          }}
          flexWrap="wrap"
          alignItems={["flex-top", "center"]}
          onClick={() => handleClose(null)}
        >
          <ContrastPreview color={color} bg="#fff" />
          <ContrastPreview color={color} bg="#000" />
        </Flex>
      </Flex>
    </Modal>
  )

export default ContrastModal
