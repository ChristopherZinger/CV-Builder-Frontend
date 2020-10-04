import React from 'react'
import * as gs from '../../_globalStyles/globalStyles.module.css';


const CVList = props => {
    return (
        <div>
            <button className={[gs.btn, gs.btnPrimary].join(' ')}>Generate New CV</button>
            <h3>My CV List: </h3>
            { props.cvList.map(cv => {
                return <CVItem key={cv._id} cv={cv} />
            })}
            {
                props.cvList.length < 1
                    ? <p>You dont have any cv yet. Generate one with the button above.</p>
                    : null
            }
        </div>
    )
}



const CVItem = props => {
    return (
        <div>my Cv - {props.cv.createdAt}</div>
    )
}
export default CVList;