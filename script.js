// ==UserScript==
// @name        WoT EU Forum Customization
// @author      Forcellrus
// @version     1.0
// @match       http://forum.worldoftanks.eu/*
// @grant       GM_addStyle
// ==/UserScript==

// ------------------------------------------------------ CONFIGURATION ------------------------------------------------------

// MODULES
// Only change values below to either "true" or "false" (WITHOUT quotations) and don't delete the commas!

const config = [

  // Custom navigation bar buttons (you can add your own buttons below config section or customize the preset ones)
  true
  ,
  // Hide top banner & add homepage button to navigation bar instead
  true
  ,
  // Hide page footer (preserves the "Back to top" button)
  true
  ,
  // Hide "Important information" section
  true
  ,
  // Hide "Queued" topic badges
  true
  ,
  // Hide "Hot" topic badges
  true
  ,
  // Change the moderated post dot/indicator to a 100px scale
  false
  ,
  // Hide "Popular" topic badge/star
  true
  ,
]


// HEADER BUTTONS
// To add a new button please use the following syntax: headerButtonAdd(Button label, Button hover text, URL);
// Don't forget to encapsulate every argument with single quotes and separate them with a comma, like below.
// Buttons will appear in the order they are added, from top to bottom.

buttonAdd('New Content', 'View New Content', 'http://forum.worldoftanks.eu/index.php?app=core&amp;module=search&amp;do=viewNewContent&amp;search_app=forums');
buttonAdd('Forum Rules', 'Go to Forum Rules', 'http://forum.worldoftanks.eu/index.php?/forum-1467/announcement-124-forum-rules');

// ----------------------------------------------------------------------------------------------------------------------------





// Only change the code below if you know what you're doing.

function buttonAdd (label, hoverText, url) {
  if (!config[0]) return;
  const li = document.createElement('li');
  li.setAttribute('class', 'left');
  li.innerHTML = `<a href=\"${url}\" title=\"${hoverText}\">${label}</a>`;
  document.querySelector('#community_app_menu').appendChild(li);
}

if (config[1]) {
  const li = document.createElement('li');
  li.setAttribute('class', 'left');
  li.innerHTML = '<a href="http://forum.worldoftanks.eu/" title="Go to community index">Home</a>';
  document.querySelector('#community_app_menu').prepend(li);
  document.querySelector('#branding').remove();
}

if (config[2]) {
  const elements = ['#footer_utilities > ul',
                    '#footer_utilities > div.b-footer-copyr',
                    '#footer_utilities > div.clearfix'];
  elements.forEach(element => {
    document.querySelector(element).remove();
  });
}

if (config[3]
    && document.querySelector('.b-announcements') !== null) {
  document.querySelector('.b-announcements').nextSibling.nextSibling.remove();
  document.querySelector('.b-announcements').remove();
}

if (config[4]) {
  document.querySelectorAll('.ipsBadge_orange').forEach(element => {
    if (element.innerText == "QUEUED") element.remove();
    });
}

if (config[5]) {
  document.querySelectorAll('.ipsBadge_orange').forEach(element => {
    if (element.innerText == "HOT") element.remove();
    });
}

if (config[6]) {
  GM_addStyle (`
      .mlabel {
        background-size: 100px !important;
        height: 100px !important;
        width: 100px !important;
      }
      .mlabel.unmarked:hover {
        background-position: 0 300px !important;
      }
      .mlabel.marked {
        background-position: 0 200px !important;
      }
      .mlabel.marked:hover {
        background-position: 0 100px !important;
      }
      .post_body {
        padding-right: 100px !important;
      }
  `);
}

if (config[7]
   && document.querySelector('.rep_highlight')) {
  document.querySelector('.rep_highlight').remove();
}