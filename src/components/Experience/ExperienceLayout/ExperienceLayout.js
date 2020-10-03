import React from 'react';
import ExperienceForm from '../ExperienceForm/ExperienceForm';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';


class ExperienceLayout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            positions: [],
        }

        this.handleAddComponent = this.handleAddComponent.bind(this);
        this.handleRemoveExperience = this.handleRemoveExperience.bind(this);
        this.handleSaveNewExperience = this.handleSaveNewExperience.bind(this);
    }

    componentDidMount() {
        this.props.getExperience();
    }

    handleAddComponent(id) {
        this.setState({
            positions: [
                [{ _id: id }],
                ...this.state.positions
            ]
        })
    }

    handleRemoveExperience(id) {
        this.props.removeExperience(id);
    }

    handleSaveNewExperience(id) {
        console.log('save new : ', id)
        this.setState({ positions: [] })
    }

    render() {
        const isLoading = this.props.isLoading;

        const experienceNodes = (
            [...this.state.positions, ...this.props.positions].map(p => {
                const id = p._id || Math.floor(Math.random() * 1000);
                const removebtn = (
                    <button onClick={this.handleRemoveExperience.bind(this, id)} >remove</button>
                );
                return < ExperienceForm key={id}
                    data={p} removebtn={removebtn}
                    saveNew={this.handleSaveNewExperience.bind(this, id)} />
            })
        )

        const content = isLoading
            ? <div>loading ... </div>
            : experienceNodes

        return (
            <div>
                <div>
                    <h1>Experience:</h1>
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
        removeExperience: (id) => dispatch(actions.removeExperience(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExperienceLayout);