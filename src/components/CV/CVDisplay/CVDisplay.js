

import React, { Fragment } from 'react';
import CVContainer from '../CVContainer/CVContainer';
import CVElementsList from '../CVElementsList/CVElementsList'
import { connect } from 'react-redux';
import CVList from '../CVList/CVList';
import * as actions from '../../../store/actions/index';
import * as gs from '../../_globalStyles/globalStyles.module.css';

class CVDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cvListIsLoading: this.props.cvListIsLoading,
            cvList: [],
            currentCV: null
        }

        this.handleCreateCV = this.handleCreateCV.bind(this);
        this.allIsLoaded = this.allIsLoaded.bind(this);
    }

    componentDidMount() {
        this.props.getCVList();
        this.props.getProfile();
        this.props.getEducation();
        this.props.getExperience();
    }

    handleCreateCV() {
        const data = {
            profile: this.props.profile,
            education: this.props.educationList,
            experience: this.props.experienceList,
        }
        this.setState({ currentCV: data })
    }

    allIsLoaded() {
        return (
            this.props.cvListIsLoading
            && this.props.profileIsLoading
            && this.props.experienceListIsLoading
            && this.props.educationListIsLoading
        )
    }

    render() {
        const isLoading = this.allIsLoaded();

        const cvElements = (
            <div >
                <div className={gs.defaultContainer}>
                    <button onClick={this.handleCreateCV} className={[gs.btn, gs.btnPrimary].join(' ')}>Generate New CV</button>
                </div>
                <CVContainer cv={this.state.currentCV} />
            </div>
        )

        const content = isLoading ? <div>loading ...</div> : cvElements;
        return (
            <Fragment>
                { content}
            </Fragment >
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCVList: () => dispatch(actions.getCVList()),
        getProfile: () => dispatch(actions.getProfile()),
        getEducation: () => dispatch(actions.getEducation()),
        getExperience: () => dispatch(actions.getExperience())
    }
}

const mapStateToProps = state => {
    return {
        cvListIsLoading: state.cvReducers.isLoading,
        profileIsLoading: state.profileReducers.isLoading,
        experienceListIsLoading: state.experienceReducers.isLoading,
        educationListIsLoading: state.educationReducers.isLoading,

        cvList: state.cvReducers.cvList,
        experienceList: state.experienceReducers.experienceList,
        educationList: state.educationReducers.educationList,
        profile: {
            info: state.profileReducers.info,
            address: state.profileReducers.address,
            contact: state.profileReducers.contact,
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CVDisplay);




