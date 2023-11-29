export const createNewsletterResponseSchema = {
  type: "object",
  properties: {
    success: {
      type: "boolean",
      const: true,
    },
  },
  required: ["success"],
  additionalProperties: false,
};

export const createNewsletterErrorResponseSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      message: { type: "string" },
      path: { type: "array", items: { type: "string" } },
      type: { type: "string" },
      context: {
        type: "object",
        properties: {
          limit: { type: "object" },
          value: { type: "string" },
          label: { type: "string" },
          key: { type: "string" },
        },
      },
    },
    required: ["message", "path", "type", "context"],
    additionalProperties: false,
  },
};

export const createNewsletterErrorAgreementResponseSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      message: { type: "string" },
      path: { type: "array", items: { type: "string" } },
      type: { type: "string" },
      context: {
        type: "object",
        properties: {
          valids: {
            type: "array",
            items: { type: ["boolean", "string"] },
          },
          label: { type: "string" },
          value: { type: ["boolean", "string"] },
          key: { type: "string" },
        },
      },
    },
    required: ["message", "path", "type", "context"],
    additionalProperties: false,
  },
};

export const createNewsletterTypeErrorResponseSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      message: { type: "string" },
      path: { type: "array", items: { type: "string" } },
      type: { type: "string" },
      context: {
        type: "object",
        properties: {
          valids: {
            type: "array",
            items: { type: ["boolean", "string"] },
          },
          label: { type: "string" },
          value: { type: ["boolean", "string"] },
          key: { type: "string" },
        },
        required: ["valids", "label", "value", "key"],
        additionalProperties: false,
      },
    },
    required: ["message", "path", "type", "context"],
    additionalProperties: false,
  },
};

export const createNewslettterRequiredFieldErrorResponseSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      message: { type: "string" },
      path: { type: "array", items: { type: "string" } },
      type: { type: "string" },
      context: {
        type: "object",
        properties: {
          label: { type: "string" },
          key: { type: "string" },
        },
        required: ["label", "key"],
        additionalProperties: false,
      },
    },
    required: ["message", "path", "type", "context"],
    additionalProperties: false,
  },
};

export const createEmptyFieldErrorResponseSchema = {
  type: "array",
  items: {
    type: "object",
    properties: {
      message: { type: "string" },
      path: { type: "array", items: { type: "string" } },
      type: { type: "string" },
      context: {
        type: "object",
        properties: {
          label: { type: "string" },
          value: { type: "string" },
          key: { type: "string" },
        },
        required: ["label", "value", "key"],
        additionalProperties: false,
      },
    },
    required: ["message", "path", "type", "context"],
    additionalProperties: false,
  },
};
