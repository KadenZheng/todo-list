import dashboard from '../../public/assets/icons/dashboard1.png';
import list from '../../public/assets/icons/list1.png';
import calendar from '../../public/assets/icons/calendar1.png';
import barchart from '../../public/assets/icons/barchart1.png';
import settings from '../../public/assets/icons/settings1.png';
import profile_pic from '../../public/assets/images/pfp.png';

const createSidebar = () => {
    let container = document.querySelector('#container');
    const icons = [dashboard, list, calendar, barchart, settings];
    const icon_alts = ['dashboard', 'list', 'calendar', 'barchart', 'settings'];

    let sidebar = document.createElement('div');
    sidebar.id = 'sidebar';

    container.appendChild(sidebar);

    let profile = document.createElement('div');
    profile.classList.add('profile');
    let pfp = document.createElement('img');
    pfp.src = profile_pic;
    pfp.alt = 'profile';
    profile.appendChild(pfp);
    sidebar.appendChild(profile);

    let icons_container = document.createElement('div');
    icons_container.classList.add('icons-container');
    sidebar.appendChild(icons_container);

    for (let i = 0; i < icons.length; i++) {
        let img = document.createElement('img');
        img.classList.add('icons');
        img.src = icons[i];
        img.alt = icon_alts[i];
        icons_container.appendChild(img);
    }

    let spacer = document.createElement('div');
    spacer.classList.add('spacer');
    sidebar.appendChild(spacer);
};

export default createSidebar;
