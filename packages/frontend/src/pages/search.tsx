import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftAddon,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react'
import 'twin.macro'

const SearchPage = () => {
  return (
    <>
      <VStack display="flex" justifyContent="center" alignItems="center">
        <Text fontSize="2xl">Engagement</Text>
        <Input placeholder="Search Community" />
        <HStack spacing={2}>
          <InputGroup size="sm">
            <InputLeftAddon>Min</InputLeftAddon>
            <Input placeholder="0" />
          </InputGroup>
          <InputGroup size="sm">
            <InputLeftAddon>Max</InputLeftAddon>
            <Input placeholder="100" />
          </InputGroup>
        </HStack>
      </VStack>
      <VStack>
        <Text fontSize="2xl">Badge</Text>
        <Input placeholder="Search Community" />
        <Input placeholder="Search Badge" />
      </VStack>

      <Button colorScheme="teal" size="lg">
        Search
      </Button>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </>
  )
}

export default SearchPage
