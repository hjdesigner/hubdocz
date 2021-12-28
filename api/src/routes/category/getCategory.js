import AWS from 'aws-sdk';
import createError from 'http-errors';
import commonMiddleware from '../../lib/commonMiddleware';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getCategory(event, context) {
  let category;

  const params = {
    TableName: process.env.CATEGORY_TABLE_NAME,
    Key: {
      id: event.pathParameters.id,
    },
  };

  try {
    const result = await dynamodb.get(params).promise();
    category = result.Item;
  } catch(error) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }

  if (!category) {
    throw new createError(`Category with ID "${event.pathParameters.id} not found"`)
  }

  return {
    statusCode: 200,
    body: JSON.stringify(category),
  };
}

export const handler = commonMiddleware(getCategory)