import {
  Container,
  Text,
  useColorMode,
  Button,
  IconButton,
  Switch,
  Icon,
} from "@chakra-ui/react";

import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container
      my="40px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text>Hello User</Text>
      <Button my="20px" onClick={toggleColorMode}>
        {colorMode === "light" ? "Dark" : "Light"}
      </Button>

      <Switch
        onChange={toggleColorMode}
        isChecked={colorMode === "light" ? true : false}
      />
      
      {colorMode === "light" ? (
        <IconButton
          my="20px"
          isRound
          color="gray.800"
          icon={<MoonIcon />}
          variant="outline"
          onClick={toggleColorMode}
        />
      ) : (
        <IconButton
          my="20px"
          isRound
          color="yellow.500"
          icon={<SunIcon />}
          variant="outline"
          onClick={toggleColorMode}
        />
      )}
    </Container>
  );
}
