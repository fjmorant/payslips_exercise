import { Capacitor } from "@capacitor/core";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC } from "react";
import Sheet from "react-modal-sheet";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const AdaptativeModal: FC<Props> = ({ isOpen, onClose, children }) => {
  if (Capacitor.isNativePlatform()) {
    return (
      <Sheet isOpen={isOpen} onClose={onClose}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>{children}</Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop onTap={onClose} />
      </Sheet>
    );
  }

  return (
    <Modal onClose={onClose} size={"lg"} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export { AdaptativeModal };
