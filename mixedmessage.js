const breakfastOptions = ['bacon and eggs', 'bagels', 'donuts', 'nuts', 'chilaquiles', 'Power bar', 'coffee only']
const lunchOptions = ['hamburger', 'sandwich', 'salad', 'hot dog', 'chicken bowl', 'burrito']
const dinnerOptions = ['fried chicken', 'Korean BBQ', 'steak', 'basked chicken', 'pasta', 'Chipotle', 'vegan', 'pizza', 'Thai', 'Japanese', 'gyros']

const generateRandomNumber = (num) => {
    return Math.floor(Math.random() * num);
}

let mealChoice = ['Here is your randomly generated meal plan for today:']

let breakfastChoice = () => {
    let brk = breakfastOptions[generateRandomNumber(breakfastOptions.length)];
    mealChoice.push(`For breakfast, have ${brk}.`);
}

let lunchChoice = () => {
    let lnch = lunchOptions[generateRandomNumber(lunchOptions.length)];
    mealChoice.push(`For lunch, have a ${lnch}.`);
}

let dinnerChoice = () => {
    let din = dinnerOptions[generateRandomNumber(dinnerOptions.length)];
    mealChoice.push(`For dinner, have ${din}.`);
}

breakfastChoice()
lunchChoice()
dinnerChoice()

const formatted = mealChoice.join(' ')

console.log(formatted)
