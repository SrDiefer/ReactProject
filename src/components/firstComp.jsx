import React,{Component} from "react"; //We Import Component Class from React


class FirstComp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() {  //Component Method to show in DOM the sentences written
        return ( 
            <>
            <h1>Hola Mundo desde primer componente</h1>
             </>
            );
    }
}
 
export default FirstComp; //Export the class so that App.js can import it