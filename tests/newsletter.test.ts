import chai from "chai";
import jsonSchema from "chai-json-schema";
import {
  newsletterRequestRawData,
  newsletterWithoutNameRequestRawData,
} from "../testData/requestBody/newsletter";
import {
  createNewsletter,
  createNewsletterError,
  createNewsletterAgreementError,
  createNewsletterTypeError,
  createNewsletterRequiredFieldError,
  createNewsletterEmptyFieldError,
} from "../services/newsletterRequests";
chai.use(jsonSchema);
const dotenv = require("dotenv");
dotenv.config();

const todayDate = new Date();
const futureDate = new Date(todayDate);
futureDate.setDate(todayDate.getDate() + 30);

beforeAll(async () => {
  newsletterRequestRawData.email = `${process.env.EMAIL}`;
});

it("[Newsletter][POST] 400 response when endDate is less than 30 days after startDate", async () => {
  const newsletterRequestData = JSON.stringify(newsletterRequestRawData);
  const addedNewsletterError = await createNewsletterError(
    newsletterRequestData
  );

  expect(addedNewsletterError.statusCode).toBe(400);
  expect(addedNewsletterError.body[0].message).toEqual(
    `"endDate" must be at least 30 days after the "startDate"!`
  );
  expect(addedNewsletterError.body[0].path[0]).toEqual("endDate");
  expect(addedNewsletterError.body[0].context.label).toEqual("endDate");
  expect(addedNewsletterError.body[0].context.value).toEqual(
    newsletterRequestRawData.endDate
  );
  expect(addedNewsletterError.body[0].context.key).toEqual("endDate");
});

it("[Newsletter][POST] 200 response when valid body data is sent", async () => {
  newsletterRequestRawData.endDate = futureDate.toISOString();

  const newsletterRequestData = JSON.stringify(newsletterRequestRawData);
  const addedNewsletterError = await createNewsletter(newsletterRequestData);

  expect(addedNewsletterError.statusCode).toBe(200);
  expect(addedNewsletterError.body.success).toEqual(true);
});

it("[Newsletter][POST] 400 response when agreement accepted equals false", async () => {
  newsletterRequestRawData.agreement = false;
  newsletterRequestRawData.endDate = futureDate.toISOString();
  const newsletterRequestData = JSON.stringify(newsletterRequestRawData);
  const addedNewsletterError = await createNewsletterAgreementError(
    newsletterRequestData
  );

  expect(addedNewsletterError.statusCode).toBe(400);
  expect(addedNewsletterError.body[0].message).toEqual(
    `\"agreement\" must be [true]`
  );
  expect(addedNewsletterError.body[0].path[0]).toEqual("agreement");
  expect(addedNewsletterError.body[0].context.label).toEqual("agreement");
  expect(addedNewsletterError.body[0].context.value).toEqual(
    newsletterRequestRawData.agreement
  );
  expect(addedNewsletterError.body[0].context.key).toEqual("agreement");
});

it("[Newsletter][POST] 400 response when newslettertype is invalid", async () => {
  newsletterRequestRawData.agreement = true;
  newsletterRequestRawData.newsType = "test";

  const newsletterRequestData = JSON.stringify(newsletterRequestRawData);
  const addedNewsletterError = await createNewsletterTypeError(
    newsletterRequestData
  );

  expect(addedNewsletterError.statusCode).toBe(400);
  expect(addedNewsletterError.body[0].message).toEqual(
    `\"newsType\" must be one of [it, industry, medical]`
  );
  expect(addedNewsletterError.body[0].path[0]).toEqual("newsType");
  expect(addedNewsletterError.body[0].context.label).toEqual("newsType");
  expect(addedNewsletterError.body[0].context.value).toEqual(
    newsletterRequestRawData.newsType
  );
  expect(addedNewsletterError.body[0].context.key).toEqual("newsType");
});

it("[Newsletter][POST] 400 response when name is missing in body", async () => {
  newsletterWithoutNameRequestRawData.email = `${process.env.EMAIL}`;
  newsletterWithoutNameRequestRawData.endDate = futureDate.toISOString();
  const newsletterRequestData = JSON.stringify(
    newsletterWithoutNameRequestRawData
  );

  const addedNewsletterError = await createNewsletterRequiredFieldError(
    newsletterRequestData
  );

  expect(addedNewsletterError.statusCode).toBe(400);
  expect(addedNewsletterError.body[0].message).toEqual(`\"name\" is required`);
  expect(addedNewsletterError.body[0].path[0]).toEqual("name");
  expect(addedNewsletterError.body[0].context.label).toEqual("name");
  expect(addedNewsletterError.body[0].context.key).toEqual("name");
});

it("[Newsletter][POST] 400 response when name is empty", async () => {
  newsletterRequestRawData.name = "";
  newsletterRequestRawData.newsType = "it";

  const newsletterRequestData = JSON.stringify(newsletterRequestRawData);

  const addedNewsletterError = await createNewsletterEmptyFieldError(
    newsletterRequestData
  );

  expect(addedNewsletterError.statusCode).toBe(400);
  expect(addedNewsletterError.body[0].message).toEqual(
    `\"name\" is not allowed to be empty`
  );
  expect(addedNewsletterError.body[0].path[0]).toEqual("name");
  expect(addedNewsletterError.body[0].context.label).toEqual("name");
  expect(addedNewsletterError.body[0].context.value).toEqual(
    newsletterRequestRawData.name
  );
  expect(addedNewsletterError.body[0].context.key).toEqual("name");
});

it("[Newsletter][POST] 400 response when email is invalid", async () => {
  newsletterRequestRawData.email = "mat@mat";
  const newsletterRequestData = JSON.stringify(newsletterRequestRawData);
  const addedNewsletterError = await createNewsletterError(
    newsletterRequestData
  );

  expect(addedNewsletterError.statusCode).toBe(400);
  expect(addedNewsletterError.body[0].message).toEqual(
    `"email" must be a valid email`
  );
  expect(addedNewsletterError.body[0].path[0]).toEqual("email");
  expect(addedNewsletterError.body[0].context.label).toEqual("email");
  expect(addedNewsletterError.body[0].context.value).toEqual(
    newsletterRequestRawData.email
  );
  expect(addedNewsletterError.body[0].context.key).toEqual("email");
});