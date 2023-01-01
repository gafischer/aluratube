import React, { useEffect, useState } from "react";
import Image from "next/image";
import supabase, { subscribe } from "../../services/supabase";

import AddButton from "../AddButton";
import AddFavorites from "../AddFavorites";

import StyledFavorites from "./styles";
import EditButton from "../EditButton";
import EditFavorites from "../EditFavorites";

function Favorites() {
	const [favorites, setFavorites] = useState([]);
	const [addFavoritesOpen, setAddFavoritesOpen] = useState(false);
	const [editFavoritesOpen, setEditFavoritesOpen] = useState(false);
	const favoritesLimit = 10;

	useEffect(() => {
		const getAllFavorites = async () => {
			const { data } = await supabase.from("favorite").select(`id, github`);

			setFavorites(data);
		};

		getAllFavorites();

		const favoriteSubscription = subscribe("favorite", async () => {
			await getAllFavorites();
		});

		return () => {
			favoriteSubscription.unsubscribe();
		};
	}, []);

	const handleAddFavorite = () => {
		setAddFavoritesOpen(true);
	};

	const handleEditFavorite = () => {
		setEditFavoritesOpen(true);
	};

	return (
		<StyledFavorites>
			<section>
				<div className="section-header">
					<h2>aluratube favoritos</h2>
					<AddButton onClick={handleAddFavorite} />
					<EditButton onClick={handleEditFavorite} />

					<AddFavorites
						formVisible={addFavoritesOpen}
						closeForm={() => setAddFavoritesOpen(false)}
					/>

					<EditFavorites
						formVisible={editFavoritesOpen}
						favorites={favorites}
						closeForm={() => setEditFavoritesOpen(false)}
					/>
				</div>
				<div className="grid-container">
					{favorites.slice(0, favoritesLimit).map((favorite) => (
						<div key={favorite.id}>
							<a
								href={`https://github.com/${favorite.github}`}
								target="_blank"
								rel="noreferrer"
							>
								<Image
									src={`https://github.com/${favorite.github}.png`}
									alt="Profile Picture"
									width="100"
									height="100"
									style={{ borderRadius: "50%" }}
								/>
								<span>{`@${favorite.github}`}</span>
							</a>
						</div>
					))}
				</div>
			</section>
		</StyledFavorites>
	);
}

export default Favorites;
