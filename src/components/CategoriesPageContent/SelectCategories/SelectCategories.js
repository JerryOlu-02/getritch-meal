import {
  setSearchedStatus,
  useFetchCategoriesQuery,
  useFetchOneCategoryMutation,
} from '../../../store';
import Button from '../../Button/Button';
import './sass/SelectCategories.scss';
import CategoriesContent from '../CategoriesContent/CategoriesContent';
import { useEffect, useState } from 'react';
import SearchForm from './SearchForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchedMeals,
  clearSearchValue,
  setCurrentPage,
} from '../../../store';
import Loader from '../../Loader/Loader';
import Pagination from '../../Pagination/Pagination';

const SelectCategories = function () {
  const dispatch = useDispatch();

  // GET searched meals form state
  const meals = useSelector(({ app: { searchedMeals } }) => searchedMeals);

  // Currently selected Category
  const [categoryName, setCategoryName] = useState('Beef');

  // Clear Category Name onSearch
  const clearCategoryName = function () {
    setCategoryName('');
  };

  // GET Categories on initail page Load
  const { data, isError, isLoading } = useFetchCategoriesQuery();
  // console.log(data);

  // Get Mutation Action to GET a particular Category on click
  const [getCategory, results] = useFetchOneCategoryMutation();
  // console.log(results);

  useEffect(() => {
    if (categoryName === '') return;

    // Fetch Category Meals When the categoryName State Changes
    getCategory(categoryName);
  }, [getCategory, categoryName]);

  // Check if results of if category is sucessfully fetched
  useEffect(() => {
    dispatch(
      setSearchedStatus({
        isError: results.isError,
        isLoading: results.isLoading,
      })
    );

    if (results.isSuccess) {
      dispatch(setSearchedMeals(results.data.meals));
    } else return;
  }, [dispatch, results]);

  const showCategory = function (category) {
    // Set Selected Category State when Button is clicked
    setCategoryName(category);

    // Clear search input
    dispatch(clearSearchValue());
  };

  let buttonContent;

  if (isLoading) {
    buttonContent = <Loader big />;
  } else if (isError) {
    buttonContent = <p>Could not Fetch Categories</p>;
  } else {
    buttonContent = data?.categories.map((category) => {
      const activebtn = category.strCategory === categoryName ? 'active' : '';

      const isClicked = category.strCategory === categoryName;

      return (
        <Button
          loading={isClicked && results.isLoading}
          className={activebtn}
          onClick={() => showCategory(category.strCategory)}
          key={category.idCategory}
        >
          {category.strCategory}
        </Button>
      );
    });
  }

  // PAGINATION SYNTAX
  const noOfContent = 12;

  const setClickedPage = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <section className="selectcategories">
      <SearchForm onSearch={clearCategoryName} />

      <aside className="selectcategories-buttons">{buttonContent}</aside>

      <aside className="selectcategories-meals">
        <CategoriesContent contentPerPage={noOfContent} />
      </aside>

      <Pagination
        onClick={setClickedPage}
        arrayLength={meals.length}
        contentPerPage={noOfContent}
      />
    </section>
  );
};

export default SelectCategories;
