import { React, useEffect, useState } from 'react';
import { getSession, useSession } from 'next-auth/react';
import { useDispatch, useSelector, connect } from 'react-redux';
import HomeIntern from 'components/home/Intern/home';
import HomeMentor from 'components/home/mentor/home';
import HomeHR from 'components/home/HR/home';
import { wrapper } from 'redux/store';
import { getAllIntern } from 'redux/actions/intern_action';
import { reauthenticate } from 'redux/actions/auth';
import { useRouter } from 'next/router';
import InternTableItem from 'components/HR/dashboard/internTableItem';
import {
  Table,
  Label,
  Row,
  Col,
  CustomInput,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText
} from 'reactstrap';
import { Search } from 'react-feather';
import styles1 from 'styles/scrollbarTable.module.css';
import ReactPaginate from 'react-paginate';
import {
  resetPage,
  resetPageSize,
  setPage,
  setPageSize,
  setSearch
} from 'redux/action/pagination.js';

const Home = ({user}) => {

  // console.log(session);
  // console.log(dataIntern);
  // console.log(user.token, "asd");



  return (
    <>
      {user.role.roleName == 'Mentor' ? (
        <HomeMentor />
      ) : user.role.roleName == 'Intern' ? (
        <HomeIntern />
      ) : (
        <HomeHR token = {user.token}/>
      )}
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (ctx) => {
    const { req, query } = ctx;
    const sessionData = await getSession(ctx);

    if (!sessionData) {
      return {
        redirect: {
          destination: '/auth',
          permanent: false
        }
      };
    }


    return {
      props: {
        user: sessionData.user
      }
    };
  }
);
export default connect((state) => state)(Home);
