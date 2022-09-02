import React,{Component} from "react";

class People extends Component{
    constructor(props){
        super(props);
        this.state = {
            // objects == dictionary
            age: this.props.age
        };
    }
    // render == show on the screen ,render is a method
    render(){
        return(
            <div className="person">
            <h1>name: {this.props.f_Name} {this.props.l_Name}</h1> 
            <h3>age {this.state.age}</h3>
            <h3>hair color: {this.props.hairColor}</h3>
            <button onClick={()=>{ this.setState({age: this.state.age+1}) }}>age + 1</button>
        </div>
        )
    }
}
// exporting the class/this component so that other files can use it import it 

export default People;