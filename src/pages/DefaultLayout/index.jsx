import { useState } from 'react';
import { Layout } from 'antd';

import Header from  './Header';
import Body from './Body';
import Sidebar from './Sidebar';

const DefaultLayout = () => {

  const [collapseSidebar, setCollapseSidebar] = useState(false);

  const handleChangeCollapseSidebar = () => {
    setCollapseSidebar((prevState) => {
      return !prevState;
    })
  }

  window.addEventListener('resize', () => {
    if(window.innerWidth <= 991) {
      setCollapseSidebar(true)
    }
    else {
      setCollapseSidebar(false);
    }
  })

  return (
    <Layout>
      <Header collapseSidebar={collapseSidebar} handleChangeCollapseSidebar={handleChangeCollapseSidebar}/>
      <Layout>
        <Sidebar collapseSidebar={collapseSidebar}/>
        <Body />
      </Layout>
    </Layout>
  )
}

export default DefaultLayout;