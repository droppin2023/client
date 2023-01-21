import Image from 'next/image'
import type { ChangeEvent } from 'react'
import { useRef, useState } from 'react'

import { Flex, Input } from '@chakra-ui/react'

import { background2, primary } from '@constants/colors'

import placeholder from './assets/placeholder.svg'
import * as sty from './UploadImage.styles'
import { UploadImageProps } from './UploadImage.types'

/**
 * Button to upload and preview images
 * @date 1/19/2023 - 11:14:42 PM
 *
 * @param {(img: string) => void} onFileLoad callback function to handle the uploaded image when uploaded
 * @param {string | undefined} width - width of the button, defaults to 200px
 * @param {string | undefined} height - height of the button, defaults to 200px
 * @param {string | undefined} margin - margins of the button
 */
const UploadImage = ({
  onFileLoad,
  width = '200px',
  height = '200px',
  margin,
  loaded = '',
}: UploadImageProps) => {
  const [loadedImg, setLoadedImg] = useState<string>(loaded)

  const hiddenInputRef = useRef<HTMLInputElement>(null)

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const uploadedFilePath = URL.createObjectURL(e.target.files[0])
      setLoadedImg(uploadedFilePath)
      onFileLoad(uploadedFilePath)
    }
  }

  return (
    <>
      <Flex
        bg={background2}
        color={primary}
        width={width}
        height={height}
        margin={margin}
        borderRadius="20px"
        border={`2px dashed ${primary}`}
        direction="column"
        alignItems="center"
        justifyContent="center"
        onClick={() => hiddenInputRef.current?.click()}
        position="relative"
        _hover={{
          cursor: 'pointer',
        }}
      >
        {/* TODO: URL and staticimagedata conversion */}
        <Image
          src={loadedImg.length > 0 ? loadedImg : placeholder}
          alt="Uploaded Image"
          fill
          css={[sty.imgPreview]}
        />
      </Flex>
      <Input
        type="file"
        accept="image/*"
        display="none"
        ref={hiddenInputRef}
        onChange={handleUpload}
      />
    </>
  )
}

export default UploadImage
