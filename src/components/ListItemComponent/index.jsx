import { useDispatch } from 'react-redux';

import { List, Card, Avatar, Typography, Tooltip, Pagination } from 'antd';
import { StarOutlined, DeleteOutlined } from '@ant-design/icons';

import { addFavoriteAuthor, removeFavoriteAuthor } from '../../redux/slices/authors/favoriteAuthorSlice';

const { Meta } = Card;
const { Paragraph } = Typography;

const ListItemComponent = ({ authors, isLoading, handleChange }) => {

  const dispatch = useDispatch();

  const handleAddToFavorite = (author) => {
    dispatch(addFavoriteAuthor(author));
  }

  const handleRemoveFavorite = (author) => {
    dispatch(removeFavoriteAuthor(author));
  }

  return (
    <div style={{padding: "15px",  display: isLoading ? "none" : "block"}}>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 1,
          md: 1,
          lg: 2,
          xl: 2,
          xxl: 2,
        }}
        dataSource={ authors.results || []}
        renderItem={author => (
          <List.Item key={author._id}>
            <Card
              hoverable
              actions={
                [
                  <Tooltip title="Add favorite" ><StarOutlined key="add_favorite" style={{color: "blue"}} onClick={() => handleAddToFavorite(author)}/></Tooltip>,
                  <Tooltip title="Remove favorite"><DeleteOutlined key="remove_favorite" style={{color: "red"}} onClick={() => handleRemoveFavorite(author)}/></Tooltip>,
                ]
            }
            >
              <Meta
                avatar={<Avatar src="/images/user.png" />}
                title={<Tooltip title={author.name} >{author.name}</Tooltip>}
                description={
                  <>
                    <Paragraph
                      style={{height: "64px"}}
                      ellipsis={{
                        rows: 3
                      }}
                    >
                      <Tooltip title={author.bio} >{author.bio}</Tooltip>
                    </Paragraph>
                    <Paragraph
                      ellipsis={{
                        rows: 1
                      }}
                    >
                      <Tooltip title={author.link} >Ref: <a target={"_blank"} rel="norferrer" href={author.link}>{author.link}</a></Tooltip>
                    </Paragraph>
                  </>
                }
              />
            </Card>
          </List.Item>
        )}
      />
      <Pagination
        style={{float: "right"}}
        total={authors.totalCount}          
        pageSize={authors.count || 10}
        current={authors.page || 1}
        size='small'
        onChange={(page, pageSize) => handleChange({page, pageSize})}
      />
    </div>
  )
}

export default ListItemComponent;