import { totalProjects } from './createCard';
import { cards } from './createCard';

const projectsHTML = document.querySelector('.projects');

function updateProjectList() {
    const projectsHTML = document.querySelector('.projects');
    projectsHTML.innerHTML = ''; // Clear existing projects

    for (let projectName of totalProjects) {
        let proj_cont = document.createElement('div');
        proj_cont.classList.add('project');
        proj_cont.classList.add('unselected'); // Default to unselected
        proj_cont.classList.add(projectName);

        projectsHTML.appendChild(proj_cont);

        let proj_name = document.createElement('div');
        proj_name.innerHTML = projectName;
        proj_name.classList.add('proj-name');

        proj_cont.appendChild(proj_name);

        let plus = document.createElement('div');
        plus.classList.add('plus');
        plus.innerHTML = '+';

        proj_cont.addEventListener('click', () => {
            proj_cont.classList.toggle('selected');
            proj_cont.classList.toggle('unselected');
        });

        proj_cont.appendChild(plus);
    }
}

let state = 'closed';

const openModal = () => {
    const add = document.querySelector('#add');
    const cancel = document.querySelector('.cancel');
    const modal = document.querySelector('#modal');

    add.addEventListener('click', () => {
        if (state === 'closed') {
            modal.showModal();
            state = 'open';
        } else {
            modal.close();
            state = 'closed';
        }
    });

    cancel.addEventListener('click', () => {
        modal.close();
        state = 'closed';
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && state === 'open') {
            modal.close();
            state = 'closed';
        }
    });

    // Add event listener for modal close event
    modal.addEventListener('close', () => {
        state = 'closed';
    });

    updateProjectList();
};

export default openModal;
export { updateProjectList };
