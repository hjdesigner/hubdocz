const schema = {
  type: 'object',
  properties: {
    body: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
        idCategory: {
          type: 'string',
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