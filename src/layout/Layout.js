import React from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import './style.css'

const Layout = (props) => {
    return (
        <div className = 'container' 
        >
            <Header/>
            {props.children}
            <Footer/>
        </div>
    )
}

export default Layout
