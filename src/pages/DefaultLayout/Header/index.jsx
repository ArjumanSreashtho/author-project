import React from 'react';
import { Layout } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';

import './header.css';

const { Header: AntHeader } = Layout;


const Header = ({ collapseSidebar, handleChangeCollapseSidebar }) => {
  return (
    <AntHeader className="header" >
      <div className='header-icon' />
      <span className='collapse-icon' onClick={handleChangeCollapseSidebar} >{collapseSidebar ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}</span>
    </AntHeader>
  )
}

export default Header;