import {
  Button,
  Box,
  SimpleGrid,
  Text,
  useColorModeValue,
  Flex,
  Badge,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import { Payslip } from "../../types";
import { payslips } from "../../payslips";
import { PayslipModal } from "../payslip";
import { ViewIcon } from "@chakra-ui/icons";
import { FaIdCard } from "react-icons/fa";

const Home = () => {
  const [selectedPayslip, setSelectedPayslip] = useState<Payslip | null>(null);
  const bgGradient = useColorModeValue(
    "linear(to-br, teal.50, blue.50)",
    "linear(to-br, teal.700, blue.700)"
  );

  const boxBackgroundColor = useColorModeValue("white", "gray.800");

  const onOpenModal = (payslip: Payslip) => {
    setSelectedPayslip(payslip);
  };

  const onCloseModal = () => {
    setSelectedPayslip(null);
  };

  return (
    <Box
      paddingTop="env(safe-area-inset-top)"
      paddingBottom="env(safe-area-inset-bottom)"
      paddingX={3}
      bgGradient={bgGradient}
      height={"100vh"}
    >
      <Text
        fontSize="3xl"
        mb={6}
        fontWeight="bold"
        textAlign="center"
        color="teal.600"
      >
        Payslips
      </Text>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3 }}
        spacing={5}
        paddingBottom="env(safe-area-inset-bottom)"
      >
        {payslips.map((payslip) => (
          <Box
            key={payslip.id}
            p={4}
            shadow="md"
            borderRadius="md"
            bg={boxBackgroundColor}
            _hover={{ shadow: "lg" }}
          >
            <Badge colorScheme="teal" p={2} borderRadius="lg">
              <Icon as={FaIdCard} mr={2} />
              {`#${payslip.id}`}
            </Badge>
            <Flex justifyContent="flex-end">
              <Button
                leftIcon={<ViewIcon />}
                colorScheme="teal"
                variant="outline"
                onClick={() => onOpenModal(payslip)}
                mr={2}
              >
                View
              </Button>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
      <PayslipModal selectedPayslip={selectedPayslip} onClose={onCloseModal} />
    </Box>
  );
};

export { Home };
