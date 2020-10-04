

import React from 'react';
import CVContainer from '../CVContainer/CVContainer';
import CVElementsList from '../CVElementsList/CVElementsList'
import { connect } from 'react-redux';
import CVList from '../CVList/CVList';
import * as actions from '../../../store/actions/index';

class CVDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cvListIsLoading: this.props.cvListIsLoading,
            cvList: []
        }
    }
    componentDidMount() {
        this.props.getCVList();
    }
    render() {
        const isLoading = this.state.cvListIsLoading;

        const cvElements = (
            <div className="row">
                <div className="col-3">
                    <CVList cvList={this.props.cvList} />
                </div>
                <div className="col-8">
                    <CVContainer />
                </div>
                <div className="row-4">
                    <CVElementsList />
                </div>
            </div>
        )

        const content = isLoading ? <div>loading ...</div> : cvElements;
        return (
            <div>
                { content}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCVList: () => dispatch(actions.getCVList())
    }
}

const mapStateToProps = state => {
    return {
        cvListIsLoading: state.cvReducers.isLoading,
        cvList: state.cvReducers.cvList,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CVDisplay);




