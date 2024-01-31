/*  
In the following every element of the object sites will be linked in the navbar. Sites can be grouped into groups, so they are listed together. 
The available groups can be defined in the object groups. If a site is not supposed to be in a group write 'group: null'.
An entry 'pizza party' in the group 'activities' will link to the page '/language/activities/pizza_party'.
An entry 'contact' without a group, will link to the page 'language/contact'.
*/

let groups = {
    activities: {en: 'activities', fr: 'activités', nl: 'aktiviteiten'},
    philosophy: {en: 'philosophy', fr: 'philosophie', nl: 'filosofie'}
}

let sites = {
     '': {en: 'Boskanter', fr: 'Boskanter', nl: 'Boskanter', group: null},
     pizza_parties: {en: 'pizza parties', fr: 'pizza parties', nl: 'pizza parties', group: 'activities'},
     repair_cafe: {en: 'repair café', fr: 'repair café', nl: 'repair café', group: 'activities'},
     calendar: {en: 'calendar', fr: 'calendrier', nl: 'kalender', group: 'activities'},
     permaculture: {en: 'permaculture', fr: 'permaculture', nl: 'permakultuur', group: 'philosophy'},
     links: {en: 'links', fr: 'links', nl: 'links', group: 'philosophy'},
     contact: {en: 'contact', fr: 'contact', nl: 'contact', group: null}
};

// DO NOT EDIT AFTER HERE

let nav = {en: '', fr: '', nl: ''};

for (l in nav) {
     let groups = [];
     for (s in sites) {
          if (sites[s].group === null) {
              groups[s] = '<li>' + '<a href="/' + l + '/' + s + '">' + sites[s][l] + '</a></li>';
          }
          else {
              groups["+" + sites[s].group] = '<li>' + '<a href="/' + l + '/' + sites[s].group + '/' + s + '">' + sites[s][l] + '</a></li>';
          }
     }
     for (g in groups) {
          if (g[0] == '+') {
              nav[l] += '<li>' + g.slice(1) + '<ul>' + groups[g] + '</ul></li>';
          }
          else {
                 nav[l] += groups[g];
          }
     }
     
    module.exports = nav;
}