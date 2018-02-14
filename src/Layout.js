import Footer from './Components/Footer'
import Header from './Components/Header'
import React, {Component} from 'react'

class Layout extends Component {
    render() {
        return (
            <div>
                <Header />
                {this.props.children}
                <Footer />
            </div>
        )
    }
}

export default Layout;
