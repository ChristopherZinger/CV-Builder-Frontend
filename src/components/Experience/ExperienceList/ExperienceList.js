import React from 'react';
import ExperienceForm from '../ExperienceForm/ExperienceForm';
import ExperienceContainer from '../ExperienceContainer/ExperienceContainer';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';

class ExperienceList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showNewItemForm: false,
        }

        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleSaveTemplate = this.handleSaveTemplate.bind(this);
    }

    componentDidMount() {
        this.props.getExperience();
    }

    handleAddItem() {
        this.setState({ showNewItemForm: !this.state.showNewItemForm })
    }

    handleSaveTemplate() {
        this.setState({ showNewItemForm: false })
    }

    render() {
        const isLoading = this.props.isLoading;
        const addBtnDisabled = this.state.showNewItemForm;
        // create Template for new Experience Item
        const addNewItem = (
            <ExperienceForm key={"newItem"} data={{}} clearOnSave={this.handleSaveTemplate}>
                <button onClick={this.handleAddItem} > cancel </button>
            </ExperienceForm>
        )

        const experienceNodes = (
            [...this.props.positions].map(p => {
                return < ExperienceContainer key={p._id} data={p} />
            })
        )

        const content = isLoading
            ? <div>loading ... </div>
            : <div>{experienceNodes}</div>

        return (
            <div>
                {/* add btn*/}
                <button onClick={this.handleAddItem} disabled={addBtnDisabled}>
                    Add Position
                </button>

                {/* template for new experience item*/}
                {this.state.showNewItemForm ? addNewItem : null}

                {/* The list */}
                {content}

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