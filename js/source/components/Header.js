import React,{ Component} from 'react';
import Glide from '@glidejs/glide';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            teksty:localStorage.getItem('Nazwisko'),
        }
    }
    render(){
        return(
            <div className='Header'>
                A P L I K A C J A  {this.state.teksty}
            </div>
        );
    }
}
export default Header