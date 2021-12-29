import AWS from 'aws-sdk';
import createError from 'http-errors';
import commonMiddleware from '../../lib/commonMiddleware';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getArticles(event, context) {
  const { idCategory } = event.queryStringParameters;
  let articles;

  const params = {
    TableName: process.env.ARTICLE_TABLE_NAME,
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
    articles = result.Items;
  } catch(error) {
    throw new createError.InternalServerError(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(articles),
  }
}

export const handler = commonMiddleware(getArticles);
