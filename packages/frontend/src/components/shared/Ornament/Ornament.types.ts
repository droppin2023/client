// TODO: add more variants

export interface OrnamentPosition {
  top?: string
  bottom?: string
  left?: string
  right?: string
}

export type OrnamentVariants = 'stars'

export type OrnamentProps = { variant: OrnamentVariants } & OrnamentPosition
