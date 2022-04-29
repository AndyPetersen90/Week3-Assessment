

// id="color">My Favorite Color</button>
// id="place">My Favorite Place</button>
// id="ritual">My Favorite Ritual</button>


const color = document.querySelector('#color');
const place = document.querySelector('#place');
const ritual = document.querySelector('#ritual');

const colorAlert = () => {alert('Pine Tree Green')}
const placeAlert = () => {alert('Nature!')}
const ritualAlert = () => {alert('Setting off Fireworks with my son on the 4th of July.')}


color.addEventListener('click', colorAlert);
place.addEventListener('click', placeAlert);
ritual.addEventListener('click', ritualAlert)




