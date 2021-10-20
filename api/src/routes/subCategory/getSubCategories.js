import AWS from 'aws-sdk';
import createError from 'http-errors';
import commonMiddleware from '../../lib/commonMiddleware';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getSubCategories(event, context) {
  const { idCategory } = event.queryStringParameters;
  let subCategories;

  const params = {
    TableName: process.env.SUB_CATEGORY_TABLE_NAME,
    IndexName: 'category',
    KeyConditionExpression: '#idCategory = :idCategory',
    ExpressionAttributeValues: {
      ':idCategory': idCategory
    },
    ExpressionAttributeNames: {
      '#idCategory': 'idCategory',
    },
  }

  try {
    const result = await dynamodb.query(params).promise();
    subCategories = result.Items;
  } catch(error) {
    throw new createError.InternalServerError(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(subCategories),
  }
}

export const handler = commonMiddleware(getSubCategories);
