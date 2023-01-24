import { Box, chakra, RadioProps, Text, useRadio } from '@chakra-ui/react'
import { background2, orange } from '@constants/colors'

const DroppinRadioButton = (props: RadioProps) => {
  const { children } = props

  const { state, getCheckboxProps, getInputProps, getLabelProps, htmlProps } = useRadio(props)

  return (
    <chakra.label {...htmlProps} cursor="pointer">
      <input {...getInputProps()} hidden />
      <Box
        padding="4px 16px"
        bg={state.isChecked ? orange : background2}
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

export default DroppinRadioButton
