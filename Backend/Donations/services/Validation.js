class DonationValidation {
  constructor(article) {
    this.projectName = article.body.projectName;
    this.donorName = article.body.donorName;
    this.donorNIC = article.body.donorNIC;
    this.date = article.body.date;
    this.time = article.body.time;
    this.donationCost = article.body.donationCost;
    this.referenceNumber = article.body.referenceNumber;
    this.description = article.body.description;
  }

  async validate() {
    if (
      !this.projectName ||
      !this.donorName ||
      !this.donorNIC ||
      !this.date ||
      !this.time ||
      !this.donationCost ||
      !this.referenceNumber ||
      !this.description
    ) {
      throw new Error("Some fields are missing!");
    }
  }

  getDonation() {
    return this;
  }
}

export default DonationValidation;
