import { Text } from '@chakra-ui/react'

import type { SectionHeaderProps } from './SectionHeader.types'

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div>
      <Text fontSize="4xl" as="b">
        {title}
      </Text>
      <Text fontSize="xl">{subtitle}</Text>
    </div>
  )
}

export default SectionHeader
