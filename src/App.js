import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
// import {addFeature, removeFeature} from './actions/featureActions';
import {connect} from 'react-redux';

const App = props => {

  const removeFeature = item => {
    // dispatch an action here to remove an item
    // removeFeature(item);
    // console.log(removeFeature);
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    // addFeature(item);
    // console.log(buyItem);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} removeFeature={removeFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

  const mapStateToProps = state => {
    return {
      additionalFeatures: state.additionalFeatures,
      additionalPrice: state.additionalPrice,
      car: state.car
    };
  };

  export default connect(mapStateToProps)(App);
