import { Box, chakra, useRadio, VStack } from '@chakra-ui/react'
import QuestBadge from '@components/shared/QuestBadge'

import { primary, secondary } from '@constants/colors'

import type { BadgeSelectRadioProps } from './BadgeSelectRadio.types'

const BadgeSelectRadio = (props: BadgeSelectRadioProps) => {
  const { badge, ...restProps } = props
  const { img, name, daoName, recentActivity, minter, isLocked, lockedMessage } = badge
  const { state, getInputProps, getCheckboxProps, htmlProps, getLabelProps } = useRadio(restProps)

  return (
    <chakra.label {...htmlProps} cursor="pointer">
      <input {...getInputProps()} hidden />
      <VStack spacing={3}>
        <QuestBadge {...getLabelProps()} name={name} img={img} isLocked={false} />
        <Box
          width="32px"
          height="32px"
          backgroundColor={state.isChecked ? primary : secondary}
          border={`8px solid ${secondary}`}
          borderRadius="9999px"
          margin="0 0 12px 0"
          {...getCheckboxProps()}
        ></Box>
      </VStack>
    </chakra.label>
  )
}

export default BadgeSelectRadio
