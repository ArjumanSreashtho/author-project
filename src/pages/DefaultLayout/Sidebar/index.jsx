import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import urls from '../../../constants/urls';

import './sidebar.css';

const { Sider } = Layout;

const Sidebar = ({ collapseSidebar }) => {

  const history = useLocation();

  return (
    <Sider width={230} collapsed={collapseSidebar} collapsedWidth={0}
      className='sidebar-layout'
    >
      <Menu theme="dark" mode="inline" selectedKeys={[history.pathname]}>
        <Menu.Item key={urls.AUTHORS}>
          <Link to={urls.AUTHORS}>Authors</Link>
        </Menu.Item>
        <Menu.Item key={urls.FAVORITE_AUTHORS}>
          <Link to={urls.FAVORITE_AUTHORS}>Favorite Authors</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

export default Sidebar;