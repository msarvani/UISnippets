import React, {Component} from 'react';

class Layout extends Component{
    render(){
        return(
            <Auxiliary>
                <Header/>
                    {this.props.children}
                <Footer/>
            </Auxiliary>
        );
    }
}

export default Layout;