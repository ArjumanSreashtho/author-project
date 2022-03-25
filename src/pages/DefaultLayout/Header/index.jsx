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
      
      {React.createElement(collapseSidebar ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: handleChangeCollapseSidebar,
      })}
    </AntHeader>
  )
}

export default Header;