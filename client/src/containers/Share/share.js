import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import './style.css';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import SelectField from 'material-ui/SelectField';
import LinearProgress from 'material-ui/LinearProgress';
import MenuItem from 'material-ui/MenuItem';
import { Step, Stepper, StepButton, StepContent } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import placeHolder from '../../images/item-placeholder.jpg';
import ItemCard from '../../components/ItemCard';
import LoadingProgress from './LoadingProgress';
import { itemsQuery } from '../Items/ItemsContainer';
import { tagsQuery } from '../../components/HeaderBar/Header';
import { auth, imageRef } from '../../firebase/firebase';
import { POINT_CONVERSION_COMPRESSED } from 'constants';

const addItemMutation = gql`
  mutation addItem(
    $title: String!
    $description: String!
    $imageurl: String!
    $tags: [String]!
    $created: String!
    $available: Boolean!
    $itemowner: String!
    $borrower: String
  ) {
    addItem(
      title: $title
      description: $description
      imageurl: $imageurl
      tags: $tags
      created: $created
      available: $available
      itemowner: $itemowner
      borrower: $borrower
    ) {
      title
      description
    }
  }
`;

const tags = [
  { tagid: 1, tag: 'Household Items' },
  { tagid: 2, tag: 'Recreational Equipment' },
  { tagid: 3, tag: 'Musical Instruments' },
  { tagid: 4, tag: 'Physical Media' },
  { tagid: 5, tag: 'Tools' },
  { tagid: 6, tag: 'Sporting Goods' },
  { tagid: 7, tag: 'Electronics' }
];

export default class Share extends Component {
  constructor(props) {
    super(props);
    this.handleUpdateCard = this.handleUpdateCard.bind(this);
    this.handleDescription = this.handleDescription.bind(this);
    this.handleFilter = this.handleFilter.bind(this);
    this.handleTags = this.handleTags.bind(this);
    this.userId = 'UQ9tSckgoEYplNYDdlWafJOHrw52';
  }
  state = {
    stepIndex: 0,
    selectedTags: [],
    itemCardData: {
      imageurl: placeHolder,
      title: 'Title',
      itemowner: {
        id: auth.currentUser.uid,
        bio: '',
        fullname: 'Current User',
        email: auth.currentUser.email
      },
      created: new Date(),
      tags: [],
      description: 'Description'
    },
    finished: false,
    value: '',
    isUploading: false,
    linearProgress: 0
  };

  onSubmit(values) {
    console.log('Form was submitted', values);
  }

  handleDescription = event => {
    this.setState({
      itemCardData: {
        title: this.state.itemCardData.title,
        [event.target.name]: event.target.value,
        itemowner: {
          id: auth.currentUser.uid,
          fullname: 'Current User',
          email: auth.currentUser.email
        },
        created: new Date(),
        tags: [],
        imageurl: this.state.itemCardData.imageurl
      }
    });
  };

