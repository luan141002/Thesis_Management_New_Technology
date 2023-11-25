import React from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';

function DefaultLayout({ children }) {

    return (
        <>
            <Header></Header>
            {children}
            <Footer />
        </>
    );
}

export default DefaultLayout;
