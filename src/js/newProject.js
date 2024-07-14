import Project from './project';
import { totalProjects } from './createCard';
import createTop from './top';
import { updateProjectList } from './modal';

const newProject = () => {
    let state = 'closed';
    const topTab = document.querySelector('#top-tab');
    const modal = document.querySelector('#newProj');

    function attachEventListener() {
        const addNewProjButton = document.querySelector('#addProject');
        if (addNewProjButton) {
            addNewProjButton.addEventListener('click', () => {
                if (state === 'closed') {
                    modal.showModal();
                    state = 'open';
                }
            });
        }
    }

    attachEventListener(); // Initial attachment

    // Add event listener to close the modal
    modal.addEventListener('close', () => {
        state = 'closed';
    });

    const input = modal.querySelector('#name');
    const form = modal.querySelector('form');

    function handleNewProject(projectName) {
        totalProjects.add(projectName.trim());
        modal.close();
        const existingTopTab = document.querySelector('#top-tab');
        if (existingTopTab) existingTopTab.remove();
        createTop();
        updateProjectList();
        input.value = '';
        state = 'closed';
        attachEventListener();
    }

    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleNewProject(input.value);
            }
        });
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const newProjectName = modal.querySelector('#name').value;
            handleNewProject(newProjectName);
        });
    }
};

export default newProject;
