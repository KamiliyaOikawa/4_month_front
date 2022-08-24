import React from "react";
import style from './Info.module.css'
 class Info extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
        <>
          <ul >
            <li className={style.info}>name: {this.props.username.name}</li>
            <li className={style.info}>age: {this.props.username.age}</li>
          </ul>
        </>
    )
  }
}
export default Info