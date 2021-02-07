const baseUrl = "https://api.edamam.com/search?";

const appId = '01ee9bf9';
const appKey = 'd95ec32ad6044a49311127350a481198';
export const getApiData = async (queryString, searchText, setError) => {
    try {
        const url = `${baseUrl}q=${searchText}&app_id=${appId}&app_key=${appKey}${queryString}`;
        const response = await fetch(url);

        let result = await response.json();

         if(response.status !== 200){
            setError(result);
         } else {
            setError('');
         }

         return result;
    }
    catch(ex){
         setError(ex);
    }
};

export const getQueryString = (cusineTypes, mealType, dishTypes, health, calories, time, diet) => {
    let searchQuery = '';

    cusineTypes.forEach(item => {
       searchQuery = `${searchQuery}&cuisineType=${item.toLowerCase()}`
    });

    dishTypes.forEach(item=>{
       searchQuery = `${searchQuery}&dishType=${item.toLowerCase()}`
    });

    health.forEach(item=>{
       searchQuery = `${searchQuery}&health=${item.toLowerCase()}`
    });

    if(mealType){
       searchQuery = `${searchQuery}&mealType=${mealType.toLowerCase()}`
    }

    if(calories){
       searchQuery = `${searchQuery}&calories=${calories.toLowerCase()}`
    }

    if(time){
       searchQuery = `${searchQuery}&time=${time.toLowerCase()}`
    }

    if(diet){
       searchQuery = `${searchQuery}&diet=${diet.toLowerCase()}`
    }

    return searchQuery;
}
