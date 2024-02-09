import { FC, useCallback, useState } from "react";
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
import { downloadAndSaveFile } from "./downloadAndSaveFile";
import { Toast } from "@capacitor/toast";
import { CloseIcon, DownloadIcon, TimeIcon, InfoIcon } from "@chakra-ui/icons";
import { strings } from "../../strings";

type Props = {
  selectedPayslip: Payslip | null;
  onClose: () => void;
};

const PayslipModal: FC<Props> = ({ selectedPayslip, onClose }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const textColor = useColorModeValue("gray.600", "gray.200");

  const onPressDownload = useCallback(() => {
    const onDownloadPayslip = async (payslip: Payslip) => {
      setIsDownloading(true);
      try {
        const result = await downloadAndSaveFile(
          payslip.file,
          `Payslip-${payslip.id}.pdf`
        );

        if (!result) {
          Toast.show({
            text: strings.error_download,
          });
        }
        Toast.show({
          text: strings.success_download,
        });
      } catch (error: any) {
        Toast.show({
          text: strings.error_download,
        });
      } finally {
        setIsDownloading(false);
      }
    };

    if (selectedPayslip) {
      onDownloadPayslip(selectedPayslip);
    }
  }, [selectedPayslip]);

  return (
    <AdaptativeModal isOpen={!!selectedPayslip} onClose={onClose}>
      <VStack p={8} spacing={5} align="stretch">
        <Text fontSize="2xl" fontWeight="bold" color="teal.500">
          {strings.titles.details}
        </Text>
        <Divider />
        <Stat>
          <StatLabel color={textColor}>
            <Icon as={InfoIcon} mr={2} />
            {strings.labels.payslip_id}
          </StatLabel>
          <StatNumber>{selectedPayslip?.id}</StatNumber>
        </Stat>
        <Stat>
          <StatLabel color={textColor}>
            <Icon as={TimeIcon} mr={2} />
            {strings.labels.period}
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
            onClick={onPressDownload}
            colorScheme="teal"
            isLoading={isDownloading}
          >
            {strings.buttons.download_payslip}
          </Button>
        ) : (
          <Link href={selectedPayslip?.file} isExternal>
            <Button leftIcon={<DownloadIcon />} colorScheme="teal">
              {strings.buttons.download_payslip}
            </Button>
          </Link>
        )}
        <Button
          onClick={onClose}
          leftIcon={<CloseIcon />}
          variant="outline"
          colorScheme="teal"
        >
          {strings.buttons.close}
        </Button>
      </VStack>
    </AdaptativeModal>
  );
};

export { PayslipModal };
