import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { reset, getAuthors } from '../../../redux/slices/authors/authorsSlice';
import ListItemComponent from '../../../components/ListItemComponent';
import Skeleton from '../../../components/Skeleton';

const AllAuthors = () => {

  const initialFilterState = {
    currentPage: 1,
    limit: 10,
    skip: 0,
  }
  const [filters, setFilters] = useState(initialFilterState);
  const dispatch = useDispatch();

  const { authors, isLoading } = useSelector((state) => state.authors);
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
    dispatch(getAuthors(filters));
    return () => {
      dispatch(reset());
    }
  }, [ limit, currentPage ]);

  return (
    <>
      <Skeleton loading={isLoading} rows={5}/>
      <ListItemComponent authors={authors} isLoading={isLoading} handleChange={handleChange} />
    </>
  )
}

export default AllAuthors;