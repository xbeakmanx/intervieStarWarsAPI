import { Box, Flex } from '@chakra-ui/react'
import { handleNextPage, handlePrevPage } from '../utils/pagination'
import Button from './Button'
function Pagination({ setLoading, setData, data }) {
  return (
    <Flex justifyContent="space-between" my="10px">
      <div></div>
      <Box marginRight="-12px">
        {data.previous && (
          <Button
            onClick={() => handlePrevPage(setLoading, setData, data)}
            text="ATRÁS"
          />
        )}
        {data.next && (
          <Button
            onClick={() => handleNextPage(setLoading, setData, data)}
            text="SIGUIENTE"
          />
        )}
      </Box>
    </Flex>
  )
}

export default Pagination
