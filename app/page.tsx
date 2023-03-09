// "use client";

import React from "react";

type book = {
	id: number;
	title: string;
	description: string;
	price: number;
};

const page = async () => {
	const getHost = () => {
		return process.env.URL
			? "https://" + process.env.URL
			: "http://localhost:3000";
	};

	const getBooks = async () => {
		const res = await fetch(`${getHost()}/api/getBook`);

		if (!res.ok) {
			throw new Error("Failed to fetch data");
		}
		return res.json();
	};

	const books = await getBooks();
	return (
		<div>
			{books.map((book: book) => (
				<div key={book.id}>
					<p>{book.id}</p>
					<p>{book.title}</p>
					<p>{book.description}</p>
					<p>{book.price}</p>
				</div>
			))}
		</div>
	);
};

export default page;
