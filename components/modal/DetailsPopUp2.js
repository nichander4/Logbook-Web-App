import { Fragment, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert } from 'reactstrap'
import { Container, Row, Col } from 'reactstrap';
import { Edit } from 'react-feather';

const DetailsPopUp2 = () => {
  const [basicModal, setBasicModal] = useState(false)

  return (
    <div className='demo-inline-spacing'>
      <div className='basic-modal'>
        <Button color='primary' outline onClick={() => setBasicModal(!basicModal)}>
          Details Pop Up - 2
        </Button>
        <Modal isOpen={basicModal} className='modal-lg' toggle={() => setBasicModal(!basicModal)}>
          <ModalHeader toggle={() => setBasicModal(!basicModal)}>Document Details</ModalHeader>
          <ModalBody>
            <div className="modalBodyTitleDetailsPopUp2">
              <div>
                <t className="modalBodyTitleTextDetailsPopUp2">Exploring Idea</t>
              </div>
            </div>
            <div className="separatorDetailsPopUp2">
              <t className="grayedOutTextDetailsPopUp2">Current Action</t>
            </div>
            <div className="separatorDetailsPopUp2">
              <Row>
                <Col>
                  <t className="segmentDetailsPopUp2">Protective</t>
                  <div className="separatorDetailsPopUp2">
                    <ul>
                      <li>Bekerja sama dengan  praktisi, konsultan, lembaga penelitian dan kampus  (dengan MoU)</li>
                      <li className="separatorDetailsPopUp2">Mengikuti pameran dan seminar nasional & international untuk berdiskusi dengan ahli</li>
                    </ul>
                  </div>
                </Col>
                <Col>
                  <t className="segmentDetailsPopUp2">Preventive</t>
                  <div className="separatorDetailsPopUp2">
                    <ul>
                      <li>Bekerja sama dengan  praktisi, konsultan, lembaga penelitian dan kampus  (dengan MoU)</li>
                      <li className="separatorDetailsPopUp2">Mengikuti pameran dan seminar nasional & international untuk berdiskusi dengan ahli</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color='primary' onClick={() => setBasicModal(!basicModal)}>
              <Edit /><t className="editButtonTextDetailsPopUp2">Edit</t>
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </div>
  )
}
export default DetailsPopUp2
