import request from "supertest";
import chai from "chai";
import jsonSchema from "chai-json-schema";
import {
  createNewsletterResponseSchema,
  createNewsletterErrorResponseSchema,
  createNewsletterErrorAgreementResponseSchema,
  createNewsletterTypeErrorResponseSchema,
  createNewslettterRequiredFieldErrorResponseSchema,
  createEmptyFieldErrorResponseSchema,
} from "../testData/jsonSchema/createNewsletterSchema";
chai.use(jsonSchema);
const dotenv = require("dotenv");
dotenv.config();
const app = `${process.env.BASE_URL}`;

export const createNewsletter = async (body: string) => {
  const createNewsletter = await request(app)
    .post("/prod")
    .set({
      "User-Agent": "AutomationTests",
      "Content-Type": "application/json",
    })
    .send(body);
  chai
    .expect(createNewsletter.body)
    .to.be.jsonSchema(createNewsletterResponseSchema);

  return createNewsletter;
};

export const createNewsletterError = async (body: string) => {
  const createNewsletter = await request(app)
    .post("/prod")
    .set({
      "User-Agent": "AutomationTests",
      "Content-Type": "application/json",
    })
    .send(body);
  chai
    .expect(createNewsletter.body)
    .to.be.jsonSchema(createNewsletterErrorResponseSchema);

  return createNewsletter;
};

export const createNewsletterAgreementError = async (body: string) => {
  const createNewsletter = await request(app)
    .post("/prod")
    .set({
      "User-Agent": "AutomationTests",
      "Content-Type": "application/json",
    })
    .send(body);
  chai
    .expect(createNewsletter.body)
    .to.be.jsonSchema(createNewsletterErrorAgreementResponseSchema);

  return createNewsletter;
};

export const createNewsletterTypeError = async (body: string) => {
  const createNewsletter = await request(app)
    .post("/prod")
    .set({
      "User-Agent": "AutomationTests",
      "Content-Type": "application/json",
    })
    .send(body);
  chai
    .expect(createNewsletter.body)
    .to.be.jsonSchema(createNewsletterTypeErrorResponseSchema);

  return createNewsletter;
};

export const createNewsletterRequiredFieldError = async (body: string) => {
  const createNewsletter = await request(app)
    .post("/prod")
    .set({
      "User-Agent": "AutomationTests",
      "Content-Type": "application/json",
    })
    .send(body);
  chai
    .expect(createNewsletter.body)
    .to.be.jsonSchema(createNewslettterRequiredFieldErrorResponseSchema);

  return createNewsletter;
};

export const createNewsletterEmptyFieldError = async (body: string) => {
  const createNewsletter = await request(app)
    .post("/prod")
    .set({
      "User-Agent": "AutomationTests",
      "Content-Type": "application/json",
    })
    .send(body);
  chai
    .expect(createNewsletter.body)
    .to.be.jsonSchema(createEmptyFieldErrorResponseSchema);

  return createNewsletter;
};
