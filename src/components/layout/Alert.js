import React from "react";

const Alert=({alert})=>{
    return(
        alert !== null&&(
            <div className={`alert mt-1 alert-${alert.type}`}>
                 <i className="fas fa-info-circle mr-1"></i>{alert.msg}
            </div>
        )
    )
}

export default Alert;