import ComboAlert from 'components/Alert/ComboAlert';
import { getPermissionComponent } from 'helpers/getPermission';
import moment from 'moment';
import React, { useState } from 'react';
import { Edit2, Info, MoreVertical, Trash2 } from 'react-feather';
import { useDispatch } from 'react-redux';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Badge,
  Label,
  FormGroup,
  Input,
  Row,
  Col
} from 'reactstrap';
import { reauthenticate } from 'redux/actions/auth';
import { entryLogbook } from 'redux/actions/intern_action';
import styles from 'styles/scrollbarTable.module.css';
import LogbookModal from '../Modal/logbookModal';
const logbook_Item = ({ item, token, setRefresh, status }) => {
  const [entryModal, setEntryModal] = useState(false);
  const toggleEntryPopup = () => setEntryModal(!entryModal);

  const [rejectModal, setRejectModal] = useState(false);
  const toggleRejectPopup = () => setRejectModal(!rejectModal);

  const [isAlertModal, setIsAlertModal] = useState(false);
  const [alertStatus, setAlertStatus] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');

  const dispatch = useDispatch();
  const submitHandler = (id, data) => {
    dispatch(reauthenticate(token));
    dispatch(entryLogbook(id, data)).then((data) => {
      console.log(data, 'SUBMIT DATA');
      setAlertStatus(data.status);
      if (data.status === 400) {
        setAlertMessage(data.data);
        setIsAlertModal(true);
      } else if (data.status === 401) {
        setAlertMessage('You are unauthorized to add this data');
        setIsAlertModal(true);
      } else if (data.status >= 200 && data.status < 300) {
        toggleEntryPopup();
        setAlertMessage('Data added successfully!');
        setIsAlertModal(true);
      } else if (data.status == 409) {
        setAlertMessage('Data is already exist!');
        setIsAlertModal(true);
      } else {
        setAlertMessage('Error occured, please try again later');
        setIsAlertModal(true);
      }
    });
  };

  return (
    <tr>
      <td style={{ textAlign: 'start' }} className="font-weight-bold">
        <div>{moment(item.date).format('dddd,')}</div>
        {moment(item.date).format('D MMM YYYY')}
      </td>
      <td style={{ textAlign: 'start' }} className="text-break">
        {item.activity}
      </td>
      <td style={{ textAlign: 'start' }} className="text-nowrap">
        {item.activity == 'OFF' ? (
          'OFF'
        ) : (
          <Badge color="light-primary" style={{ borderRadius: '18px' }}>
            {item.activity == null ? '' : item.isWorkFromOffice ? 'WFO' : 'WFH'}
          </Badge>
        )}
      </td>
      <td style={{ textAlign: 'start' }} className="text-nowrap">
        {item.activity == 'OFF'
          ? 'OFF'
          : item.jamMasuk
          ? moment(item.jamMasuk).format('HH:mm')
          : ''}
      </td>
      <td style={{ textAlign: 'start' }} className="text-nowrap">
      {item.activity == 'OFF'
          ? 'OFF'
          : item.jamKeluar
          ? moment(item.jamKeluar).format('HH:mm')
          : ''}
       
      </td>
      {moment().format() > moment(item.date).format() &&
         (dataState.status == 0 || //Draft
         dataState.status == 4 || //Revised by Mentor
         dataState.status == 5) &&  // Revised by HR
      getPermissionComponent('Intern') ? (
        <td className="text-center px-2 align-middle text-nowrap">
          <div className="d-flex justify-content-center ">
            {item.jamMasuk == null ? (
              <Button.Ripple
                color="primary"
                className="d-flex align-items-center"
                onClick={toggleEntryPopup}
              >
                Entry
              </Button.Ripple>
            ) : (
              <Button.Ripple
                color="info"
                className="d-flex align-items-center"
                onClick={toggleEntryPopup}
              >
                Edit
              </Button.Ripple>
            )}
          </div>
          <LogbookModal
            entryModal={entryModal}
            toggleEntryPopup={toggleEntryPopup}
            item={item}
            token={token}
            submitHandler={submitHandler}
          />
          <ComboAlert
            isDeleteModal={true}
            isAlertModal={isAlertModal}
            setIsAlertModal={setIsAlertModal}
            alertStatus={alertStatus}
            alertMessage={alertMessage}
            setRefresh={setRefresh}
          />
        </td>
      ) : null}
    </tr>
  );
};

export default logbook_Item;
