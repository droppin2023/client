import { useRadioGroup, Wrap, WrapItem } from '@chakra-ui/react'
import DroppinRadioButton from './components/DroppinRadioButton'
import { DroppinRadioGroupProps } from './DroppinRadioGroup.types'

const DroppinRadioGroup = ({ options, defaultValue, onChange }: DroppinRadioGroupProps) => {
  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue,
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
