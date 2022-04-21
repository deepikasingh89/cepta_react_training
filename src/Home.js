import React, { Fragment } from "react";
import ChildComp from "./ChildComp";

class Home extends React.Component {
  constructor() {
    super();
    console.log("inside class");
    this.state = {
      count: 0,
      addr: "",
      city: "",
      email: "",
      login:false
    };
  }
  increment_fn = () => {
    //  this.state.count++;
    //component api/feature/functions.
    // this.forceUpdate //forcefully recalculate dom
    //this setState -update state and recalulate dom.
    //asyc flow
    this.setState({
      count: this.state.count + 1,
      addr:'vapi'
    });
    console.log("incr", this.state.count);
  };
  decrement_fn = () => {
    this.setState({
      count: this.state.count - 1,
    });
    console.log("desc", this.state.count);
  };
  add_fn= ()=>{
      this.setState({
        //  ...this.state,addr:'GGN'  //or
          
           count:this.state.count+1,
           addr:'daman',
           city:'',
           email:''
           
      })
      console.log("desc", this.state);
  }
  
  render() {
    var cityname='Daman';
    return (
      <> //fragment
        {/* <Fragment> */}
          <div>
            <ChildComp city={cityname} country="INDIA">
              {" "}
            </ChildComp>
            <div>Class component</div>
            <div>Count - {this.state.count}</div>
            <div>Count - {this.state.addr}</div>
            <button onClick={this.increment_fn}>+</button>
            <button onClick={this.decrement_fn}>-</button>
            <button onClick={this.add_fn}>update address</button>
          </div>
          //{" "}
        {/* </Fragment> */}
      </>
    );
  }
}

export default Home;


// TODo list
//create button (going office);
//click on button add on list

//stages
//mouting -first time component loading
//re-rendring-updation
//unmounting-leaving the component '(delete all variable,variable,)