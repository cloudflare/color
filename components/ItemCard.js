import React from "react"

const ItemCard = ({title, status, icon, iconColor, ...props}) => {
  return (
    <ModuleWrapperLink {...props}>
      <Span color="gray.2" fontWeight={600}>
        {title}
      </Span>
      <Flex width={1} mt={1}>
        <Icon type={icon} size={16} color={iconColor} />
        <Span ml={1} display='inline-block' fontSize={2} color='gray.4' style={{ textTransform: 'capitalize' }}>{status}</Span>
      </Flex> 
    </ModuleWrapperLink>
  )
}

ItemCard.defaultProps = {
  px: 3,
  py: 3,
  width: 1,
  status: 'active',
  icon: 'checkmark',
  iconColor: 'gray.4',
  title: 'component-library.com'
}

export default ItemCard
