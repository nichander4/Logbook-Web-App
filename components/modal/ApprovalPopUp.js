import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, FormGroup, Input, CustomInput } from 'reactstrap'

const ApprovalPopUp = () => {
  const [formModal, setFormModal] = useState(false)
  const [scrollModal, setScrollModal] = useState(false)
  const [scrollInnerModal, setScrollInnerModal] = useState(false)

  return (
    <div className='demo-inline-spacing'>
      <div className='basic-modal'>
        <Button color='primary' outline onClick={() => setFormModal(!formModal)}>
          Approval Pop Up
        </Button>
        <Modal isOpen={formModal} toggle={() => setFormModal(!formModal)}>
          <ModalHeader className="modalHeaderTextApprovalPopUp" style={{ backgroundColor:"#3B85F8" }} toggle={() => setFormModal(!formModal)}>Approval</ModalHeader>
          <ModalBody>
            <div className="modalBodyTextApprovalPopUp">
              <t>Approve</t>
            </div>
            <div>
              <CustomInput inline type='checkbox' id='yesBox' label='Yes' defaultChecked />
              <CustomInput inline type='checkbox' id='noBox' label='No' />
            </div>
            <div className="separatorApprovalPopUp">
              <FormGroup>
                <Label for='comment'>Comment</Label>
                <Input type='textarea' id='comment' placeholder='Placeholder' />
              </FormGroup>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setFormModal(!formModal)}>
              Login
            </Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    </div>
  )
}
export default ApprovalPopUp
