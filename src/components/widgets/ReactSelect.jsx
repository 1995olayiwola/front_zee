import React from 'react';
import Select from 'react-select';



const Cmp01 = (props) => {
  return (
    <div>
      <label>{props.title}</label>
      <Select
        options={props.options}
        name={props.name}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Cmp01;
