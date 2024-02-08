import { Button, Box, List, ListItem, Text, Link } from "@chakra-ui/react";
import { useState } from "react";
import Sheet from "react-modal-sheet";
import { Payslip } from "./types";
import payslips from "./payslips";
import downloadAndSaveFile from "./downloadAndSaveFile";
import { Toast } from "@capacitor/toast";
import { Capacitor } from "@capacitor/core";

const Home = () => {
  const [selectedPayslip, setSelectedPayslip] = useState<Payslip | null>(null);

  const onOpenModal = (payslip: Payslip) => {
    setSelectedPayslip(payslip);
  };

  const onCloseModal = () => {
    setSelectedPayslip(null);
  };

  const onDownloadPayslip = (payslip: Payslip) => {
    downloadAndSaveFile(payslip.file, `Payslip-${payslip.id}.pdf`).then(() => {
      Toast.show({
        text: "Successfully downloaded payslip. Check with your files app.",
      });
    });
  };

  return (
    <Box margin="0 1rem 0 1rem" paddingTop="env(safe-area-inset-top)">
      <Text fontSize="xl">Payslips</Text>
      <List spacing={3}>
        {payslips.map((payslip) => (
          <ListItem key={payslip.id}>
            <Button onClick={() => onOpenModal(payslip)} m={4}>
              View Payslip {payslip.id}
            </Button>
          </ListItem>
        ))}
      </List>

      <Sheet isOpen={!!selectedPayslip} onClose={() => onCloseModal()}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <Text fontSize="lg">{selectedPayslip?.id}</Text>
            <Text fontSize="lg">
              {selectedPayslip?.fromDate} - {selectedPayslip?.toDate}
            </Text>
            {Capacitor.isNativePlatform() ? (
              <Button onClick={() => onDownloadPayslip(selectedPayslip!)} m={4}>
                Download Payslip
              </Button>
            ) : (
              <Link href={selectedPayslip?.file} isExternal download m={4}>
                <Button m={4}>Download Payslip</Button>
              </Link>
            )}
            <Button onClick={() => onCloseModal()} m={4}>
              Close Modal
            </Button>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onTap={() => onCloseModal()} />
      </Sheet>
    </Box>
  );
};

export { Home };
