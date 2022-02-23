import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      { showProfileData && (
        <Box
          mr="4"
          textAlign="right"
        >
          <Text>
            Luís Passos
          </Text>
          <Text 
            color="gray.300"
            fontSize="small"
          >
            luis.passos013@gmail.com
          </Text>
        </Box>
      )}
      <Avatar 
        size="md" 
        name="Luís Passos"
        src="https://github.com/luisspassos.png"
      />
    </Flex>
  )
}