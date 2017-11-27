import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

/**
 * A modal dialog can only be closed by selecting one of the actions.
 */

export default function AddBucketModal(props) {
    const TextFieldExampleError = () => (
      <div>
        <TextField
          hintText="Hint Text"
        /><br />
        <TextField
          hintText="Hint Text"
        /><br />
        <TextField
          hintText="Hint Text"
          errorText="This field is required"
          floatingLabelText="Floating Label Text"
        /><br />
        <TextField
          hintText="Message Field"
          errorText="This field is required."
          floatingLabelText="MultiLine and FloatingLabel"
          multiLine={true}
          rows={2}
        /><br />
      </div>
    );
    const actions = [
      <FlatButton
        label="Add"
        primary={true}
        onClick={props.createBucket}
      />,
      <FlatButton
        label="Cancel"
        secondary={true}
        onClick={props.handleClose}
      />,
    ];

    return (
      <div>
        <FlatButton label="Modal Dialog" onClick={props.handleOpen} />
        <Dialog
          title="Create Bucket"
          actions={actions}
          modal={true}
          open={props.status}
          contentStyle={{width: '80%'}}
          autoDetectWindowHeight={true}
          autoScrollBodyContent={true}
        >
          <div>
            <TextField
              name="bucketName"
              floatingLabelText="bucketlist name"
              value={props.bucketName}
              onChange={props.handleChange}
            /><br />
            <TextField
              name="bucketDescription"
              floatingLabelText="bucketlist description"
              multiLine={true}
              value={props.bucketDescription}
              onChange={props.handleChange}
              rows={2}
            /><br />
          </div>
        </Dialog>
      </div>
    );
  }
