import React from 'react';
import Select from 'react-dropdown-select';
import { useNavigate } from 'react-router-dom';

const options = [
  { label: "Goalkeeper", value: 1, color: "black" },
  { label: "Striker", value: 2, color: "black" },
  { label: "Midfielder", value: 3, color: "black" },
  { label: "Defender", value: 4, color: "black" },
  { label: "Additional Player (ST, MD, or DF)", value: 5, color: "black" },
];

export const Cards = ({ data }) => {
  let navigate = useNavigate();

  const dropdownStyles = {
    control: (provided) => ({
      ...provided,
      border: '1px solid black', // Add border to the dropdown box
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? 'white' : 'black', // Change text color based on selection
    }),
  };

  return (
    <>
      {data ? (
        data.map((item) => {
          return (
            <div className='card' key={item.id}>
              <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} onClick={() => navigate(`/${item.id}`)} alt='' />
              <div className='title'>
                <h3>{item.name}</h3>
                <Select
                  id="select"
                  options={options}
                  labelField="label" // Use 'label' instead of 'id' for labelField
                  valueField="value"
                  style={dropdownStyles} // Apply custom styles to the dropdown
                />
              </div>
            </div>
            
          );
        })
      ) : (
        ''
      )}
    </>
  );
};
