class Card {
    constructor(title, urgency, dueDate, project, description) {
        this.title = title;
        this.project = project;
        this.urgency = urgency;
        this.dueDate = dueDate;
        this.description = description;
    }

    get due() {
        return this.formatDueDate();
    }

    formatDueDate() {
        let urgency_html = `<span style='color: red'>${this.urgency}</span>`;
        let t_due = urgency_html + ' ' + this.dueDate;
        return t_due;
    }

    // For debugging
    static print(card) {
        console.log('title', card.title);
        console.log('dueDate', card.due);
        console.log('project', card.project);
        console.log('description', card.description);
    }
}

export default Card;
