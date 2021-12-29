import AWS from 'aws-sdk';
import createError from 'http-errors';
import commonMiddleware from '../../lib/commonMiddleware';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getSubCategory(event, context) {
  let subCategory;

  const params = {
    TableName: process.env.SUB_CATEGORY_TABLE_NAME,
    Key: {
      id: event.pathParameters.id,
    },
  };

  try {
    const result = await dynamodb.get(params).promise();
    subCategory = result.Item;
  } catch(error) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }

  if (!subCategory) {
    throw new createError(`SubCategory with ID "${event.pathParameters.id} not found"`)
  }

  return {
    statusCode: 200,
    body: JSON.stringify(subCategory),
  };
}

export const handler = commonMiddleware(getSubCategory)