import { useState } from 'react'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Container,
  Stack,
  Skeleton,
} from '@chakra-ui/react'

import useFetch from './hooks/useFetch'
import Title from './components/Title'
import Clean from './components/Clean'
import Pagination from './components/Pagination'

function App() {
  const [value, setValue] = useState('')
  const [erase, setErase] = useState(false)
  const [textApi, setTextApi] = useState('https://swapi.dev/api/people')
  const [activeSearch, setActiveSearch] = useState(false)
  const { data, loading, setLoading, setData } = useFetch(
    erase,
    setErase,
    textApi
  )
  return (
    <div className="App">
      <Container my="20px" maxW="1300px">
        <Title
          value={value}
          setValue={setValue}
          setLoading={setLoading}
          setActiveSearch={setActiveSearch}
          setData={setData}
        />
        {activeSearch && (
          <Clean
            value={value}
            setActiveSearch={setActiveSearch}
            setValue={setValue}
            setErase={setErase}
            setTextApi={setTextApi}
          />
        )}

        <Pagination setLoading={setLoading} setData={setData} data={data} />
        {loading ? (
          <Stack mt="10px">
            <Skeleton height="30px" mb="10px" />
            <Skeleton height="30px" mb="10px" />
            <Skeleton height="30px" mb="10px" />
          </Stack>
        ) : (
          <TableContainer>
            <Table variant="unstyled">
              <Thead>
                <Tr>
                  <Th>Nombre</Th>
                  <Th>Género</Th>
                  <Th>Altura</Th>
                  <Th>Peso</Th>
                  <Th>Color de piel</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.results?.map((el, index) => (
                  <Tr
                    key={`${el.birth_year} -- ${index}`}
                    boxShadow="xs"
                    m="5px"
                  >
                    <Td>{el.name}</Td>
                    <Td>{el.gender}</Td>
                    <Td>{el.height}</Td>
                    <Td>{el.mass}</Td>
                    <Td>{el.skin_color}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}
      </Container>
    </div>
  )
}

export default App
