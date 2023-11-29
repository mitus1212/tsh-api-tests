import { faker } from "@faker-js/faker";

const todayDate = new Date().toISOString();

class CreateNewsletterRequestData {
  email = "";
  name = faker.name.fullName();
  newsType = "medical";
  startDate = `${todayDate}`;
  endDate = `${todayDate}`;
  agreement = true;
}

export const newsletterRequestRawData = new CreateNewsletterRequestData();

class CreateNewsletterWithoutNameRequestData {
  email = "";
  newsType = "medical";
  startDate = `${todayDate}`;
  endDate = `${todayDate}`;
  agreement = true;
}

export const newsletterWithoutNameRequestRawData =
  new CreateNewsletterWithoutNameRequestData();
