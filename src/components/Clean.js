import { Box, Text } from '@chakra-ui/react'
import Button from './Button'

function Clean({ value, setActiveSearch, setValue, setErase, setTextApi }) {
  return (
    <Box marginTop="20px" display={'flex'}>
      <Text mr="10px">Resultados para la busqueda de: {value}</Text>
      <Button
        text="LIMPIAR"
        onClick={() => {
          setActiveSearch(false)
          setValue('')
          setErase(true)
          setTextApi(`https://swapi.dev/api/people`)
        }}
      />
    </Box>
  )
}

export default Clean
