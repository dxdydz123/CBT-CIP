// document.getElementById('event-form').addEventListener('submit', function(event) {
//     event.preventDefault();
    
//     const name = document.getElementById('event-name').value;
//     const date = document.getElementById('event-date').value;
//     const time = document.getElementById('event-time').value;
//     const location = document.getElementById('event-location').value;

//     const eventList = document.getElementById('event-list');
//     const eventEntry = document.createElement('div');
//     eventEntry.innerHTML = `<strong>${name}</strong> on ${date} at ${time} - ${location}`;
//     eventList.appendChild(eventEntry);

//     // Clear the form
//     document.getElementById('event-form').reset();
// });

document.getElementById('event-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('event-name').value;
    const date = document.getElementById('event-date').value;
    const time = document.getElementById('event-time').value;
    const location = document.getElementById('event-location').value;

    const eventList = document.getElementById('event-list');
    const eventEntry = document.createElement('div');
    eventEntry.classList.add('event-entry');
    eventEntry.innerHTML = `<strong>${name}</strong> on ${date} at ${time} - ${location}`;
    eventList.appendChild(eventEntry);

    // Add the event to the events array
    events.push({ name, date, time, location });

    // Clear the form
    document.getElementById('event-form').reset();

    // Filter upcoming events
    filterUpcomingEvents();
});

// Initialize an empty array for events
let events = [];

// Function to filter upcoming events
function filterUpcomingEvents() {
    const currentDate = new Date();

    // Remove past events
    events = events.filter(event => {
        const eventDate = new Date(event.date + ' ' + event.time);
        return eventDate >= currentDate;
    });

    // Clear the event list
    document.getElementById('event-list').innerHTML = '';

    // Display upcoming events
    events.forEach(event => {
        const eventList = document.getElementById('event-list');
        const eventEntry = document.createElement('div');
        eventEntry.classList.add('event-entry');
        eventEntry.innerHTML = `<strong>${event.name}</strong> on ${event.date} at ${event.time} - ${event.location}`;
        eventList.appendChild(eventEntry);
    });
}

// Call the filterUpcomingEvents function initially
filterUpcomingEvents();

