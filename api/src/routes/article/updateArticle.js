import AWS from 'aws-sdk';
import createError from 'http-errors';
import commonMiddleware from '../../lib/commonMiddleware';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function updateArticle(event, context) {
  const { name, status, idCategory, text, slug } = event.body;
  const now = new Date();

  const params = {
    TableName: process.env.ARTICLE_TABLE_NAME,
    Key: {
      id: event.pathParameters.id,
    },
    ExpressionAttributeNames: {
      '#article_name': 'name',
      '#article_status': 'status',
      '#article_idCategory': 'idCategory',
      '#article_text': 'text',
      '#article_slug': 'slug',
    },
    ExpressionAttributeValues: {
      ':name': name,
      ':status': status,
      ':idCategory': idCategory,
      ':text': text,
      ':slug': slug,
      ':createAt': now.toISOString(),
    },
    UpdateExpression: 'SET #article_name = :name, #article_status = :status, #article_idCategory = :idCategory, #article_text = :text, #article_slug = :slug, createAt = :createAt',
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

export const handler = commonMiddleware(updateArticle)