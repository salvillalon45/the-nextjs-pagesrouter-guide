export interface User {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
}

export type Users = Array<User>;

export interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}
export type Posts = Array<Post>;
export interface Blog {
	userId: number;
	id: number;
	title: string;
	body: string;
}
export type Blogs = Array<Blog>;
