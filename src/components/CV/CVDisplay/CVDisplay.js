

import React from 'react';
import CVContainer from '../CVContainer/CVContainer';
import CVElementsList from '../CVElementsList/CVElementsList'
import { connect } from 'react-redux';

import * as actions from '../../../store/actions/index';

class CVDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cvList: []
        }


    }
    componentDidMount() {
        console.log(';;;;;;;;;;;;')
        this.props.getCVList();
        // this.setState({
        //     cvList: list,
        // })
    }
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

const mapDispatchToProps = dispatch => {
    return {
        getCVList: () => dispatch(actions.getCVList())
    }
}

export default connect(null, mapDispatchToProps)(CVDisplay);




