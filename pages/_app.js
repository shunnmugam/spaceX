import React from 'react';
import wrapper from '../redux/store';

const WrappedApp = ({Component, pageProps}) => {
    // console.log("pageProps", pageProps);
    return <Component {...pageProps} />
};

export default wrapper.withRedux(WrappedApp);