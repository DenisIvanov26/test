'use client'

import { FC } from 'react';
import { Text, Flex } from '@chakra-ui/react';

const About: FC = () => {
  return (
    <div>
      <main>
        <Flex justifyContent="center" h="100vh" alignItems="center" bg="linear-gradient(to bottom, rgba(214,219,220,1) 0%, rgba(255,255,255,1) 100%)">
          <Text as="span" fontSize='8xl' color="blue">About Page</Text>
        </Flex>
      </main>
    </div>
  );
};

export default About;