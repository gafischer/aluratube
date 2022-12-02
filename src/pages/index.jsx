import React, { useState } from "react";
import config from "../../config.json";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Menu from "../components/Menu";
import Timeline from "../components/Timeline";
import Favorites from "../components/Favorites";
import Layout from "../components/Layout";
import InsertButton from "../components/InsertButton";

function Home() {
	const [searchValue, setSearchValue] = useState("");

	return (
		<Layout>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					flex: 1
				}}
			>
				<InsertButton />
				<Menu searchValue={searchValue} setSearchValue={setSearchValue} />
				<Banner url={config.banner} />
				<Header name={config.name} job={config.job} github={config.github} />
				<Timeline searchValue={searchValue} playlists={config.playlists} />
				<Favorites favorites={config.favorites} />
			</div>
		</Layout>
	);
}

export default Home;
