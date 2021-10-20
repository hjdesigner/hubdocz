import { v4 as uuid } from 'uuid';
import AWS from 'aws-sdk';
import createError from 'http-errors';
import validator from '@middy/validator';
import commonMiddleware from '../../lib/commonMiddleware';
import createSubCategorySchema from '../../lib/schemas/createSubCategorySchema'

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function createSubCategory(event, context) {
  const { name, idCategory, status } = event.body;
  const now = new Date();

  const subCategory = {
    id: uuid(),
    name,
    idCategory,
    status,
    createAt: now.toISOString(),
  };

  try {
    await dynamodb.put({
      TableName: process.env.SUB_CATEGORY_TABLE_NAME,
      Item: subCategory,
    }).promise();
  } catch(error) {
    throw new createError.InternalServerError(error);
  }

  return {
    statusCode: 201,
    body: JSON.stringify(subCategory),
  }
}

export const handler = commonMiddleware(createSubCategory).use(
  validator({
    inputSchema: createSubCategorySchema,
    ajvOptions: {
      useDefaults: true,
      strict: false,
    },
  })
);