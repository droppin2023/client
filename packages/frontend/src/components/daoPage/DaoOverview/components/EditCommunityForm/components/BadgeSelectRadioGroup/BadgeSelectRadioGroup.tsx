import { HStack, useRadioGroup } from '@chakra-ui/react'
import { BadgeSelectRadioGroupProps } from './BadgeSelectRadioGroup.types'
import BadgeSelectRadio from './components/BadgeSelectRadio'

const BadgeSelectRadioGroup = ({
  badges,
  onChange,
  defaultValue,
  value,
}: BadgeSelectRadioGroupProps) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'badges',
    defaultValue: defaultValue,
    onChange: onChange,
    value: value,
  })

  const group = getRootProps()

  return (
    <HStack spacing={3} overflowX="scroll" {...group}>
      {badges.map((item, index) => {
        const radio = getRadioProps({ value: item.name })
        return (
          <BadgeSelectRadio
            badge={{
              name: item.name,
              isLocked: false,
            }}
            key={index}
            {...radio}
          />
        )
      })}
    </HStack>
  )
}

export default BadgeSelectRadioGroup
