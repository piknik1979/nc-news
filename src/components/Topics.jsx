import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getTopics } from '../utils/api';
import '../css/topics.css';

const Topics = () => {
	const [topics, setTopics] = useState([]);

	useEffect(() => {
		getTopics().then((topicsFromApi) => {
			setTopics(topicsFromApi);
		});
	}, []);

	return (
		<ul className='topics'>
			{topics.map(({ slug }) => {
				return (
					<li key={slug}>
						<Link to={`/topics/${slug}`}>{slug}</Link>
					</li>
				);
			})}
		</ul>
	);
};


export default Topics;