import { totalProjects } from './createCard';
import createMain from './main';
import removeFilters from './cancelFilters';

const tab_list = [];

let container = document.querySelector('#container');

const createTop = () => {
    const uniqueProjects = new Set(totalProjects);

    let main_content = document.querySelector('#main-content');

    let top_tab = document.createElement('div');
    top_tab.id = 'top-tab';
    main_content.appendChild(top_tab);

    let greeting = document.createElement('div');
    greeting.classList.add('greeting');

    let headline = document.createElement('div');
    headline.classList.add('headline');
    headline.innerHTML = 'good evening, kaden!';
    greeting.appendChild(headline);

    let date = document.createElement('div');
    date.classList.add('date');
    greeting.appendChild(date);
    top_tab.appendChild(greeting);

    let date_icon = document.createElement('div');
    date_icon.classList.add('date-icon');
    date_icon.src = calendar;
    date_icon.alt = 'calendar';
    date.appendChild(date_icon);

    let date_text = document.createElement('div');
    date_text.classList.add('date-text');
    date_text.innerHTML = '07/12/2024';
    date.appendChild(date_text);

    let tabs = document.createElement('div');
    tabs.classList.add('tabs');

    // Function to handle tab selection
    const selectTab = (selectedTab) => {
        tabs.querySelectorAll('.tab').forEach((tab) => {
            tab.classList.remove('tab-bold');
        });
        selectedTab.classList.add('tab-bold');
    };

    for (let projectName of uniqueProjects) {
        let tab = document.createElement('div');
        tab.classList.add('tab');
        tab.innerHTML = projectName;
        tab.style.cursor = 'pointer';
        tab.addEventListener('click', () => {
            selectTab(tab);
            document.querySelector('#content').remove();
            createMain(projectName);
        });
        tabs.appendChild(tab);
    }

    let new_proj_tab = document.createElement('div');
    new_proj_tab.classList.add('tab');
    new_proj_tab.id = 'addProject';
    new_proj_tab.innerHTML = 'add new project';
    new_proj_tab.style.color = 'cornflowerblue';
    tabs.appendChild(new_proj_tab);
    top_tab.appendChild(tabs);

    let cancel_filters = document.createElement('div');
    cancel_filters.classList.add('tab');
    cancel_filters.id = 'cancel';
    cancel_filters.innerHTML = 'remove filters';
    cancel_filters.addEventListener('click', removeFilters);
    tabs.appendChild(cancel_filters);
};

export default createTop;
