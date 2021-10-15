import AWS from 'aws-sdk';
import createError from 'http-errors';
import commonMiddleware from '../../lib/commonMiddleware';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function updateCategory(event, context) {
  const { name, status } = event.body;
  const now = new Date();

  const params = {
    TableName: process.env.CATEGORY_TABLE_NAME,
    Key: {
      id: event.pathParameters.id,
    },
    ExpressionAttributeNames: {
      '#category_name': 'name',
      '#category_status': 'status',
    },
    ExpressionAttributeValues: {
      ':name': name,
      ':status': status,
      ':createAt': now.toISOString(),
    },
    UpdateExpression: 'SET #category_name = :name, #category_status = :status, createAt = :createAt',
    ReturnValues: 'ALL_NEW',
  };

  let update;

  try {
    const result = await dynamodb.update(params).promise();
    update = result.Attributes;
  } catch(error) {
    throw new createError.InternalServerError(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(update),
  }
}

export const handler = commonMiddleware(updateCategory)