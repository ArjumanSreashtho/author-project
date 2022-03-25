import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { reset, getFavoriteAuthors } from '../../../redux/slices/authors/favoriteAuthorSlice';
import ListItemComponent from '../../../components/ListItemComponent';
import Skeleton from '../../../components/Skeleton';

const FavoriteAuthors = () => {

  const initialFilterState = {
    currentPage: 1,
    limit: 10,
    skip: 0,
  }
  const [filters, setFilters] = useState(initialFilterState);
  const dispatch = useDispatch();

  const { favoriteAuthors, isLoading } = useSelector((state) => state.favoriteAuthors);
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
  }, [ favoriteAuthors, limit, currentPage ]);

  return (
    <>
      <Skeleton loading={isLoading} rows={5}/>
      <ListItemComponent authors={favoriteAuthors} isLoading={isLoading} handleChange={handleChange}/>
    </>
  )
}

export default FavoriteAuthors;