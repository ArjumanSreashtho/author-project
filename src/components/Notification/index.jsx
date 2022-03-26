import {notification} from 'antd';

const Notification = ({ type, message, description }) => {
  return (
    notification[type]({
      message,
      description,
      duration: 1
    })
  )
}

export default Notification;