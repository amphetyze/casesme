function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
}

function loadFromLocalStorage(key) {
    const data = localStorage.getItem(key)
    return data ? JSON.parse(data) : null
}

function updateTimerDisplay(days, hours, minutes, seconds) {
    const timeItems = document.querySelectorAll(
        ".welcome-open__time-item__value"
    )

    if (timeItems.length > 0) {
        timeItems[0].textContent = days
        timeItems[1].textContent = hours
        timeItems[2].textContent = minutes
        timeItems[3].textContent = seconds
        timeItems[4].textContent = days
        timeItems[5].textContent = hours
        timeItems[6].textContent = minutes
        timeItems[7].textContent = seconds
    }
}

function updateTimer(endTime) {
    const now = new Date().getTime()
    const timeLeft = Math.max(endTime - now, 0)

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

    updateTimerDisplay(days, hours, minutes, seconds)

    if (timeLeft <= 0) {
        clearInterval(timerInterval)
    }
}

const INITIAL_TIME =
    1 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000 + 50 * 60 * 1000

let endTime = loadFromLocalStorage("endTime")

if (!endTime || new Date().getTime() > endTime) {
    endTime = new Date().getTime() + INITIAL_TIME
    saveToLocalStorage("endTime", endTime)
}

const timerInterval = setInterval(() => updateTimer(endTime), 1000)

updateTimer(endTime)
