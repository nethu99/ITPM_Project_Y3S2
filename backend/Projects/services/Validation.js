class ProjectValidation {
  constructor(article) {
    this.projectName = article.body.projectName;
    this.organizationName = article.body.organizationName;
    this.location = article.body.location;
    this.date = article.body.date;
    this.time = article.body.time;
    this.projectCost = article.body.projectCost;
    this.memberCount = article.body.memberCount;
    this.description = article.body.description;
  }

  async validate() {
    if (
      !this.projectName ||
      !this.organizationName ||
      !this.location ||
      !this.date ||
      !this.time ||
      !this.projectCost ||
      !this.memberCount ||
      !this.description
    ) {
      throw new Error("Some fields are missing!");
    }
  }

  getProject() {
    return this;
  }
}

export default ProjectValidation;
