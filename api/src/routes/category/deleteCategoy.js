import AWS from 'aws-sdk';
import createError from 'http-errors';
import commonMiddleware from '../../lib/commonMiddleware';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function deleteCategory(event, context) {
  const params = {
    TableName: process.env.CATEGORY_TABLE_NAME,
    Key: {
      id: event.pathParameters.id,
    },
  };

  try {
    await dynamodb.delete(params).promise();
  } catch(error) {
    throw new createError.InternalServerError(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      id: event.pathParameters.id
    }),
  }
}

export const handler = commonMiddleware(deleteCategory)