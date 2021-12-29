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
        slug: {
          type: 'string'
        },
        text: {
          type: 'string',
          minLength: 2,
        }
      },
      required: ['name', 'idCategory', 'status', 'slug', 'text'],
    },
  },
  required: ['body'],
};

export default schema;