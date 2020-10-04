import React from 'react';
import EducationContainer from '../EducationContainer/EducationContainer';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import * as gs from '../../_globalStyles/globalStyles.module.css';
import EducationFormTemplate from '../EducationFormTemplate/EducationFormTemplate';


class EducationList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            showNewItemForm: false,
        }

        this.handleAddItem = this.handleAddItem.bind(this);
        this.handleSaveTemplate = this.handleSaveTemplate.bind(this);
    }

    componentDidMount() {
        this.props.getEducation();
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
        // create Template for new Education Item
        const addNewItem = (
            <EducationFormTemplate clearOnSave={this.handleSaveTemplate} clickCancel={this.handleAddItem} />
        )

        const educationNodes = (
            [...this.props.educationList].map(p => {
                return < EducationContainer key={p._id} data={p} />
            })
        )

        const content = isLoading
            ? <div>loading ... </div>
            : <div>{educationNodes}</div>

        return (
            <div>
                {/* add btn*/}
                <div className={gs.defaultContainer}>
                    <button onClick={this.handleAddItem}
                        className={[gs.btn, gs.btnPrimary].join(' ')} disabled={addBtnDisabled}>
                        Add School
                 </button>
                </div>


                {/* template for new education item*/}
                {this.state.showNewItemForm ? addNewItem : null}

                {/* The list */}
                {content}

            </div >
        )
    }
}

const mapStateToProps = state => {
    return {
        educationList: state.educationReducers.educationList,
        isLoading: state.educationReducers.isLoading,
    }
}


const mapDispatchToProps = dispatch => {
    return {
        getEducation: () => dispatch(actions.getEducation()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EducationList)