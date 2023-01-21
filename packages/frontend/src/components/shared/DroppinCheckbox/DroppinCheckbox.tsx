import { Box, chakra, CheckboxProps, Text, useCheckbox } from '@chakra-ui/react'
import { orange, secondaryWeak } from '@constants/colors'

const DroppinCheckbox = (props: CheckboxProps) => {
  const { children } = props

  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } = useCheckbox(props)

  return (
    <chakra.label {...htmlProps} cursor="pointer">
      <input {...getInputProps()} hidden />
      <Box
        padding="4px 16px"
        bg={state.isChecked ? orange : secondaryWeak}
        border={`2px solid ${orange}`}
        borderRadius="8px"
        {...getCheckboxProps()}
      >
        <Text as="b" {...getLabelProps()}>
          {children}
        </Text>
      </Box>
    </chakra.label>
  )
}

export default DroppinCheckbox
