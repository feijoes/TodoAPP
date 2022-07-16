import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BiNote } from 'react-icons/bi';
import { AiOutlineEdit } from "react-icons/ai";
import {
  faBars,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

import cx from "classnames";
import '../static/Sidebar.css'

const menuItems = [
  { title: "User", icon: faUsers },
];


const Sidebar = ({newtodo,setEditTodos}) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className={cx("sidebar", { "sidebar-closed": !isOpen })}>
      <button className={"sidebar__button"} onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul>
        <li key={"New Note"}>
            <div onClick={()=>newtodo(e=>!e)} className={"sidebar__listItem big"}>
              <BiNote className={"sidebar__icon"} />
              <CSSTransition
                in={isOpen}
                timeout={200}
                classNames={"fade"}
                unmountOnExit
              >
                <span>{"New Note"}</span>
              </CSSTransition>
            </div>
          </li>
          <li key={"Edit Todo"}>
            <div onClick={()=>setEditTodos(e=>!e)} className={"sidebar__listItem big"}>
              <AiOutlineEdit className={"sidebar__icon"} />
              <CSSTransition
                in={isOpen}
                timeout={200}
                classNames={"fade"}
                unmountOnExit
              >
                <span>{"Edit Notes"}</span>
              </CSSTransition>
            </div>
          </li>
        {menuItems.map(item => (
          <li key={item.title}>
            <div className={"sidebar__listItem"}>
              <FontAwesomeIcon className={"sidebar__icon"} icon={item.icon} />
              <CSSTransition
                in={isOpen}
                timeout={200}
                classNames={"fade"}
                unmountOnExit
              >
                <span>{item.title}</span>
              </CSSTransition>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
