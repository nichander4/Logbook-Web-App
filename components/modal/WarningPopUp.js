import { Fragment, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap';
import { Edit } from 'react-feather';

const WarningPopUp = () => {
  const [basicModal, setBasicModal] = useState(false)

  return (
    <div className='demo-inline-spacing'>
      <div className='basic-modal'>
        <Button color='primary' outline onClick={() => setBasicModal(!basicModal)}>
          Warning Pop Up
        </Button>
        <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
          <ModalHeader className="modalHeaderTextWarningPopUp bg-warning" toggle={() => setBasicModal(!basicModal)}>Warning</ModalHeader>
          <ModalBody>
            <div className="modalBodyTextWarningPopUp">
              <t>Please upload your document!</t>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color='secondary' onClick={() => setBasicModal(!basicModal)}>
              OK
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  )
}
export default WarningPopUp
