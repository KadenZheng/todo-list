import { cards } from './createCard';

let main_content = document.querySelector('#main-content');

let notes = [
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit asperiores voluptate ipsum iusto cupiditate, quasi necessitatibus tempora voluptatibus quidem fugit itaque inventore quibusdam, eum beatae cumque ducimus saepe placeat porro?',
];

const createMain = (filter = null) => {
    let content = document.createElement('div');
    content.id = 'content';
    main_content.appendChild(content);

    let card_grid = document.createElement('div');
    card_grid.classList.add('card-grid');
    content.appendChild(card_grid);

    for (let card of cards) {
        if (!filter || card.project.some((proj) => proj.name === filter)) {
            let card_t = document.createElement('div');
            card_t.classList.add('card');

            let t_title = document.createElement('div');
            t_title.classList.add('t-title');
            t_title.innerHTML = card.title;
            card_t.appendChild(t_title);

            let t_due = document.createElement('div');
            let urgency_html = `<span style='color: red'>${card.urgency}</span>`;
            t_due.classList.add('t-due');
            t_due.innerHTML = urgency_html + ' ' + card.dueDate;
            card_t.appendChild(t_due);

            let t_desc = document.createElement('div');
            t_desc.classList.add('t-desc');
            t_desc.innerHTML = card.description;
            card_t.appendChild(t_desc);

            let t_proj = document.createElement('div');
            t_proj.classList.add('t-proj');
            let total_proj = '';
            card.project.forEach((proj, index, array) => {
                total_proj +=
                    index === array.length - 1 ? proj.name : `${proj.name}, `;
            });
            t_proj.innerHTML = total_proj;
            card_t.appendChild(t_proj);

            card_grid.appendChild(card_t);
        }
    }

    let t_notes = document.createElement('div');
    t_notes.classList.add('t-notes');
    let final_note = '<span>notes: <br /></span>';

    for (let note of notes) {
        final_note += note;
        final_note += '<br />';
    }

    t_notes.innerHTML = final_note;
    content.appendChild(t_notes);
};

export default createMain;
