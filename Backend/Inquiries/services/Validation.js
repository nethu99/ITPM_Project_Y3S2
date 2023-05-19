class InquiryValidation {
  constructor(article) {
    this.projectName = article.body.projectName;
    this.name = article.body.name;
    this.contactNo = article.body.contactNo;
    this.subject = article.body.subject;
    this.inquiry = article.body.inquiry;
  }

  async validate() {
    if (
      !this.projectName ||
      !this.name ||
      !this.contactNo ||
      !this.subject ||
      !this.inquiry
    ) {
      throw new Error("Some fields are missing!");
    }
  }

  getInquiry() {
    return this;
  }
}

export default InquiryValidation;
