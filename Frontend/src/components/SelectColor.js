import React, { useState } from "react";
import styled from "styled-components";
import '../static/Todo.css'


const DropDownContainer = styled("div")`
  width: 11em;
  margin: 0 auto;
  position:absolute;
`;



const DropDownList = styled("ul")`
  position:absolute;
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }                           
  }
`;

const ListItem = styled("li")`
  list-style: none;
  margin-bottom: 0.8em;
`;



export  const SelectColor=({selectedOption, setSelectedOption})=> {
  const [isOpen, setIsOpen] = useState(false);
  const options =["blue", "green", "orange",'red','yellow']

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
      <DropDownContainer>
        <div onClick={toggling}>
            <div className="coloroption"style={{backgroundColor: selectedOption }}>
            </div>
        </div>
        {isOpen && (
          <div>
            <DropDownList>
              {options.map(option => option !== selectedOption? (
                <ListItem onClick={()=>{onOptionClicked(option)}} key={Math.random()}>
                  {option}
                </ListItem>
              ):null)}
            </DropDownList>
          </div>
        )}
      </DropDownContainer>
  )}