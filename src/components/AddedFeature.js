import React from 'react';
import {removeNewFeature} from '../actions/featureActions';
import {connect} from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() => props.removeNewFeature(props.feature.remove)}>X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, {removeNewFeature})(AddedFeature);
