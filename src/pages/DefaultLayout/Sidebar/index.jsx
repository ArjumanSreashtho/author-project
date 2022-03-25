import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import urls from '../../../constants/urls';

import './sidebar.css';

const { Sider } = Layout;

const Sidebar = ({ collapseSidebar }) => {
  return (
    <Sider width={230} collapsed={collapseSidebar} collapsedWidth={0}
      className='sidebar-layout'
    >
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to={urls.AUTHORS}>Authors</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to={urls.FAVORITE_AUTHORS}>Favorite Authors</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar;