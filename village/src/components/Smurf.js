import React from 'react';

const Smurf = props => {
  return (
    <div className="Smurf">
      <header>
        <h2>{props.name}</h2>
      </header>
      <div className="height">
        <h3>Height:</h3>
        <p>{props.height}</p>
      </div>
      <div className="age">
        <h3>Age:</h3>
        <p>{props.age}</p>
      </div>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;