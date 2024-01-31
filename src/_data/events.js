/*
events is the array of events which the calendar will display. Here an event is a javascript array with the attributes 'date', 'en', 'nl', 'fr', key where
    'date' (written as a string in the format dd.mm.yyyy), 
    'en', 'fr', 'nl' (a string of what you want the calendar to say in the specific language),
    'key' (the translation key to the site you want to link to, if you dont want to link to a site, leave empty)
To add a new entry append for example
{'date': '10.11.2024', 'en': 'Pizza Party', 'nl': 'Pizza Party', 'fr': 'Pizza Party', 'key': 'pizza-party'} 
*/

let events = [
    {date: '10.01.2024', en: 'Pizza Party', nl: 'Pizza Party', fr: 'Pizza Party', key: 'pizza-party'} 
];

for (e of events) {
    var day = parseInt(e.date.slice(0,2)), month = parseInt(e.date.slice(3,5)), year = parseInt(e.date.slice(6,10));
    e.date = year + ", " + (month-1) + ", " + day;
}

module.exports = events;