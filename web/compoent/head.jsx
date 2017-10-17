import React from 'react'

class Head extends React.Component{
    constructor(props) {
        super();
        this.state = {
            value: 555,
            name:"zsss"
        };
        this.handleClick = this.handleClick.bind(this);

        setTimeout(()=>{
            console.log(this.props);
        },500)
    };
    handleClick () {
        alert(666)
    }
    render(){
        return <div>
            <div onClick={this.handleClick}>点击</div>
            <div>{this.props.name}opppp</div>
        </div>
    }
}
export {Head}