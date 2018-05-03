import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import './style.css';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

export default class Share extends Component {
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
                            <label>Upload an Image</label>
                            <Field
                                name="image"
                                validate={this.required.bind(this)}
                            >
                                {({ input, meta }) => {
                                    meta.touched &&
                                        meta.error && <span>{meta.error}</span>;
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

                            <label>Title</label>
                            <Field
                                name="title"
                                validate={this.required.bind(this)}
                            >
                                {({ input, meta }) => {
                                    meta.touched &&
                                        meta.error && <span>{meta.error}</span>;
                                    return (
                                        <input
                                            type="text"
                                            required
                                            {...input}
                                        />
                                    );
                                }}
                            </Field>

                            <label>Description</label>
                            <Field
                                name="description"
                                validate={this.required.bind(this)}
                            >
                                {({ input, meta }) => {
                                    meta.touched &&
                                        meta.error && <span>{meta.error}</span>;
                                    return (
                                        <input
                                            type="textarea"
                                            required
                                            {...input}
                                        />
                                    );
                                }}
                            </Field>

                            <label>Select some Tags</label>
                            <Field
                                name="tags"
                                validate={this.required.bind(this)}
                            >
                                {({ input, meta }) => {
                                    meta.touched &&
                                        meta.error && <span>{meta.error}</span>;
                                    return (
                                        <SelectField
                                            multiple
                                            value="tags"
                                            hintText="Select Category Tags"
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

                            <button type="submit">Submit</button>
                        </form>
                    )}
                />
            </div>
        );
    }
}
