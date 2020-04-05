import React,{useContext} from "react";
import AlertContext from '../../context/alert/AlertContext';


const Alert=()=>{
    const alertContext=useContext(AlertContext);
    const {alert}=alertContext;

    return(
        alert !== null&&(
            <div className={`alert mt-1 alert-${alert.type}`}>
                 <i className="fas fa-info-circle mr-1"></i>{alert.msg}
            </div>
        )
    )
}

export default Alert;