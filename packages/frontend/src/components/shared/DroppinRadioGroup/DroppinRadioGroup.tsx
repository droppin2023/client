import { useRadioGroup, Wrap, WrapItem } from '@chakra-ui/react'
import DroppinRadioButton from './components/DroppinRadioButton'
import { DroppinRadioGroupProps } from './DroppinRadioGroup.types'

const DroppinRadioGroup = ({ options, defaultValue, value, onChange }: DroppinRadioGroupProps) => {
  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue,
    value,
    onChange,
  })

  return (
    <Wrap {...getRootProps()}>
      {options.map((item, index) => (
        <WrapItem key={index}>
          <DroppinRadioButton {...getRadioProps({ value: item })}>{item}</DroppinRadioButton>
        </WrapItem>
      ))}
    </Wrap>
  )
}

export default DroppinRadioGroup
