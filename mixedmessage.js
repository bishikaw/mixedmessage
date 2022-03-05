const randomNumber = Math.floor(Math.random()*5);

const morningAction = (randomNumber) => {
    if (randomNumber === 0) {
        return 'take a shower before work';
    } else if (randomNumber === 1) {
        return 'take a 30 minute walk before work';
    } else if (randomNumber === 2) {
        return 'exercise to start your morning';
    } else if (randomNumber === 3) {
        return 'maintain the same waking hours on the weekends';
    } else if (randomNumber = 4) {
        return 'make an effort not to hit the snooze button'
    }
}

const eveningAction = (randomNumber) => {
    if (randomNumber === 0) {
        return 'go to bed by 10pm';
    } else if (randomNumber === 1) {
        return 'avoid looking at screens (including phones) in bed';
    } else if (randomNumber === 2) {
        return 'avoid watching TV while falling asleep';
    } else if (randomNumber === 3) {
        return 'avoid evening naps';
    } else if (randomNumber = 4) {
        return 'read 4 chapters of a book';
    }
}

const foodAction = (randomNumber) => {
    if (randomNumber === 0) {
        return 'eat a handful of nuts in the morning';
    } else if (randomNumber === 1) {
        return 'replace morning coffee or afternoon sodas with water';
    } else if (randomNumber === 2) {
        return 'include 3 servings of vegetables with dinner';
    } else if (randomNumber === 3) {
        return 'avoid alcoholic drinks';
    } else if (randomNumber = 4) {
        return 'avoid fried foods';
    }
}

const message = console.log (`Today's tips for a healthy and productive day: ${morningAction}, ${eveningAction}, and finally, ${foodAction}. `)