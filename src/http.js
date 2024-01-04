export async function fetchAvailableMeals(){
    const response = await fetch('http://localhost:3000/meals');
    const resData = await response.json();

    if(!response.ok){        
        console.log(response);
        console.log(resData);
        throw new Error('Falla en lectura de platos');
    }

    return resData.meals;
}