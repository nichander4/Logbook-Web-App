import { Fragment, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap';
import { Edit } from 'react-feather';

const DetailsPopUp = () => {
  const [basicModal, setBasicModal] = useState(false)

  return (
    <div className='demo-inline-spacing'>
      <div className='basic-modal'>
        <Button color='primary' outline onClick={() => setBasicModal(!basicModal)}>
          Details Pop Up - 1
        </Button>
        <Modal isOpen={basicModal} className='modal-sm' toggle={() => setBasicModal(!basicModal)}>
          <ModalHeader toggle={() => setBasicModal(!basicModal)}>Document Details</ModalHeader>
          <ModalBody>
            <div className='separatorDetailsPopUp1'>
              <t className='modalBodyTextDetailsPopUp1'>Entity</t>
              <p className='modalBodyParagraphDetailsPopUp1'>Lorem ipsum dolor sit amet consectetur adipiscing</p>
            </div>
            <div className='separatorDetailsPopUp1'>
              <t className='modalBodyTextDetailsPopUp1'>Core Process</t>
              <p className='modalBodyParagraphDetailsPopUp1'>Lorem ipsum dolor sit amet consectetur adipiscing</p>
            </div>
            <div className='separatorDetailsPopUp1'>
              <t className='modalBodyTextDetailsPopUp1'>Process</t>
              <p className='modalBodyParagraphDetailsPopUp1'>Lorem ipsum dolor sit amet consectetur adipiscing</p>
            </div>
            <div className='separatorDetailsPopUp1'>
              <t className='modalBodyTextDetailsPopUp1'>Entity</t>
              <p className='modalBodyParagraphDetailsPopUp1'>Lorem ipsum dolor sit amet consectetur adipiscing</p>
            </div>
          </ModalBody>
        </Modal>
      </div>
    </div>
  )
}
export default DetailsPopUp
