import { useFormik } from 'formik';
import {
  Button,
  Col,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row
} from 'reactstrap';
import styles from 'styles/scrollbarTable.module.css';
import * as Yup from 'yup';
import Flatpickr from 'react-flatpickr';
import moment from 'moment';
import ReactSelect from 'react-select';
import { useDispatch } from 'react-redux';
import { entryLogbook } from 'redux/actions/intern_action';
import { reauthenticate } from 'redux/actions/auth';

const logbookModal = ({
  entryModal,
  btnEntry_click,
  item,
  token,
  btnSave_click
}) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    // initial values
    initialValues: {
      id: item.id,
      logbookId: item.logbookId,
      date: item.date,
      activity: item.activity || '',
      jamMasuk: item.jamMasuk || new Date(),
      jamKeluar: item.jamKeluar || new Date(),
      isWorkFromOffice: item.isWorkFromOffice || false
    },
    // validation schema
    validationSchema:
      // Yup.object({
      //   activity: Yup.string().required('Activity Cannot be Empty'),
      //   jamMasuk: Yup.date().required('Check in Cannot be Empty'),
      //   jamKeluar: Yup.date().required('Check out Cannot be Empty')
      // }),
      Yup.object().shape({
        activity: Yup.string().required('Activity Cannot be Empty'),
        jamMasuk: Yup.date().required('Check in Cannot be Empty'),
        jamKeluar: Yup.date()
          .required('Check out Cannot be Empty')
          .min(Yup.ref('jamMasuk'), "Check Out can't be before than Check In")
      }),

    // handle submission
    onSubmit: (e) => {
      e.jamMasuk = moment(e.jamMasuk).format('YYYY-MM-DDTHH:mm:ss');
      e.jamKeluar = moment(e.jamKeluar).format('YYYY-MM-DDTHH:mm:ss');
      btnSave_click(e.id, e);
    }
  });

  const options = [
    { value: true, label: 'WFO' },
    { value: false, label: 'WFH' }
  ];

  const OffValue = () => {
    formik.setFieldValue('activity', 'OFF');
    formik.setFieldValue('jamMasuk', new Date());
    formik.setFieldValue('jamKeluar', new Date());
    formik.setFieldValue('isWorkFromOffice', false);
  };
  return (
    <Modal
      centered
      fullscreen="md"
      scrollable
      size="md"
      isOpen={entryModal}
      toggle={btnEntry_click}
    >
      <ModalHeader toggle={btnEntry_click} className="bg-primary">
        {item.activity == null ? (
          <div className="text-white">Entry Log Book</div>
        ) : (
          <div className="text-white">Edit Log Book</div>
        )}
      </ModalHeader>
      <ModalBody>
        <Row>
          <Col>
            <FormGroup>
              <Label for="nameVertical">Check in</Label>
              <Flatpickr
                name="jamMasuk"
                id="jamMasuk"
                className={`check_inField form-control datepicker-table2 ${
                  formik.touched.jamMasuk &&
                  formik.errors.jamMasuk &&
                  ' is-invalid'
                }`}
                // placeholder="MM/DD/YYYY"
                value={new Date(formik.values.jamMasuk)}
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: 'H:i',
                  time_24hr: true
                }}
                onChange={(date) => {
                  formik.setFieldValue('jamMasuk', date[0]);
                }}
              />
            </FormGroup>
          </Col>

          <Col>
            <FormGroup>
              <Label for="nameVertical">Check out</Label>
              <Flatpickr
                name="jamKeluar"
                id="jamKeluar"
                className={`check_outField form-control datepicker-table2 ${
                  formik.touched.jamKeluar &&
                  formik.errors.jamKeluar &&
                  ' is-invalid'
                }`}
                // placeholder="MM/DD/YYYY"
                value={new Date(formik.values.jamKeluar)}
                options={{
                  enableTime: true,
                  noCalendar: true,
                  dateFormat: 'H:i',
                  time_24hr: true
                }}
                onChange={(date) => {
                  formik.setFieldValue('jamKeluar', date[0]);
                }}
              />
              {formik.touched.jamKeluar && formik.errors.jamKeluar && (
                <div className="invalid-feedback text-nowrap">
                  {formik.errors.jamKeluar}
                </div>
              )}
            </FormGroup>
          </Col>
        </Row>

        <FormGroup>
          <Label for="nameVertical">WFO/WFH</Label>
          <ReactSelect
            className="WfoWfhField"
            options={options}
            value={{
              value: formik.values.isWorkFromOffice,
              label: formik.values.isWorkFromOffice ? 'WFO' : 'WFH'
            }}
            onChange={(value) => {
              formik.setFieldValue('isWorkFromOffice', value.value);
            }}
          />
        </FormGroup>

        <FormGroup>
          <Label for="nameVertical">Activity</Label>
          <Input
            className={`activityField ${
              formik.touched.activity && formik.errors.activity && ' is-invalid'
            }`}
            id={styles.textarea}
            name="retrunReason"
            type="textarea"
            placeholder="Placeholder"
            rows="6"
            style={{ resize: 'none' }}
            value={formik.values.activity}
            onChange={(e) => {
              formik.setFieldValue('activity', e.target.value);
            }}
          />
          {formik.touched.activity && formik.errors.activity && (
            <div className="invalid-feedback">{formik.errors.activity}</div>
          )}
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button
          className="d-flex ml-auto"
          color="primary"
          onClick={() => OffValue()}
        >
          OFF
        </Button>
        {item.activity == null ? (
          <Button
            className="d-flex ml-1"
            color="primary"
            type="submit"
            onClick={formik.submitForm}
          >
            Submit
          </Button>
        ) : (
          <Button
            className="d-flex ml-1"
            color="info"
            type="submit"
            onClick={formik.submitForm}
          >
            Save
          </Button>
        )}
      </ModalFooter>
    </Modal>
  );
};

export default logbookModal;
