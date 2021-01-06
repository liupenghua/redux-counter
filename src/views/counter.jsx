import React from 'react';
import store from '../redux/store/store'
import actionCreator from '../redux/actionCreator'

class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state={
            times: store.getState().times
        }
    }
    onChange =(isIncrement)=>{
        // const times = this.state.times
        if(isIncrement){
            store.dispatch(actionCreator.increment())
        }else {
            store.dispatch(actionCreator.decrement())
        }
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                times:store.getState().times
            })
        })
    }
    render(){
        return (
            <>
                <p>
                    <span>Clicked me {this.state.times} </span>
                    <button onClick={()=>this.onChange(true)}>+</button>
                    <button onClick={()=>this.onChange(false)}>-</button>
                </p>
            </>
        )
    }
}

export default Counter