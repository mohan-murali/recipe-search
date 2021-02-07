export const initialState = {
    searchInput : "",
    recentSearches: [],
    cusineType: [],
    mealType: "",
    dishType: [],
    health: [],
    calories: "",
    time: "",
    diet: ""
}

export const reducer = (state, action) => {
    switch(action.type) {
        case 'searchInput' :
            return { ...state, searchInput: action.value };
        case 'recentSearches':
            return { ...state, recentSearches: [...state.recentSearches, action.value]}
        case 'cusineType':
           if(state.cusineType.includes(action.value)){
               return { ...state, cusineType: state.cusineType.filter(cusine => cusine !== action.value)};
           } else {
               return { ...state, cusineType: [...state.cusineType, action.value]}
           }
        case 'mealType':
            return { ...state, mealType: action.value}
        case 'dishType':
            if(state.dishType.includes(action.value)){
                return { ...state, dishType: state.dishType.filter(dish => dish !== action.value)};
            } else {
                return { ...state, dishType: [...state.dishType, action.value]}
            }
        case 'health':
            if(state.health.includes(action.value)){
                return { ...state, health: state.health.filter(cusine => cusine !== action.value)};
            } else {
                return { ...state, health: [...state.health, action.value]}
            }
        case 'calories':
            return { ...state, calories: action.value}
        case 'time':
            return { ...state, time: action.value}
        case 'diet':
            return { ...state, diet: action.value}
        default :
            throw new Error();
    }
}

export const cusines = ["American", "Asian", "British", "Caribbean", "Chinese", "French", "Indian", "Italian", "Japanese", "Mediterranean", "Mexican"];

export const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

export const dishTypes = ["Alcohol-cocktail", "Biscuits and cookies", "Bread", "Cereals", "Condiments and sauces", "Drinks", "Desserts", "Egg", "Japanese", "Main course", "Omelet"];

export const health = ["Alcohol-free", "Immune-Supportive", "Celery-free", "Crustcean-free", "Kidney friendly", "Kosher", "Lupine-free", "Mustard-free", "Paleo", "Pescatarian", "Pork-free"];

export const diet = ["Balanced", "High-Fiber", "High-Protein", "Low-Carb", "Low-Fat", "Low-Sodium"];