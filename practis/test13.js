const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for (let day of days){
    console.log(day.substr(0,1).toUpperCase()+day.substr(1).toLowerCase());
}