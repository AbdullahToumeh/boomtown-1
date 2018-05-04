import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import './style.css';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Step, Stepper, StepButton, StepContent } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import { grey900 } from 'material-ui/styles/colors';

const styles = {
    underlineStyle: {
        color: grey900
    }
};

export default class Share extends Component {
    state = {
        stepIndex: 0
    };

    handleNext = () => {
        const { stepIndex } = this.state;
        if (stepIndex < 3) {
            this.setState({ stepIndex: stepIndex + 1 });
        }
    };

    handlePrev = () => {
        const { stepIndex } = this.state;
        if (stepIndex > 0) {
            this.setState({ stepIndex: stepIndex - 1 });
        }
    };

    renderStepActions(step) {
        return (
            <div style={{ margin: '12px 0' }}>
                <RaisedButton
                    label="Next"
                    disableTouchRipple={true}
                    disableFocusRipple={true}
                    primary={true}
                    onClick={this.handleNext}
                    style={{ marginRight: 12 }}
                />
                {step > 0 && (
                    <FlatButton
                        label="Back"
                        disableTouchRipple={true}
                        disableFocusRipple={true}
                        onClick={this.handlePrev}
                    />
                )}
            </div>
        );
    }

    onSubmit(values) {
        console.log('Form was submitted', values);
    }

    validate(...args) {
        console.log('Validating:', args);
    }

    required(value) {
        return value ? undefined : 'Required';
    }

    render() {
        const { stepIndex } = this.state;
        return (
            <div className="share-main">
                <div className="preview-item">
                    <h3>This is where the preview item will go</h3>
                </div>
                <Form
                    onSubmit={values => this.onSubmit(values)}
                    validate={this.validate.bind(this)}
                    render={({
                        handleSubmit,
                        reset,
                        submitting,
                        pristine,
                        values
                    }) => (
                        <form
                            onSubmit={e => {
                                e.preventDefault();
                                handleSubmit(values);
                            }}
                        >
                            <Stepper
                                activeStep={stepIndex}
                                linear={false}
                                orientation="vertical"
                            >
                                <Step>
                                    <StepButton
                                        onClick={() =>
                                            this.setState({ stepIndex: 0 })
                                        }
                                    >
                                        Add an Image
                                    </StepButton>
                                    <StepContent>
                                        <label for="name">
                                            We live in a visual culture. Upload
                                            an image of the item you're sharing.
                                        </label>
                                        <Field
                                            name="image"
                                            validate={this.required.bind(this)}
                                        >
                                            {({ input, meta }) => {
                                                meta.touched &&
                                                    meta.error && (
                                                        <span>
                                                            {meta.error}
                                                        </span>
                                                    );
                                                return (
                                                    <input
                                                        type="file"
                                                        accept="image/*"
                                                        {...input}
                                                        required
                                                    />
                                                );
                                            }}
                                        </Field>
                                        {this.renderStepActions(0)}
                                    </StepContent>
                                </Step>

                                <Step>
                                    <StepButton
                                        onClick={() =>
                                            this.setState({ stepIndex: 1 })
                                        }
                                    >
                                        Add a Title & Description
                                    </StepButton>
                                    <StepContent>
                                        <p className="stepper-title">
                                            Folks need to know what you're
                                            sharing. Give them a clue by adding
                                            a title & description.
                                        </p>
                                        <Field
                                            name="title"
                                            validate={this.required.bind(this)}
                                        >
                                            {({ input, meta }) => {
                                                meta.touched &&
                                                    meta.error && (
                                                        <span>
                                                            {meta.error}
                                                        </span>
                                                    );
                                                return (
                                                    <TextField
                                                        floatingLabelText="Title"
                                                        floatingLabelFixed={
                                                            true
                                                        }
                                                        required
                                                        {...input}
                                                        hintText="Title"
                                                        fullWidth={true}
                                                        underlineFocusStyle={
                                                            styles.underlineStyle
                                                        }
                                                    />
                                                );
                                            }}
                                        </Field>

                                        <Field
                                            name="description"
                                            validate={this.required.bind(this)}
                                        >
                                            {({ input, meta }) => {
                                                meta.touched &&
                                                    meta.error && (
                                                        <span>
                                                            {meta.error}
                                                        </span>
                                                    );
                                                return (
                                                    <TextField
                                                        required
                                                        {...input}
                                                        floatingLabelText="Description"
                                                        floatingLabelFixed={
                                                            true
                                                        }
                                                        fullWidth={true}
                                                        hintText="Description"
                                                        multiLine={true}
                                                        rows={4}
                                                        className="input-field"
                                                    />
                                                );
                                            }}
                                        </Field>
                                        {this.renderStepActions(1)}
                                    </StepContent>
                                </Step>

                                <Step>
                                    <StepButton
                                        onClick={() =>
                                            this.setState({ stepIndex: 2 })
                                        }
                                    >
                                        Categorize your Item
                                    </StepButton>
                                    <StepContent>
                                        <label for="tags">
                                            To share an item, you'll add it to
                                            our list of categories. You can
                                            select multiple categories.
                                        </label>
                                        <Field
                                            name="tags"
                                            validate={this.required.bind(this)}
                                        >
                                            {({ input, meta }) => {
                                                meta.touched &&
                                                    meta.error && (
                                                        <span>
                                                            {meta.error}
                                                        </span>
                                                    );
                                                return (
                                                    <SelectField
                                                        multiple
                                                        value="tags"
                                                        hintText="Select Category Tags"
                                                        className="select-area"
                                                    >
                                                        <MenuItem
                                                            key="1"
                                                            insetChildren
                                                            checked
                                                            value="1"
                                                            primaryText="Household Items"
                                                        />
                                                        <MenuItem
                                                            key="2"
                                                            insetChildren
                                                            checked
                                                            value="1"
                                                            primaryText="Recreational Equipment"
                                                        />
                                                        <MenuItem
                                                            key="3"
                                                            insetChildren
                                                            checked
                                                            value="1"
                                                            primaryText="Tools"
                                                        />
                                                        <MenuItem
                                                            key="4"
                                                            insetChildren
                                                            checked
                                                            value="1"
                                                            primaryText="Phyical Media"
                                                        />
                                                        <MenuItem
                                                            key="5"
                                                            insetChildren
                                                            checked
                                                            value="1"
                                                            primaryText="Sports"
                                                        />
                                                    </SelectField>
                                                );
                                            }}
                                        </Field>
                                        {this.renderStepActions(2)}
                                    </StepContent>
                                </Step>

                                <Step>
                                    <StepButton
                                        onClick={() =>
                                            this.setState({ stepIndex: 3 })
                                        }
                                    >
                                        Confirm Things!
                                    </StepButton>
                                    <StepContent>
                                        <label>
                                            Great! If you're happy with
                                            everything, tap the button.
                                        </label>
                                        <button type="submit">Submit</button>
                                        {this.renderStepActions(3)}
                                    </StepContent>
                                </Step>
                            </Stepper>
                        </form>
                    )}
                />
            </div>
        );
    }
}
