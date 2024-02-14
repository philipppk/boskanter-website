let nav = [
    {title: {en: 'principles', fr: 'principes', nl: 'principes'}, link: 'principles', sub: [
        {title: {en: 'permaculture', fr: 'permaculture', nl: 'permacultuur'}, link: 'principles#permaculture'},
        {title: {en: 'transition towns', fr: 'villes en transition', nl: 'overgangssteden'}, link: 'principles#transition_towns'},
        {title: {en: 'links', fr: 'links', nl: 'links'}, link: 'principles#links'}
    ]},
    {title: {en: 'volunteering', fr: 'voluntariat', nl: 'vrijwilligerswerk'}, link: 'volunteering', sub: [
        {title: {en: 'ESC', fr: 'ESC', nl: 'ESC'}, link: 'volunteering#ESC'},
        {title: {en: 'workaway', fr: 'workaway', nl: 'workaway'}, link: 'volunteering#workaway'},
    ]},
    {title: {en: 'blog', fr: 'blog', nl: 'blog'}, link: 'blog'},
    {title: {en: 'events', fr: 'événements', nl: 'evenementen'}, link: 'blog'},
    {title: {en: 'activities', fr: 'activités', nl: 'activiteiten'}, link: 'activities_for_locals', sub: [
        {title: {en: 'pizza parties', fr: 'pizza parties', nl: 'pizza parties'}, link: 'activities#pizza_parties'},
    ]},
];

// do not edit after here

function buildNav(pages, lang) {
    let s = '';
    let p;
    for (p of pages) {
        
        let inner = '';
        if (p.sub !== undefined) { 
            inner += buildNav(p.sub, lang); 
        }

        if (p.link !== undefined) { 
            s += `<li><a href="/${lang}/${p.link}">${p.title[lang]}</a>${inner}</li>`; 
        }
        else { 
            s += `<li>${p.title[lang]} ${inner}</li>`; 
        }
    }
    return '<ul>' + s + '</ul>'; 
}

let navhtml = [];
for (lang of ['en', 'fr', 'nl']) { navhtml[lang] = buildNav(nav, lang).slice(4,-5); }

module.exports = navhtml;