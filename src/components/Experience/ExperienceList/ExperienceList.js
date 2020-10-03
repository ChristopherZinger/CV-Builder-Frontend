import React from 'react';
import ExperienceForm from '../ExperienceForm/ExperienceForm';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class ExperienceList extends React.Component {
    constructor(props) {
        super(props)

        this.handleAddComponent = this.handleAddComponent.bind(this);
        this.handleSaveNewExperience = this.handleSaveNewExperience.bind(this);
    }

    componentDidMount() {
        this.props.getExperience();
    }

    handleAddComponent(id) {
        // this.setState({
        //     positions: [
        //         [{ _id: id }],
        //         ...this.state.positions
        //     ]
        // })
    }



    handleSaveNewExperience(id) {
        console.log('save new : ', id)
        // this.setState({ positions: [] })
    }

    render() {
        const isLoading = this.props.isLoading;

        const experienceNodes = (
            [...this.props.positions].map(p => {
                const id = p._id;

                return < ExperienceForm key={id}
                    data={p}
                />
            })
        )

        const content = isLoading
            ? <div>loading ... </div>
            : <div>{experienceNodes}</div>

        return (
            <div>
                <div>

                    <button onClick={this.handleAddComponent}>Add Position</button>
                </div>
                { content}
            </div >
        )
    }
}




const mapStateToProps = state => {
    return {
        positions: state.experienceReducers.positions,
        isLoading: state.experienceReducers.isLoading,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        getExperience: () => dispatch(actions.getExperience()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceList)