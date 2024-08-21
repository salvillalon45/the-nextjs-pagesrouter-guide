// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Posts } from '@/types/types';
import type { NextApiRequest, NextApiResponse } from 'next';

interface PostsDBData {
	data: Posts;
}

const postsDBData: PostsDBData = {
	data: [
		{
			userId: 1,
			id: 1,
			title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
			body: 'Creating a visually appealing and informative tutorial can be a rewarding experience. By carefully planning your content, choosing the right tools, and capturing high-quality images or videos, you can effectively guide viewers through a process. Remember to keep your explanations clear and concise, and use a conversational tone to engage your audience.'
		},
		{
			userId: 1,
			id: 2,
			title: 'qui est esse',
			body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
		},
		{
			userId: 1,
			id: 3,
			title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
			body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut'
		}
	]
};

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Posts>
) {
	const { body, method } = req;
	const { data: posts } = postsDBData;

	if (method === 'POST') {
		const { title, body: postBody } = body;
		const id = posts.length + 1;

		const newPost = {
			userId: id,
			id,
			title,
			body: postBody
		};

		postsDBData.data = [...posts, newPost];
		const { data } = postsDBData;

		res.status(200).json(data);
	} else if (method === 'GET') {
		res.status(200).json(posts);
	} else {
		// Handle any other HTTP method
		res.setHeader('Allow', ['GET', 'POST']);
		res.status(405).end(`Method ${method} Not Allowed`);
	}
}
