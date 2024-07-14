import Card from './card';
import Project from './project';
import createMain from './main';

let submit = document.querySelector('.submit');
let cards = [
    new Card(
        'Example Task 1',
        '!',
        '2024-07-15',
        [new Project('coffeechat', 'unselected')],
        'This is an example task'
    ),
    new Card(
        'Example Task 2',
        '!!',
        '2024-07-20',
        [new Project('fix-dom', 'selected')],
        'Another example task'
    ),
];
let totalProjects = new Set(['coffeechat', 'fix-dom']);

submit.addEventListener('click', () => {
    createCard();
});

const createCard = () => {
    const titleInput = document.querySelector('#name');
    const descInput = document.querySelector('#desc');
    const dueInput = document.querySelector('#due');
    const urgencyInputs = document.querySelectorAll('input[name="urgency"]');
    const projectInput = document.querySelectorAll('.selected .proj-name');

    const title = titleInput.value;
    const description = descInput.value;
    const dueDate = dueInput.value;
    const project = [];

    projectInput.forEach((proj) => {
        totalProjects.add(proj.textContent);
        project.push(new Project(proj.textContent, 'selected'));
    });

    let urgency = '';
    for (const input of urgencyInputs) {
        if (input.checked) {
            urgency = input.id;
            break;
        }
    }

    const newCard = new Card(title, urgency, dueDate, project, description);
    cards.splice(0, 0, newCard);

    document.querySelector('#modal').close();

    document.querySelector('#content').remove();

    createMain();
};

export { cards, totalProjects };
