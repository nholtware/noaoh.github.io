import {DynamoDBClient} from '@aws-sdk/client-dynamodb';
import {DynamoDBDocumentClient, ScanCommand} from '@aws-sdk/lib-dynamodb';

const client = new DynamoDBClient({
  region: process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION,
});
const ddb = DynamoDBDocumentClient.from(client);

export async function loader() {
  try {
    const scanResp = await ddb.send(new ScanCommand({
      TableName: 'hackernews-favs',
      FilterExpression: 'begins_with(#pk, :prefix)',
      ExpressionAttributeNames: {
        '#pk': 'pk',
      },
      ExpressionAttributeValues: {
        ':prefix': 'date#',
      },
    }));

    const entries = scanResp.Items || [];
    
    if (entries.length === 0) {
      return Response.json({favorites: []});
    }

    const fallbackEntry = entries.reduce((prev, current) => {
      const prevDate = prev.pk.replace('date#', '');
      const currDate = current.pk.replace('date#', '');
      if ((current.favorites || []).length === 10) {
        if ((prev.favorites || []).length !== 10 || currDate > prevDate) {
          return current;
        }
      }
      return prev;
    }, entries[0]);

    if ((fallbackEntry.favorites || []).length === 10) {
      const fallbackFavorites = (fallbackEntry.favorites || []).map((item: any) => ({
        id: item.id,
        title: item.title,
        url: item.url,
        site: item.site,
        score: item.score,
        by: item.by,
        age: item.age,
        itemUrl: item.itemUrl,
        comments: item.comments,
        timestamp: fallbackEntry.fetchedAt,
      }));
      return Response.json({favorites: fallbackFavorites});
    }
    
    console.warn('No HN favorites entry with 10 items found, returning empty array');
    return Response.json({favorites: []});
  } catch (e) {
    console.error(e);
    return Response.json({error: 'unable to retrieve favorites'}, {status: 500});
  }
}
