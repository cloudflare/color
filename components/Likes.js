import React, { useState } from "react"

const Likes = ({ likes, onSelectLike, onRemoveLike }) => {
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
          <H4 mt={5} mb={2}>
            Likes
          </H4>

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

        <Div display="flex">
          <ButtonOutline
            mt={2}
            width={1}
            bg="gray.8"
            color="gray.1"
            borderColor="gray.7"
            onClick={handleDisplayModal}
          >
            Export Likes
          </ButtonOutline>
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
