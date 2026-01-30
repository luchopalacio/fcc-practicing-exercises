const projectStatus = {
  PENDING: {  
    description: "Pending Execution"
  },
  SUCCESS: {
    description: "Executed Successfully"
  },
  FAILURE: {
    description: "Execution Failed"
  }
}

class ProjectIdea {
  constructor(title,description){
    this.title = title;
    this.description = description;
    this.status = projectStatus.PENDING;
  }
  updateProjectStatus(newStatus){
    this.status = newStatus;
  }
}

class ProjectIdeaBoard {
  constructor(title) {
    this.title = title;
    this.ideas = [];
  }

  pin(projectIdea) {
    this.ideas.push(projectIdea);
  }

  unpin(projectIdea) {
    const index = this.ideas.indexOf(projectIdea);
    if (index !== -1) {
      this.ideas.splice(index, 1);
    }
  }

  count(){
    return this.ideas.length;
  }

  formatToString(){
    let projectIdeasString = `${this.title} has ${this.count()} idea(s)\n`;
    this.ideas.forEach(project => {
      projectIdeasString += `${project.title} (${project.status.description}) - ${project.description}\n`
    });
    return projectIdeasString;
  }
}