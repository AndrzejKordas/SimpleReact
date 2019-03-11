import React from 'react';
class Tresci extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            tresc1: localStorage.getItem('Opis'),
            tresc2: localStorage.getItem('Opis2'),
            tytul1: localStorage.key(1),
            tytul2: localStorage.key(2)
        }


    }
    render(){
        return(
            <div className="grid">
                <div>
                    <h3>{this.state.tytul1}</h3>
                    {this.state.tresc1}
                </div>
                <div>
                <h3>{this.state.tytul2}</h3>
                    {this.state.tresc2}
                </div>
            </div>
        );        
    }
}
export default Tresci