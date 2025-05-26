document.addEventListener('DOMContentLoaded', function () {
    const equiposSection = document.getElementById('MealFinder');
    const API_MEAL = "https://www.themealdb.com/api/json/v1/1/categories.php";


async function fetchMeals() {
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php', {
    });

    const data = await res.json();
    displayMeals(data.meals);
}
})