import style from './Inn.module.css'
import React from "react";

class Inn extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
        <>
          <ul>
            <li className={style.info}>name: {this.props.usernema.name}</li>
            <li className={style.info}>age: {this.props.usernema.age}</li>
          </ul>
        </>
    )
  }
}

export default Inn
