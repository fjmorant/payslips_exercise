import {
  Button,
  Box,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { Payslip } from "../../types";
import payslips from "../../payslips";
import { PayslipModal } from "../payslip";
import { ViewIcon } from "@chakra-ui/icons";

const Home = () => {
  const [selectedPayslip, setSelectedPayslip] = useState<Payslip | null>(null);
  const bgColor = useColorModeValue("gray.50", "gray.700");
  const hoverBgColor = useColorModeValue("blue.500", "blue.300");

  const onOpenModal = (payslip: Payslip) => {
    setSelectedPayslip(payslip);
  };

  const onCloseModal = () => {
    setSelectedPayslip(null);
  };

  return (
    <Box
      paddingTop="env(safe-area-inset-top)"
      bg={bgColor}
      p={5}
      borderRadius="lg"
      shadow="md"
    >
      <Text fontSize="2xl" mb={4} fontWeight="bold">
        Payslips
      </Text>
      <List spacing={3}>
        {payslips.map((payslip) => (
          <ListItem key={payslip.id}>
            <Button
              onClick={() => onOpenModal(payslip)}
              leftIcon={<ViewIcon />}
              colorScheme="blue"
              variant="solid"
              m={2}
              _hover={{ bg: hoverBgColor }}
            >
              View Payslip {payslip.id}
            </Button>
          </ListItem>
        ))}
      </List>
      {selectedPayslip && (
        <PayslipModal
          selectedPayslip={selectedPayslip}
          onClose={onCloseModal}
        />
      )}
    </Box>
  );
};

export { Home };
