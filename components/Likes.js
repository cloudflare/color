import React, { useState } from "react"

const Likes = ({ likes, onSelectLike, onRemoveLike, onClearLikes }) => {
  const [modalOpen, toggleModal] = useState(false)
  const handleViewLike = i => () => onSelectLike(i)
  const handleRemoveLike = i => () => onRemoveLike(i)

  const handleDisplayModal = () => {
    toggleModal(true)
  }

  return (
    likes.length > 0 && (
      <>
        <Div width={1}>
          <Flex mt={5} mb={2}>
            <H4>Likes</H4>

            <TextButton px={2} onClick={onClearLikes} ml="auto">
              Clear all
            </TextButton>
          </Flex>

          <Div>
            {likes.map((like, i) => {
              const colors = Object.values(like)
              return (
                <Flex key={i} mb={1} style={{ cursor: "pointer" }}>
                  <Flex width={1} onClick={handleViewLike(i)}>
                    {colors.map((color, i) => (
                      <Div
                        width={1 / 4}
                        borderRight="4px solid white"
                        key={i}
                        py={3}
                        bg={color}
                      />
                    ))}
                  </Flex>
                  <TextButton px={2} onClick={handleRemoveLike(i)}>
                    Remove
                  </TextButton>
                </Flex>
              )
            })}
          </Div>
        </Div>

        <Div display="flex" mb={3}>
          <Button
            mt={2}
            width={1}
            bg="gray.3"
            color="white"
            border="none"
            fontWeight={700}
            px={3}
            py={2}
            borderRadius={2}
            fontSize={2}
            css={{ cursor: "pointer" }}
            onClick={handleDisplayModal}
          >
            Export Likes
          </Button>
          <LikesModal
            isOpen={modalOpen}
            likes={likes}
            toggleModal={toggleModal}
          />
        </Div>
      </>
    )
  )
}

export default Likes