  handleTags = event => {
    // console.log(event.target.value);
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    if (stepIndex < 3) {
      this.setState({
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2
      });
    }
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  handleFilter(tag) {
    const { selectedTags } = this.state;
    if (selectedTags.indexOf(tag) > -1) {
      selectedTags.splice(selectedTags.indexOf(tag), 1);
      const itemTags = [];
      selectedTags.map(tag => itemTags.push(tag.tag));
      this.setState({
        selectedTags: [...selectedTags],
        itemCardData: {
          tags: [...itemTags],
          itemowner: {
            id: auth.currentUser.uid,
            fullname: 'Current User',
            email: auth.currentUser.email
          },
          title: this.state.itemCardData.title,
          description: this.state.itemCardData.description,
          created: new Date(),
          imageurl: this.state.itemCardData.imageurl
        },
        finished: true
      });
    } else {
      const itemTags = [];
      selectedTags.map(tag => itemTags.push(tag.tag));
      this.setState({
        selectedTags: [...selectedTags, tag],
        itemCardData: {
          tags: [...itemTags, tag.tag],
          itemowner: {
            id: auth.currentUser.uid,
            fullname: 'Current User',
            email: auth.currentUser.email
          },
          title: this.state.itemCardData.title,
          description: this.state.itemCardData.description,
          created: new Date(),
          imageurl: this.state.itemCardData.imageurl
        },
        finished: true
      });
    }
  }

  handleUpdateCard = event => {
    const currentDescription = this.state.itemCardData.description;
    this.setState({
      itemCardData: {
        description: currentDescription,
        [event.target.name]: event.target.value,
        itemowner: {
          id: auth.currentUser.uid,
          fullname: 'Current User',
          email: auth.currentUser.email
        },
        created: new Date(),
        tags: this.state.itemCardData.tags,
        imageurl: this.state.itemCardData.imageurl
      },
      finished: true
    });
  };

  validate(...args) {
    // console.log('Validating:', args);
  }

  required(value) {
    // if (value && value.length > 0) {
    //   this.setState({ finished: true });
    // }
    return value ? undefined : 'Required';
  }

  renderStepActions(step) {
    return (
      <div style={{ margin: '12px 0' }}>
        <RaisedButton
          label="Next"
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          disabled={!this.state.finished}
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

  isFinished() {
    this.setState({ finished: true });
  }

  // A lot of this code was inspired by:
  // https://time2hack.com/2017/10/upload-files-to-firebase-storage-with-javascript/

  isPhotoFinished() {
    // grabs the file object from the photo input field
    const file = document.querySelector('#photo').files[0];

    //grabs the name (formatted with the date) and metadata from the uploaded file
    const name = +new Date() + '-' + file.name;
    const metadata = { contentType: file.type };

    // creates the file upload task for the firebase image storage reference, this task is a promise
    const task = imageRef.child(name).put(file, metadata);

    const progressBar = document.getElementById('progress-bar');

    task.on(
      'state_changed',
      snapshot => {
        let percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
        this.setState({ linearProgress: percentage, isUploading: true });
        console.log(percentage);
      },
      function error(err) {},
      function complete() {}
    );

    task
      .then(snapshot => {
        this.setState({
          finished: true,
          isUploading: false,
          stepIndex: this.state.stepIndex + 1,
          itemCardData: {
            imageurl: snapshot.downloadURL,
            title: this.state.itemCardData.title,
            itemowner: this.state.itemCardData.itemowner,
            created: this.state.itemCardData.created,
            tags: this.state.itemCardData.tags,
            description: this.state.itemCardData.description
          }
        });
      })
      .catch(e => console.log(e));
  }

  render() {
    const { stepIndex } = this.state;
    return (
      <div className="share-main">
        <div className="preview-item">
          <ItemCard itemsData={this.state.itemCardData} />
        </div>
        <Form
          onSubmit={values => this.onSubmit(values)}
          validate={this.validate.bind(this)}
          render={({ handleSubmit, values }) => (
            <Mutation
              mutation={addItemMutation}
              update={(cache, { data }) => {
                const { items } = cache.readQuery({ query: itemsQuery });
                const tags = cache.readQuery({ query: tagsQuery });
                cache.writeQuery({
                  query: itemsQuery,
                  data: { items: items.concat([addItemMutation]) }
                });
                cache.writeQuery({
                  query: tagsQuery,
                  data: { items: tags.items.concat([addItemMutation]) }
                });
              }}
            >
              {(addItem, { data }) => (
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    handleSubmit(values);
                    addItem({
                      variables: {
                        ...values,
                        created: new Date(),
                        available: true,
                        tags: this.state.selectedTags.map(tag =>
                          tag.tagid.toString()
                        ),
                        itemowner: auth.currentUser.uid,
                        imageurl: this.state.itemCardData.imageurl
                      }
                    });
                  }}
                >
                  <Stepper activeStep={stepIndex} orientation="vertical">
                    <Step>
                      <StepButton
                        onClick={() =>
                          this.setState({
                            stepIndex: 0
                          })
                        }
                      >
                        Add an Image
                      </StepButton>
                      <StepContent>
                        <label htmlFor="imageurl">
                          We live in a visual culture. Upload an image of the
                          item you're sharing.
                        </label>
                        <Field
                          name="imageurl"
                          type="file"
                          validate={this.required.bind(this)}
                        >
                          {({ input, meta }) => {
                            meta.touched &&
                              meta.error && <span>{meta.error}</span>;
                            return (
                              <RaisedButton
                                label="Select an image"
                                containerElement="label"
                                labelPosition="before"
                              >
                                <input
                                  type="file"
                                  accept="image/*"
                                  id="photo"
                                  {...input}
                                  required
                                  onChange={this.isPhotoFinished.bind(this)}
                                  style={{
                                    display: 'none'
                                  }}
                                />
                              </RaisedButton>
                            );
                          }}
                        </Field>
                        {this.state.isUploading && (
                          <LinearProgress
                            id="progress-bar"
                            variant="determinate"
                            value={this.state.linearProgress}
                          />
                        )}
                        {this.renderStepActions(0)}
                      </StepContent>
                    </Step>

                    <Step>
                      <StepButton
                        onClick={() =>
                          this.setState({
                            stepIndex: 1
                          })
                        }
                      >
                        Add a Title & Description
                      </StepButton>
                      <StepContent>
                        <p className="stepper-title">
                          Folks need to know what you're sharing. Give them a
                          clue by adding a title & description.
                        </p>
                        <Field name="title" validate={this.required.bind(this)}>
                          {({ input, meta }) => {
                            meta.touched &&
                              meta.error && <span>{meta.error}</span>;
                            return (
                              <TextField
                                floatingLabelText="Title"
                                floatingLabelFixed
                                required
                                {...input}
                                type="text"
                                hintText="Title"
                                fullWidth
                                // underlineFocusStyle={
                                //     styles.underlineStyle
                                // }
                                onInput={this.handleUpdateCard}
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
                              meta.error && <span>{meta.error}</span>;
                            return (
                              <TextField
                                required
                                {...input}
                                floatingLabelText="Description"
                                floatingLabelFixed
                                fullWidth
                                hintText="Description"
                                multiLine
                                rows={4}
                                className="input-field"
                                onInput={this.handleDescription}
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
                          this.setState({
                            stepIndex: 2
                          })
                        }
                      >
                        Categorize your Item
                      </StepButton>
                      <StepContent>
                        <label htmlFor="tags">
                          To share an item, you'll add it to our list of
                          categories. You can select multiple categories.
                        </label>
                        <Field name="tags" validate={this.required.bind(this)}>
                          {({ input, meta }) => {
                            meta.touched &&
                              meta.error && <span>{meta.error}</span>;
                            return (
                              <SelectField
                                multiple
                                value="tags"
                                hintText="Select Category Tags"
                                className="select-area"
                                {...input}
                                onChange={(event, index, value) =>
                                  this.handleFilter(value[0])
                                }
                              >
                                {tags.map(tag => {
                                  return (
                                    <MenuItem
                                      insetChildren
                                      key={tag.tagid}
                                      value={tag}
                                      primaryText={tag.tag}
                                      checked={
                                        this.state.selectedTags.indexOf(tag) >
                                        -1
                                      }
                                    />
                                  );
                                })}
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
                          this.setState({
                            stepIndex: 3
                          })
                        }
                      >
                        Confirm Things!
                      </StepButton>
                      <StepContent>
                        <label>
                          Great! If you're happy with everything, tap the
                          button.
                        </label>
                        {/* <button type="submit">Submit</button> */}
                        <div style={{ margin: '12px 0' }}>
                          <RaisedButton
                            label="Submit"
                            type="submit"
                            disableTouchRipple={true}
                            disableFocusRipple={true}
                            primary={true}
                            disabled={!this.state.finished}
                            onClick={this.handleNext}
                            style={{ marginRight: 12 }}
                          />
                          <FlatButton
                            label="Back"
                            disableTouchRipple={true}
                            disableFocusRipple={true}
                            onClick={this.handlePrev}
                          />
                        </div>
                      </StepContent>
                    </Step>
                  </Stepper>
                </form>
              )}
            </Mutation>
          )}
        />
      </div>
    );
  }
}
