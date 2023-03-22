import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Stack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';


function App() {
  const date = new Date();
  const month = date.getMonth();
  const day = date.getDate();

  return (
    <ChakraProvider theme={theme}>
      <Box fontSize="xl" bgGradient='linear-gradient(rgba(34,193,195,0.8505602924763656) 0%, rgba(253,187,45,0.5116247182466737) 30%, transparent 40%)'>
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="150px" pointerEvents="none" borderRadius='xl' objectFit='cover' />
            <Stack spacing={2} textAlign="center">
              <Text fontSize='4xl'>
                Юлия
              </Text>
              <Text color='gray.500'>
                Kazan student
              </Text>
              <Text>
                <Code fontSize="xl">Illustrator</Code> <Code fontSize="xl">Content Manager</Code>
              </Text>
              <Text>
              {month === 0 && day === 26 ?
                (
                <Link href="https://vk.com/juli7n" color="teal.500" isExternal>А ты уже поздравил меня с ДР?</Link>
                ) : (
                <Link href="https://vk.com/juli7n" color="teal.500" isExternal>VK</Link>
                )
              }
              </Text>
            </Stack>
          </VStack>
        </Grid>
        <Text fontSize='1.5xl' textAlign='center' color='gray.500'>
          Made with <span role="img" aria-label="heart">❤️</span> by <Link href="https://vk.com/smmolnikov" color="teal.500" isExternal>@smmolnikov</Link>
        </Text>
      </Box>
    </ChakraProvider>
  );
}

export default App;
