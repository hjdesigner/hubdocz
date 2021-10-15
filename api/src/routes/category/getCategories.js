import AWS from 'aws-sdk';
import createError from 'http-errors';
import commonMiddleware from '../../lib/commonMiddleware';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getCategories(event, context) {
  let categories;

  const params = {
    TableName: process.env.CATEGORY_TABLE_NAME,    
  }

  try {
    const result = await dynamodb.scan(params).promise();
    categories = result.Items;
  }  catch(error) {
    throw new createError.InternalServerError(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(categories),
  };
}

export const handler = commonMiddleware(getCategories)