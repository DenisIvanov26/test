import { Box, Flex } from "@chakra-ui/react"
import { color } from "framer-motion";
import { useState } from "react"

const CustomButtonwState = () => {

  const [counter, setCounter] = useState(0);
 
  const customButtonStyle = {
    as: 'button',
    fontWeight: 'bold',
    background: 'blue',
    padding: '8px 25px',
    borderRadius: '10px',
    color: 'white',
    width: '150px',
    textAlign: 'center'
  }

  const handleClick = () => {
    setCounter(counter + 1)
  }

  return (
    <>
      <Box style={customButtonStyle} onClick={handleClick}>Click Me<span>  {counter}</span></Box>
    </>
  )
}

export default CustomButtonwState
