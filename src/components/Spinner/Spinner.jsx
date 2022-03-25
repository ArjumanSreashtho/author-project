import React from 'react';
import { Spin } from 'antd';

const Spinner = ({ isLoading }) => {
  return (
    <Spin size='large' spinning={isLoading} tip='Loading...' style={{marginLeft: "45%", marginTop: "15%"}}/>
  )
}

export default Spinner;