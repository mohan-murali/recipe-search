import React, { useReducer } from 'react'
import CheckboxTypes from './CheckboxTypes';
import RadioTypes from './RadioTypes';
import RangeType from './RangeType';
import { getQueryString } from './ApiHelper';
import {
    initialState,
    reducer,
    cusines,
    mealTypes,
    dishTypes,
    health,
    diet } from './searchUtils';

const Search = ({onSearch, isSearchInProgress}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const onSearchInputChange = (e) => {
        dispatch({type: 'searchInput', value: e.target.value});
    }

    const searchRecipie = () => {

        const {
            searchInput,
            cusineType,
            mealType,
            dishType,
            health,
            calories,
            time,
            diet
        } = state;

        if(!isSearchInProgress){
            dispatch({type: 'recentSearches', value: state.searchInput});
            const queryString = getQueryString(cusineType, mealType, dishType, health,calories, time, diet);
            onSearch(queryString, searchInput);
        }
    }

    const updateCusineType = value => {
        dispatch({type: 'cusineType', value});
    }

    const updateMealType = value => {
        dispatch({type: 'mealType', value});
    }

    const updateDishType = value => {
        dispatch({type: 'dishType', value});
    }

    const updateHealth = value => {
        dispatch({type: 'health', value});
    }

    const updateDiet = value => {
        dispatch({type: 'diet', value});
    }

    const setCalories = value => {
        dispatch({type: 'calories', value})
    }

    const setTime = value => {
        dispatch({type: 'time', value})
    }

    return (
        <section className="sec-search">
            <input
                type="text"
                className="inp-search-txt"
                placeholder="search for recipie"
                value={state.searchInput}
                onChange={onSearchInputChange}/>

            <button
                className="btn-search"
                onClick={searchRecipie}
            >
                Search
            </button>
            <h2>Filter based on</h2>
            <ul>
                <li>
                    <h3>Cusine Types</h3>
                    <CheckboxTypes
                        items={cusines}
                        type="cusine"
                        selectedItems={state.cusineType}
                        updateCheckboxType={updateCusineType}
                    />
                </li>
                <li>
                    <h3>Meal Type</h3>
                    <RadioTypes
                        items={mealTypes}
                        type="meal"
                        selectedItem={state.mealType}
                        updateRadioType={updateMealType}
                    />
                </li>
                <li>
                    <h3>Dish Type</h3>
                    <CheckboxTypes
                        items={dishTypes}
                        type="dish"
                        selectedItems={state.dishType}
                        updateCheckboxType={updateDishType}
                    />
                </li>
                <li>
                    <h3>Health</h3>
                    <CheckboxTypes
                        items={health}
                        type="health"
                        selectedItems={state.health}
                        updateCheckboxType={updateHealth}
                    />
                </li>
                <li>
                    <h3>Calories</h3>
                    <RangeType
                        type="calories"
                        setValue={setCalories}
                    />
                </li>
                <li>
                    <h3>Time in mins</h3>
                    <RangeType
                        type="time"
                        setValue={setTime}
                    />
                </li>
                <li>
                    <h3>Diet</h3>
                    <RadioTypes
                        items={diet}
                        type="diet"
                        selectedItem={state.diet}
                        updateRadioType={updateDiet}
                    />
                </li>
            </ul>
        </section>
    )
}

export default Search;