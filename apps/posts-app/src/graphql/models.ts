export type PostModel = {
	id: string;
	body: string;
	userId: string;
	title: string;
};

export type AddressModel = {
	street: string;
	suite: string;
	city: string;
	zipcode: string;
};

export type CompanyModel = {
	name: string;
	catchPhrase: string;
	bs: string;
};

export type UserModel = {
	id: string;
	name: string;
	username: string;
	email: string;
	address: AddressModel;
	phone: string;
	website: string;
	company: CompanyModel;
};

export type CommentModel = {
	id: string;
	postId: string;
	name: string;
	email: string;
	body: string;
};
