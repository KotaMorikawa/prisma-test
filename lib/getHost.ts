export const getHost = () => {
	return process.env.URL
		? "https://" + process.env.URL
		: "http://localhost:3000";
};
