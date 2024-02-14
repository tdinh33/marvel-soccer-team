import React, { useState } from 'react';
import Select from 'react-dropdown-select';
import { useNavigate } from 'react-router-dom';

const options = [
  { id: 'Goalkeeper', name: 1 },
  { id: 'Striker', name: 2 },
  { id: 'Midfielder', name: 3 },
  { id: 'Defender', name: 4 },
  {
    id: 'Additional Player', name: 5, children: [
      { id: 'Additional Player (ST)', name: 6 },
      { id: 'Additional Player (MD)', name: 7 },
      { id: 'Additional Player (DF)', name: 8 },
    ]
  },
];

export const Cards = ({ data }) => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedCharacters, setSelectedCharacters] = useState([]);

  const handleSelectChange = (selected) => {
    const selectedValue = selected[0];
    // Check if the option is already selected
    if (!selectedCharacters.includes(selectedValue.id)) {
      setSelectedCharacters([...selectedCharacters, selectedValue.id]);
      setSelectedOption(selectedValue);
      console.log(`Selected option: ${selectedValue.id} - Character: ${selectedValue.name}`);
    } else {
      console.log('Please select a different position.');
      alert('Please select a different position.');
    }
  };

  const isOptionDisabled = (option) => selectedCharacters.includes(option.id);

  return (
    <>
      {data ? (
        data.map((item) => {
          return (
            <div className="card" key={item.id}>
              <img
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                onClick={() => navigate(`/${item.id}`)}
                alt=""
              />
              <div className="title">
                <h3>{item.name}</h3>
                <Select
                  id="select"
                  options={options.map((opt) => ({
                    ...opt,
                    disabled: isOptionDisabled(opt),
                  }))}
                  labelField="id"
                  valueField="name"
                  onChange={handleSelectChange}
                  dropdownPosition="auto"
                  dropdownGap={0}
                  style={{ color: 'black' }}
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
