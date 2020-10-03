let closeTabs = []

chrome.browserAction.onClicked.addListener(function (){

    chrome.tabs.query({'url': ['https://www.google.com/*', 'https://stackoverflow.com/*', 'https://developer.mozilla.org/*', 'https://zoom.us/*', 'chrome://newtab/']}, function (tabs) {
        console.log(tabs)
        for (var i = 0; i < tabs.length; i++) {
            chrome.tabs.remove(tabs[i].id);
        }
    });

    // chrome.tabs.create({'url': null})
    chrome.tabs.create({'url': 'popup.html'})
    // 'chrome-extension://offjpdmnjeajlimceddoadmegajlehba/popup.html'
})

// original version -> build list and display
chrome.tabs.query({}, function (tabs) {
    console.log(tabs)
    let list = document.getElementById('opened');
    for (let i = 0; i < tabs.length -1; i++) {
        
        let tabUrl = document.createElement('li');
        tabUrl.innerHTML = `<p>${tabs[i].url} </p>`;
        list.appendChild(tabUrl);

        let title = document.createElement('p');
        title.innerHTML = `${tabs[i].title}`
        tabUrl.appendChild(title)

        let icon = document.createElement('img');
        icon.setAttribute('src', tabs[i].favIconUrl);
        tabUrl.appendChild(icon);
    }
})




// NOT WORKING YET =( new version, save list and display
// let closedTabs = []
// chrome.tabs.query({}, function (tabs) {
//     for (let i = 0; i < tabs.length; i++) {
//         closedTabs.push(
//             {
//                 tabUrl: tabs[i].url,
//                 title: tabs[i].title,
//                 icon: tabs[i].favIconUrl
//             }
//         )
//     }
// })
// console.log(closedTabs)

// let list = document.getElementById('opened');
// for (let tab in closedTabs) {
//     let tabUrl = document.createElement('li');
//     tabUrl.innerHTML = `<p>${tab.tabUrl} </p>`;
//     list.appendChild(tabUrl);

//     let title = document.createElement('p');
//     title.innerHTML = `${tab.title}`
//     tabUrl.appendChild(title)

//     let icon = document.createElement('img');
//     icon.setAttribute('src', tab.favIconUrl);
//     tabUrl.appendChild(icon);
// }

// MANIFEST NOTES
// for making a pop up
  // "browser_action": {
  //   "default_popup": "popup.html"
  // },

//   "content_scripts": [
//     {
//       "matches": ["https://*/*", "http://*/*"],
//       "js": ["./main.js"]
//     }
//   ],


// "chrome_url_overrides": {
//     "newtab": "popup.html"
//   }