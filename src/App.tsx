import { defaultSystem } from "@chakra-ui/react/preset";
import { ChakraProvider } from "@chakra-ui/react/styled-system";
import "./App.css";
import { Button, Menu, Portal, Toaster, toaster } from "./components";

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Toaster />
      <Button
        size="2xl"
        onClick={() => {
          toaster.create({
            title: "Hello World",
            description: "This is a toast message",
            duration: 5000,
            type: "success",
            closable: true,
            placement: "top-start",
          });
        }}
      >
        Show Toast
      </Button>

      <Button
        colorPalette="red"
        bgColor="red.500"
        variant="plain"
        borderRadius="2xl"
      >
        New Invoice
      </Button>

      <Menu.Root positioning={{ placement: "top" }}>
        <Menu.Trigger colorPalette="red" asChild>
          <Button variant="surface" colorPalette="red">
            Open Menu
          </Button>
        </Menu.Trigger>

        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              <Menu.Item value="item-1">Item 1</Menu.Item>

              <Menu.Separator />

              <Menu.Item value="item-2">Item 2</Menu.Item>
              <Menu.Item value="item-3">Item 3</Menu.Item>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </ChakraProvider>
  );
}

export default App;
