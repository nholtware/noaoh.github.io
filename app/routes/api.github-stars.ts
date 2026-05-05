import {Octokit} from '@octokit/core';
import {camelCase, mapKeys, pick} from 'lodash-es';

export async function loader() {
  try {
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN,
    });

    const resp = await octokit.request('GET /users/{username}/starred?per_page=10', {
      username: 'nholtware',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
      },
    });

    const data = resp.data.map((item: any) => {
      return mapKeys(pick(item, ['node_id', 'html_url', 'description', 'name', 'full_name', 'stargazers_count']), function (_: any, k: string) {
        return camelCase(k);
      });
    });

    return Response.json(data);
  } catch (e) {
    console.error(e);
    return Response.json({error: 'unable to retrieve github stars'}, {status: 500});
  }
}
