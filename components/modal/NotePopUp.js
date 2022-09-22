import { Fragment, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input, CustomInput } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap';
import { Edit } from 'react-feather';

const NotePopUp = () => {
  const [basicModal, setBasicModal] = useState(false)

  return (
    <div className='demo-inline-spacing'>
      <div className='basic-modal'>
        <Button color='primary' outline onClick={() => setBasicModal(!basicModal)}>
          Note Pop Up
        </Button>
        <Modal isOpen={basicModal} toggle={() => setBasicModal(!basicModal)}>
          <ModalHeader className="modalHeaderTextNotePopUp bg-primary" toggle={() => setBasicModal(!basicModal)}>Note</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for='comment' className="modalBodyLabelTextNotePopUp">Placeholder</Label>
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
export default NotePopUp
