class ProjectValidation {
  constructor(article) {
    this.projectName = article.body.projectName;
    this.supplierName = article.body.supplierName;
    this.organization = article.body.organization;
    this.suppliedAmount = article.body.suppliedAmount;
    this.details = article.body.details;
  }

  async validate() {
    if (
      !this.projectName ||
      !this.supplierName ||
      !this.organization ||
      !this.suppliedAmount ||
      !this.details
    ) {
      throw new Error("Some fields are missing!");
    }
  }

  getProject() {
    return this;
  }
}

export default ProjectValidation;
