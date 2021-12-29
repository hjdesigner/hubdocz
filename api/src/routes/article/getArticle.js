import AWS from 'aws-sdk';
import createError from 'http-errors';
import commonMiddleware from '../../lib/commonMiddleware';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getArticle(event, context) {
  const { id } = event.pathParameters;

  let article;
  
  const params = {
    TableName: process.env.ARTICLE_TABLE_NAME,
    Key: {
      id,
    },  
  }

  

  try {
    const result = await dynamodb.get(params).promise();
    article = result.Item;
  } catch(error) {
    throw new createError.InternalServerError(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(article),
  }
}

export const handler = commonMiddleware(getArticle);
