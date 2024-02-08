import { FC } from "react";
import { AdaptativeModal } from "../../common/AdaptativeModal";
import { Payslip } from "../../types";
import { Button, Text, Link } from "@chakra-ui/react";
import { Capacitor } from "@capacitor/core";
import downloadAndSaveFile from "./downloadAndSaveFile";
import { Toast } from "@capacitor/toast";

type Props = {
  selectedPayslip: Payslip | null;
  onClose: () => void;
};

const PayslipModal: FC<Props> = ({ selectedPayslip, onClose }) => {
  const onDownloadPayslip = (payslip: Payslip) => {
    downloadAndSaveFile(payslip.file, `Payslip-${payslip.id}.pdf`).then(() => {
      Toast.show({
        text: "Successfully downloaded payslip. Check with your files app.",
      });
    });
  };
  return (
    <AdaptativeModal isOpen={!!selectedPayslip} onClose={onClose}>
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
      <Button onClick={onClose} m={4}>
        Close Modal
      </Button>
    </AdaptativeModal>
  );
};

export { PayslipModal };
