import React from 'react'
import * as gs from '../../_globalStyles/globalStyles.module.css';


const CVList = props => {
    return (
        <div>

            {/* List of CVs */}
            <h3>My CV List: </h3>
            { props.cvList.map(cv => {
                return <CVItem key={cv._id} cv={cv} />
            })}

            {/* you dont have cv yet */}
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