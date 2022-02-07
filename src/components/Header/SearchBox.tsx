import { Flex, Input, Icon } from "@chakra-ui/react";
import { useRef } from "react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {

  const searchInputRef = useRef<HTMLInputElement>(null)
  return (
    <Flex
      as="label"
      maxWidth={400}
      color="gray.200"
      position="relative"
      bg="gray.800"
      borderRadius="full"
      alignSelf="center"
      flex="1"
      py="4"
      px="8"
      ml="6"
    >
      < Input
        color="gray.50"
        variant="unstyled"
        px="4"
        mr="4"
        placeholder="Buscar na plataforma"
        __placeholder={{ color: 'gray.400' }}
        ref={searchInputRef}
      />
      <Icon as={RiSearchLine} fontSize="20"></Icon>

    </Flex>

  );
}