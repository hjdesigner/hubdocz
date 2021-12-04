import AWS from 'aws-sdk'
import createError from 'http-errors'
import commonMiddleware from '../../lib/commonMiddleware';

const dynamodb = new AWS.DynamoDB.DocumentClient();

async function getAllCategoryAndSubCategory(event, context) {
  let categories = [];

  const paramsCategory = {
    TableName: process.env.CATEGORY_TABLE_NAME,    
  }
  const paramsSubCategory = {
    TableName: process.env.SUB_CATEGORY_TABLE_NAME,    
  }

  try {
    const category = await dynamodb.scan(paramsCategory).promise();
    const subCategory = await dynamodb.scan(paramsSubCategory).promise();

    category.Items.map((item) => {
      let result = subCategory.Items.filter((sub) => sub.idCategory === item.id);
      categories.push({
        id: item.id,
        name: item.name,
        status: item.status,
        subCategory: result
      })
    });
  } catch(error) {
    throw new createError.InternalServerError(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(categories),
  };
}

export const handler = commonMiddleware(getAllCategoryAndSubCategory);