import { FC, useState } from "react";
import { AdaptativeModal } from "../../common/AdaptativeModal";
import { Payslip } from "../../types";
import {
  Button,
  Text,
  Link,
  VStack,
  CircularProgress,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { Capacitor } from "@capacitor/core";
import downloadAndSaveFile from "./downloadAndSaveFile";
import { Toast } from "@capacitor/toast";
import { CloseIcon, DownloadIcon, TimeIcon, InfoIcon } from "@chakra-ui/icons";

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

  const textColor = useColorModeValue("gray.600", "gray.200");

  return (
    <AdaptativeModal isOpen={!!selectedPayslip} onClose={onClose}>
      <VStack p={8} spacing={5} align="stretch">
        <Text fontSize="2xl" fontWeight="bold" color="teal.500">
          Payslip Details
        </Text>
        <Divider />
        <Stat>
          <StatLabel color={textColor}>
            <Icon as={InfoIcon} mr={2} />
            Payslip ID
          </StatLabel>
          <StatNumber>{selectedPayslip?.id}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel color={textColor}>
            <Icon as={TimeIcon} mr={2} />
            Period
          </StatLabel>
          <StatNumber>
            {selectedPayslip?.fromDate} - {selectedPayslip?.toDate}
          </StatNumber>
        </Stat>
        <Divider />
        {Capacitor.isNativePlatform() ? (
          <Button
            leftIcon={
              isDownloading ? (
                <CircularProgress
                  isIndeterminate
                  size="24px"
                  color="blue.500"
                />
              ) : (
                <DownloadIcon />
              )
            }
            onClick={() =>
              selectedPayslip && onDownloadPayslip(selectedPayslip)
            }
            colorScheme="teal"
            isLoading={isDownloading}
            loadingText="Downloading..."
          >
            Download Payslip
          </Button>
        ) : (
          <Link href={selectedPayslip?.file} isExternal>
            <Button leftIcon={<DownloadIcon />} colorScheme="teal">
              Download Payslip
            </Button>
          </Link>
        )}
        <Button
          onClick={onClose}
          leftIcon={<CloseIcon />}
          variant="outline"
          colorScheme="teal"
        >
          Close
        </Button>
      </VStack>
    </AdaptativeModal>
  );
};

export { PayslipModal };
