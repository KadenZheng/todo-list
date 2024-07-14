import './css/style.css';
import createSidebar from './js/sidebar';
import createTop from './js/top';
import createMain from './js/main';
import openModal from './js/modal';
import newProject from './js/newProject';
import removeFilters from './js/cancelFilters';

document.addEventListener('DOMContentLoaded', () => {
    createSidebar();
    createMain();
    openModal();
    createTop();
    removeFilters();
    newProject();
});
