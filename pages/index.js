
import React,{useEffect} from 'react';
import {connect} from 'react-redux'
import Head from 'next/head';
import Filter from '../Components/Filter'
import { getData } from '../redux/middleware';
import Space from '../Components/Space';

function SpaceX(props) {
    return (
        <>
        <Head>
          <title>SpaceX</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className="">
          <div className="container flex">
          <div className="filter-section">
            <Filter />
          </div>
          <div className="content-section flex">
            {props.store.data.map((s) => {
                return <div key={"sp-"+s.flight_number} className="space-wrapper"><Space space={s} /></div>
            })}
          </div>
          </div>
        </main>
  
        <style jsx>{`
          .container {
            max-width : 1440px;
            margin: 0 auto;
            padding: 20px;
          }
          .content-section {
            flex-wrap : wrap;
          }
          /* mobile screen */
          @media screen and (max-width: 700px) { 
            .filter-section, .content-section, .space-wrapper {
              width: 100%;
            }
          }
          /* Tablet View */
          @media screen and (min-width: 701px) {
            .filter-section {
              width: 28%
            }
            .content-section {
              width: 72%;
            }
            .space-wrapper {
              width: 50%;
            }
          }
          @media screen and (min-width: 1025px) {
            .space-wrapper {
              width: calc(100% / 4);
            }
          }
        `}

        </style>
        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
  
          * {
            box-sizing: border-box;
          }
          main {
            background : #f2f2f2
          }
          .flex {
            display: flex;
            flex-wrap: wrap;
          }
        `}</style>
      </>
    )
}

const mapStateToProps = (store) => {
    return {
        store : store
    }
}

const mapActionToProps = (dispatch) => {
    return {
        getData: (filter) => {
            dispatch(getData(filter));
        }
    }
}

export default connect(mapStateToProps, mapActionToProps)(SpaceX);