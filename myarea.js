
const randomFood = document.querySelector('.random-food');
const foodDecider =  document.querySelector('.food-response');

//Below functions calls the random restaurant to an alert//
let randomize = () => {

    let foodArr = ['Panda Express', 'Black Bear Diner', 'Los Primos', 'Roses Food Truck', 'Kabuki', 'Jacks Wood-Fired Oven', 'McDonalds', "Wendy's", "Carl's Jr.",
    'HuHot', 'Firehouse Pizza', 'Arbys', 'Taco Bell', 'Costa Vida', 'Cafe Rio', 'Firehouse Subs', 'The Beehive Pub and Grill', 'Center Stree Grill', 'Even Stevens Sandwiches',
    'Burger King', 'Juniper', 'Angies', 'Romos Mediterranean Grill']

    let num = Math.floor(Math.random() * (foodArr.length + 1));

    return foodArr[num];
}

const foodAlert = () => {
    alert (randomize());
}

// randomFood.addEventListener('click', foodAlert);

//Here we will call the random restaurant to be printed on the page.

function clearRestaurant () {
    foodDecider.innerHTML = ''
}


function foodTag () {

    clearRestaurant()

    let newTag = document.createElement('h3');

    newTag.textContent = randomize();
    foodDecider.appendChild(newTag);
}


randomFood.addEventListener('click', foodTag);

