import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { reset, getFavoriteAuthors } from '../../../redux/slices/authors/favoriteAuthorSlice';
import ListItemComponent from '../../../components/ListItemComponent';
import Skeleton from '../../../components/Skeleton';
import Notification from '../../../components/Notification';

const FavoriteAuthors = () => {

  const initialFilterState = {
    currentPage: 1,
    limit: 10,
    skip: 0,
  }
  const [filters, setFilters] = useState(initialFilterState);
  const dispatch = useDispatch();

  const { favoriteAuthors, isLoading, responseMessage } = useSelector((state) => state.favoriteAuthors);
  const { limit, currentPage } = filters;

  const handleChange = ({page, pageSize}) => {
    setFilters(
      {
        currentPage: page,
        limit: pageSize,
        skip: (page-1)*pageSize
      }
    )
    
  }

  useEffect(() => {
    dispatch(getFavoriteAuthors(filters));
    return () => {
      dispatch(reset());
    }
  }, [ limit, currentPage, dispatch, responseMessage, ]);

  return (
    <>
      <Skeleton loading={isLoading} rows={5}/>
      <ListItemComponent filters={filters} authors={favoriteAuthors} isLoading={isLoading} isFavorite={true} handleChange={handleChange}/>
    </>
  )
}

export default FavoriteAuthors;