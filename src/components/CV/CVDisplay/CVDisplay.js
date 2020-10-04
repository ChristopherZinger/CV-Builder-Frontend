

import React from 'react';
import CVContainer from '../CVContainer/CVContainer';
import CVElementsList from '../CVElementsList/CVElementsList'


class CVDisplay extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-8">
                    <CVContainer />
                </div>
                <div className="row-4">
                    <CVElementsList />
                </div>
            </div>
        )
    }
}

export default CVDisplay;




