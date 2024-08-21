import TopBar from './TopBar'
import Footer from './Footer'
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
    return (
        <>
            <TopBar />
            {children}
            <Footer />
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout