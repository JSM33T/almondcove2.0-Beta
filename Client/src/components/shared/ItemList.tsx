import { useState, useEffect } from 'react';
import axios from 'axios';

interface Item {
	id: number;
	name: string;
}

const ItemList = () => {
	const [items, setItems] = useState<Item[]>([]);

	useEffect(() => {
		const fetchItems = async () => {
			try {
				const response = await axios.get<Item[]>('https://almondcove.in/api/blogs/categories/load');
				setItems(response.data);
			} catch (error) {
				console.error('Error fetching items:', error);
			}
		};

		fetchItems();
	}, []);

	return (
		<div>
			<h1>Item List</h1>
			<ul>
				{items.map(item => (
					<li key={item.id}>{item.name}</li>
				))}
			</ul>
		</div>
	);
};

export default ItemList;
