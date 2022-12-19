import moment from 'moment';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Edit2, Info, MoreVertical, Trash2 } from 'react-feather';
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from 'reactstrap';

const InternItem = ({
  dispatch,
  data,
  router,
  pageSize,
  pageNumber,
  searchQuery,
  setIsDeleteModal,
  setIsAlertModal,
  setAlertStatus,
  setAlertMessage
}) => {
  // const router = useRouter();
 
  return (
    <tr>
      <td style={{ textAlign: 'start' }}>{data.userName}</td>
      <td style={{ textAlign: 'start' }}>{data.university}</td>
      <td style={{ textAlign: 'start' }}>{data.department}</td>
      <td style={{ textAlign: 'start' }}>{data.position}</td>
      <td style={{ textAlign: 'start' }}>
        {moment(data.entryDate).format('DD-MM-YYYY')}
      </td>
      <td style={{ textAlign: 'start' }}>
        {moment(data.endDate).format('DD-MM-YYYY')}
      </td>
    </tr>
  );
};

export default InternItem;
