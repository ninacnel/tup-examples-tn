import React from 'react'
import TopBar from './TopBar'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <TopBar />
            {children}
            <Footer />
        </>
    )
}

export default Layout