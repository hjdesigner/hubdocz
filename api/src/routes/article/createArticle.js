import { v4 as uuid } from 'uuid'
import AWS from 'aws-sdk'
import validator from '@middy/validator'
import createError from 'http-errors';
import commonMiddleware from '../../lib/commonMiddleware';
import createArticleSchema from '../../lib/schemas/createArticleSchema'

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function createArticle(event, context) {
  const { name, status, idCategory, text } = event.body
  const now = new Date()
  
  const article = {
    id: uuid(),
    name,
    status,
    idCategory,
    text,
    createAt: now.toISOString(),
  }

  try {
    await dynamodb.put({
      TableName: process.env.ARTICLE_TABLE_NAME,
      Item: article,
    }).promise()

  } catch(error) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }

  return {
    statusCode: 201,
    body: JSON.stringify(article)
  }
}

export const handler = commonMiddleware(createArticle).use(
  validator({
    inputSchema: createArticleSchema,
    ajvOptions: {
      useDefaults: true,
      strict: false,
    },
  })
)
