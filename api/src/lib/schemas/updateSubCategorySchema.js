const schema = {
  type: 'object',
  properties: {
    body: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          minLength: 2,
        },
        idCategory: {
          type: 'string',
          minLength: 2,
        },
        status: {
          type: 'boolean',
        },
      },
      required: ['name', 'idCategory', 'status'],
    },
  },
  required: ['body'],
};

export default schema;