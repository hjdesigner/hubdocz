import AWS from 'aws-sdk';
import createError from 'http-errors';
import validator from '@middy/validator';
import commonMiddleware from '../../lib/commonMiddleware';
import updateSubCategorySchema from '../../lib/schemas/updateSubCategorySchema';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function updateSubCategory(event, context) {
  const { name, idCategory, status } = event.body;
  const now = new Date();

  const params = {
    TableName: process.env.SUB_CATEGORY_TABLE_NAME,
    Key: {
      id: event.pathParameters.id,
    },
    ExpressionAttributeNames: {
      '#subCategory_name': 'name',
      '#subCategory_status': 'status',
      '#subidCategory': 'idCategory',
    },
    ExpressionAttributeValues: {
      ':name': name,
      ':idCategory': idCategory,
      ':status': status,
      ':createAt': now.toISOString(),
    },
    UpdateExpression: 'SET #subCategory_name = :name, #subidCategory = :idCategory, #subCategory_status = :status, createAt = :createAt',
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

export const handler = commonMiddleware(updateSubCategory).use(
  validator({
    inputSchema: updateSubCategorySchema,
    ajvOptions: {
      useDefaults: true,
      strict: false,
    },
  })
);