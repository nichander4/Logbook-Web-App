import { Fragment, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap';
import { Edit } from 'react-feather';

const ApprovePopUp = () => {
  const [basicModal, setBasicModal] = useState(false)

  return (
    <div className='demo-inline-spacing'>
      <div className='basic-modal'>
        <Button color='primary' outline onClick={() => setBasicModal(!basicModal)}>
          Approve Pop Up
        </Button>
        <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
          <ModalHeader className="modalHeaderTextApprovePopUp" style={{ backgroundColor: "#3B85F8" }} toggle={() => setBasicModal(!basicModal)}>Approve</ModalHeader>
          <ModalBody>
            <div className="modalBodyTextApprovePopUp">
              <t>Are you sure want to approve this document?</t>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color='success' onClick={() => setBasicModal(!basicModal)}>
              Yes, Approve
            </Button>
            <Button color='danger' outline onClick={() => setBasicModal(!basicModal)}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  )
}
export default ApprovePopUp
