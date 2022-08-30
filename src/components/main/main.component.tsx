import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import * as React from "react";
import { IModalContext, ModalContext } from "../../context/modal.context";
import { BearList } from "../bear-list/bear-list.component";
import { Features } from "../features/features.component";
import { Footer } from "../footer/footer.component";
import { Home } from "../home/home.components";
import { HowItWorks } from "../how-it-works/how-it-works.component";
import { Install, Navbar } from "../navbar/navbar.component";
import { Roadmap } from "../roadmap/roadmap.component";

function ModalComponent(modalContext: IModalContext) {
  const components: { [key: string]: React.FC } = {
    install: Install,
  };

  let ContentComponent: React.FC | null = null;

  if (modalContext.modalState.componentName) {
    ContentComponent =
      components[modalContext.modalState.componentName as string];
  }
  return (
    <Modal
      isOpen={modalContext.modalState.isModalOpen}
      onClose={() =>
        modalContext.setModalState({
          ...modalContext.modalState,
          isModalOpen: false,
        })
      }
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{modalContext.modalState.modalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {ContentComponent && <ContentComponent></ContentComponent>}
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() =>
              modalContext.setModalState({
                ...modalContext.modalState,
                isModalOpen: false,
              })
            }
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export function Main() {
  const modalContext = React.useContext(ModalContext);

  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Features></Features>
      <HowItWorks></HowItWorks>
      <BearList></BearList>
      <Roadmap></Roadmap>
      <Footer></Footer>
      {modalContext?.modalState.isModalOpen && (
        <ModalComponent
          modalState={modalContext.modalState}
          setModalState={modalContext.setModalState}
        ></ModalComponent>
      )}
    </div>
  );
}
