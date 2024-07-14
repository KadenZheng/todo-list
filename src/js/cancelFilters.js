import createTop from './top';
import createMain from './main';
import { totalProjects } from './createCard';

const removeFilters = () => {
    // Remove the content
    document.querySelector('#content').remove();
    // Remove bold effect from all tabs
    document.querySelectorAll('.tab').forEach((tab) => {
        tab.classList.remove('tab-bold');
    });
    // Recreate the main content without filters
    createMain(null);
};

export default removeFilters;
