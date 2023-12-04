import { Box } from '@chakra-ui/react'

function Button({ text, icon, ...rest }) {
  return (
    <button
      style={{
        borderRadius: '10px',
        backgroundColor: '#3da2ea',
        color: 'white',
        marginRight: '5px',
      }}
      {...rest}
    >
      <Box
        px={{ base: icon ? '20px' : '30px', md: '30px' }}
        py={{ base: icon ? '10px' : '3px', md: '3px' }}
        fontSize="12px"
        fontWeight={600}
      >
        {text}
      </Box>
    </button>
  )
}

export default Button
