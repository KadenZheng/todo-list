class Project {
    constructor(name, state) {
        this.name = name;
        this.state = state;
    }

    toggleState() {
        this.state = this.state === 'selected' ? 'unselected' : 'selected';
    }
}

export default Project;
