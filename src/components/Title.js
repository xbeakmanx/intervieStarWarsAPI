import {
  Text,
  Input,
  Flex,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import { handleSearchByName } from '../utils/search'
import Button from './Button'
import { SearchIcon } from '@chakra-ui/icons'

function Title({ value, setValue, setLoading, setActiveSearch, setData }) {
  return (
    <Flex
      justifyContent="space-between"
      width="100%"
      borderBottom="1px solid gray"
      pb="10px"
      flexDir={{ base: 'column', md: 'row' }}
      mx="20px"
    >
      <Text as="h1" fontSize="20px" mb="10px">
        Miembros
      </Text>
      <InputGroup size="md" width={{ base: '95%', md: '50%' }}>
        <Input
          pr="4.5rem"
          type="text"
          placeholder="Buscar por nombre"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <InputRightElement width="8.5rem">
          <Button
            text={
              <Flex alignItems="center" gap={2}>
                <Text display={{ base: 'none', md: 'block' }}>BUSCAR</Text>{' '}
                <SearchIcon />
              </Flex>
            }
            icon={true}
            onClick={() =>
              handleSearchByName(setLoading, value, setData, setActiveSearch)
            }
          />
        </InputRightElement>
      </InputGroup>
    </Flex>
  )
}

export default Title
