import AWS from 'aws-sdk';
import createError from 'http-errors';
import commonMiddleware from '../../lib/commonMiddleware';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getSlugArticle(event, context) {
  const { slug } = event.queryStringParameters;
  let articles;

  const params = {
    TableName: process.env.ARTICLE_TABLE_NAME,
    IndexName: 'slug',
    KeyConditionExpression: '#slug = :slug',
    ExpressionAttributeValues: {
      ':slug': slug
    },
    ExpressionAttributeNames: {
      '#slug': 'slug',
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

export const handler = commonMiddleware(getSlugArticle);
