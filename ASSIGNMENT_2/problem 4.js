function topRatedRestaurant(restaurants) {
    
    if(Array.isArray(restaurants) === false || restaurants.length === 0){
        return 'Invalid';
    }

    let highRating = restaurants[0].rating;
    let name = restaurants[0].name; 
    for(let i = 0;i<restaurants.length;i++){

        if(highRating < restaurants[i].rating){
            highRating = restaurants[i].rating;
            name = restaurants[i].name;
        }


    }
    return name.toUpperCase();
}


console.log(topRatedRestaurant([{name:"Chillox",rating:4.5},{name:"Sultan's Dine",rating:4.8}]));
console.log(topRatedRestaurant([{name:"KFC",rating:4.2},{name:"Pizza Hut",rating:4.6}]));
console.log(topRatedRestaurant("restaurants"));
console.log(topRatedRestaurant([]));