const Footer = () => {
	const link = "https://google.com";
	const target = "_blank";

	return ( 
		<div className="container">
			Copyright © <small>{new Date().getFullYear()}</small> Rahul R{" "}
			<a href={link} target={target}></a>
		</div>
	);
};

export default Footer;
