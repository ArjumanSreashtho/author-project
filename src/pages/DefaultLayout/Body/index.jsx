import { Suspense } from 'react';
import { Layout } from 'antd';
import { Navigate, Route, Routes } from 'react-router-dom';
import Spinner from '../../../components/Spinner/Spinner';
import routes from '../../../routes';

import './body.css';
import urls from '../../../constants/urls';

const { Content } = Layout;

const Body = () => {

  return (
    <Content className='body-layout'>
      <Suspense fallback={<Spinner />}>
        <Routes>
          {
            routes.map((route, index) => {
              return route.component ? 
              <Route 
                key={index}
                path={route.path}
                element={<route.component />}
              />
              :
              null
            })
          }
          <Route
            path="*"
            element={<Navigate to={urls.AUTHORS} replace />}
          />
        </Routes>
      </Suspense>
    </Content>
  )
}

export default Body;