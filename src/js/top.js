import calendar from '../../public/assets/icons/calendar1.png';

const tab_list = ['all todos', 'personal', 'work', 'me time', 'household'];

let container = document.querySelector('#container');

const createTop = () => {
    let main_content = document.createElement('div');
    main_content.id = 'main-content';
    container.appendChild(main_content);

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

    for (let i = 0; i < tab_list.length; i++) {
        let tab = document.createElement('div');
        tab.classList.add('tab');
        tab.innerHTML = tab_list[i];
        tabs.appendChild(tab);
    }
    top_tab.appendChild(tabs);
};

export default createTop;
