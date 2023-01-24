import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Text,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import DiscordIcon from '@components/icons/DiscordIcon'
import WebsiteIcon from '@components/icons/WebsiteIcon'
import Image from 'next/image'

import SectionHeader from '@components/shared/SectionHeader'
import UploadImage from '@components/shared/UploadImage'

import { discordPurple, primary, primaryHighlight } from '@constants/colors'
import { useCreateCommunityContext } from '@context/CreateCommunityContext'
import * as globalSty from '@styles'

import { Category } from '@components/queries/common'
import DroppinRadioGroup from '@components/shared/DroppinRadioGroup'
import { DAO_CATEGORIES } from '@constants/categories'
import * as sty from './CreateCommunityInfoForm.styles'
import { CreateCommunityInfoFormProps } from './CreateCommunityInfoForm.types'

const CreateCommunityInfoForm = ({ onNext, onPrev }: CreateCommunityInfoFormProps) => {
  const {
    localImgUrl,
    name,
    description,
    website,
    selectedCategory,
    setLocalImgUrl,
    setName,
    setDescription,
    setWebsite,
    setSelectedCategory,
  } = useCreateCommunityContext()

  const handleSelectCategory = (nextValue: string) => {
    setSelectedCategory(nextValue as Category)
  }

  return (
    <VStack align="left" width="100%" spacing={5}>
      <SectionHeader
        title="Tell us about your community"
        subtitle={
          <Text color={primary}>
            Share some basic info, like name of community and type of community
          </Text>
        }
      />
      <FormControl>
        <FormLabel>Logo image</FormLabel>
        <UploadImage onFileLoad={(uploaded: string) => setLocalImgUrl(uploaded)} />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Name</FormLabel>
        <Input
          variant="filled"
          placeholder="e.g. DroppinDAO"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Description</FormLabel>
        <FormHelperText css={[globalSty.helperText]}>
          Briefly describe your community
        </FormHelperText>
        <Textarea
          variant="filled"
          placeholder="e.g. DAO for Droppin Protocol Users"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Category</FormLabel>
        {/* <Wrap>
          {DAO_CATEGORIES.map((item, index) => (
            <WrapItem key={index}>
              <DroppinCheckbox isChecked={item === selectedCategory}>{item}</DroppinCheckbox>
            </WrapItem>
          ))}
        </Wrap> */}
        <DroppinRadioGroup
          options={DAO_CATEGORIES}
          onChange={handleSelectCategory}
          defaultValue={Category.Other}
        />
      </FormControl>

      <FormControl mt={4}>
        <FormLabel>Social connections</FormLabel>
        <FormHelperText css={[globalSty.helperText]}>
          Help people find and join your community by connecting social accounts ( also use for
          checking quest-conditions automatically )
        </FormHelperText>
        <VStack align="left">
          <Flex justifyContent={'space-between'}>
            <HStack>
              <DiscordIcon />
              <Text>Discord</Text>
            </HStack>
            <Button bg={discordPurple}>Connect Discord</Button>
          </Flex>
          <Flex justifyContent={'space-between'}>
            <HStack>
              <WebsiteIcon />
              <Text>Website</Text>
            </HStack>
            <Input
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="yoursite.io"
              ml={8}
              variant="filled"
            />
          </Flex>
        </VStack>
      </FormControl>

      {/* TODO: integrate current user data here */}
      <FormControl mt={4}>
        <FormLabel>Admin</FormLabel>
        <FormHelperText css={[globalSty.helperText]}>
          Admin can modify community settings
        </FormHelperText>
        <HStack spacing={3}>
          <Image
            src={'https://picsum.photos/200'}
            alt={'Admin image'}
            css={[sty.userImage]}
            width={32}
            height={32}
          />
          <Text>Pia</Text>
        </HStack>
      </FormControl>

      <Flex justifyContent="space-between" mt={8}>
        <Button
          onClick={onPrev}
          alignSelf="flex-end"
          bg={primary}
          _hover={{ bg: primaryHighlight }}
          size="lg"
        >
          Prev
        </Button>

        <Button
          onClick={onNext}
          alignSelf="flex-end"
          bg={primary}
          _hover={{ bg: primaryHighlight }}
          size="lg"
        >
          Next
        </Button>
      </Flex>
    </VStack>
  )
}

export default CreateCommunityInfoForm