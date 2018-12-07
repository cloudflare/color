import React from "react"
import TextButton from "./TextButton"

const Likes = ({ likes, onSelectLike, onRemoveLike }) => {
  const handleViewLike = i => () => onSelectLike(i)
  const handleRemoveLike = i => () => onRemoveLike(i)

  const dataStr = `data:text/json;charset=utf-8,${encodeURIComponent(
    JSON.stringify(likes)
  )}`

  return (
    likes.length > 0 && (
      <>
        <Div width={1}>
          <H4 mt={5} mb={2}>
            Likes
          </H4>

          <Div>
            {likes.map((like, i) => {
              const colors = Object.values(like)
              return (
                <Flex
                  key={i}
                  onClick={handleViewLike(i)}
                  width={1}
                  mb={1}
                  style={{ cursor: "pointer" }}
                >
                  {colors.map((color, i) => (
                    <Div
                      width={1 / 4}
                      borderRight="4px solid white"
                      key={i}
                      py={3}
                      bg={color}
                    />
                  ))}
                  <TextButton px={2} onClick={handleRemoveLike(i)}>
                    Remove
                  </TextButton>
                </Flex>
              )
            })}
          </Div>
        </Div>

        <ButtonOutline
          mt={3}
          width={1}
          bg="transparent"
          color="white"
          borderColor="white"
          download="likes.json"
          href={dataStr}
        >
          Export Likes as JSON
        </ButtonOutline>
      </>
    )
  )
}

export default Likes
