import React from 'react'

export default function Alert(props) {
    const capitalize =(words)=>{
        const lower=words.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
    return (
      props.alert &&  <div className={`alert alert-${props.alert.tp} alert-dismissible fade show`} role="alert">
  {capitalize(props.alert.tp)}: {props.alert.msg}
  
</div>
    )
}
