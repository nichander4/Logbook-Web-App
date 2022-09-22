import { Fragment, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input, CustomInput } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap';
import { Edit } from 'react-feather';

const RejectPopUp = () => {
  const [basicModal, setBasicModal] = useState(false)

  return (
    <div className='demo-inline-spacing'>
      <div className='basic-modal'>
        <Button color='primary' outline onClick={() => setBasicModal(!basicModal)}>
          Reject Pop Up
        </Button>
        <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
          <ModalHeader className="modalHeaderTextRejectPopUp bg-primary" toggle={() => setBasicModal(!basicModal)}>Reject</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for='comment' className="modalBodyLabelTextRejectPopUp">Note</Label>
              <Input type='textarea' id='comment' placeholder='Placeholder' />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color='success' onClick={() => setBasicModal(!basicModal)}>
              Submit
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
export default RejectPopUp
