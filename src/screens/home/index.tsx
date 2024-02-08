import { Button, Box, List, ListItem, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Payslip } from "../../types";
import payslips from "../../payslips";
import { PayslipModal } from "../payslip";

const Home = () => {
  const [selectedPayslip, setSelectedPayslip] = useState<Payslip | null>(null);

  const onOpenModal = (payslip: Payslip) => {
    setSelectedPayslip(payslip);
  };

  const onCloseModal = () => {
    setSelectedPayslip(null);
  };

  return (
    <Box margin="0 1rem 0 1rem" paddingTop="env(safe-area-inset-top)">
      <Text fontSize="xl">Payslips Test</Text>
      <List spacing={3}>
        {payslips.map((payslip) => (
          <ListItem key={payslip.id}>
            <Button onClick={() => onOpenModal(payslip)} m={4}>
              View Payslip {payslip.id}
            </Button>
          </ListItem>
        ))}
      </List>
      <PayslipModal selectedPayslip={selectedPayslip} onClose={onCloseModal} />
    </Box>
  );
};

export { Home };
