import { FC, useState } from "react";
import { AdaptativeModal } from "../../common/AdaptativeModal";
import { Payslip } from "../../types";
import { Button, Text, Link, VStack } from "@chakra-ui/react";
import { Capacitor } from "@capacitor/core";
import downloadAndSaveFile from "./downloadAndSaveFile";
import { Toast } from "@capacitor/toast";

type Props = {
  selectedPayslip: Payslip | null;
  onClose: () => void;
};

const PayslipModal: FC<Props> = ({ selectedPayslip, onClose }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const onDownloadPayslip = async (payslip: Payslip) => {
    setIsDownloading(true);
    try {
      await downloadAndSaveFile(payslip.file, `Payslip-${payslip.id}.pdf`);
      Toast.show({
        text: "Successfully downloaded payslip. Check with your files app.",
      });
    } catch (error) {
      Toast.show({
        text: "There was an issue downloading the payslip.",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <AdaptativeModal isOpen={!!selectedPayslip} onClose={onClose}>
      <VStack spacing={4} align="stretch">
        <Text fontSize="xl" fontWeight="bold">
          Payslip Details
        </Text>
        <Text fontSize="md">{selectedPayslip?.id}</Text>
        <Text fontSize="md">
          {selectedPayslip?.fromDate} - {selectedPayslip?.toDate}
        </Text>
        {Capacitor.isNativePlatform() ? (
          <Button
            onClick={() =>
              selectedPayslip && onDownloadPayslip(selectedPayslip)
            }
            isLoading={isDownloading}
            loadingText="Downloading..."
            colorScheme="blue"
            m={4}
          >
            Download Payslip
          </Button>
        ) : (
          <Link href={selectedPayslip?.file} isExternal download>
            <Button m={4} colorScheme="blue">
              Download Payslip
            </Button>
          </Link>
        )}
        <Button onClick={onClose} m={4} variant="ghost">
          Close
        </Button>
      </VStack>
    </AdaptativeModal>
  );
};

export { PayslipModal };
