import axios from 'axios';

const API_URL = 'https://api.quotable.io/authors';

const getAuthors = async ({ limit, skip }) => {
  const { data } = await axios.get(`${API_URL}?limit=${limit}&skip=${skip}`);
  return data;
}

const getFavoriteAuthors = ({ limit, skip }) => {
  const data = {
    count: limit,
    totalCount: 0,
    page: (skip/limit)+1,
    totalPages: 0,
    lastItemIndex: 0,
    results: []
  };
  const favoriteAuthors = JSON.parse(localStorage.getItem("favoriteAuthors") || "[]");
  favoriteAuthors.forEach((author) => {
    data.totalCount = data.totalCount + 1;
    if(data.totalCount > skip && (data.totalCount-skip) <= limit) {
      data.results.push(author);
    }
  })
  return data;
}

const addFavoriteAuthor = (author) => {

  const favoriteAuthors = JSON.parse(localStorage.getItem("favoriteAuthors") || "[]");
  const favoriteAuthorIndex = favoriteAuthors.findIndex((favAuthor) => favAuthor._id === author._id);
  if(favoriteAuthorIndex !== -1) {
    throw new Error(`${author.name} is already a favorite author`);
  }
  favoriteAuthors.push(author);
  localStorage.setItem("favoriteAuthors", JSON.stringify(favoriteAuthors));
  return favoriteAuthors;
}

const removeFavoriteAuthor = (author) => {

  const favoriteAuthors = JSON.parse(localStorage.getItem("favoriteAuthors") || "[]");
  const favoriteAuthorIndex = favoriteAuthors.findIndex((favAuthor) => favAuthor._id === author._id);
  if(favoriteAuthorIndex === -1) {
    throw new Error(`${author.name} is not a favorite author`);
  }
  favoriteAuthors.splice(favoriteAuthorIndex, 1);
  localStorage.setItem("favoriteAuthors", JSON.stringify(favoriteAuthors));
  return favoriteAuthors;
}

export default {
  getAuthors,
  addFavoriteAuthor,
  getFavoriteAuthors,
  removeFavoriteAuthor
};