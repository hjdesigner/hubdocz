import { v4 as uuid } from 'uuid';
import AWS from 'aws-sdk';
import createError from 'http-errors';
import commonMiddleware from '../../lib/commonMiddleware';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function createCategory(event, context) {
  const { name, status } = event.body;
  const now = new Date();

  const category = {
    id: uuid(),
    name,
    status,
    createAt: now.toISOString(),
  };

  try {
    await dynamodb.put({
      TableName: process.env.CATEGORY_TABLE_NAME,
      Item: category,
    }).promise();
  } catch(error) {
    throw new createError.InternalServerError(error);
  }

  return {
    statusCode: 201,
    body: JSON.stringify(category),
  }
}

export const handler = commonMiddleware(createCategory)