import { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';
import { getArticles } from '../utils/api';
import { useParams } from 'react-router-dom';
// import '../css/comments.css'

const Articles = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [order, setOrder] = useState('desc');
	const [filter, setFilter] = useState('created_at');
	const { topic } = useParams();
	const filters = ['created at', 'comment count', 'votes']

	useEffect(() => {
		getArticles(topic, filter, order).then((articlesFromApi) => {
			setArticles(articlesFromApi);
			setIsLoading(false);
		});
	}, [topic, filter, order]);

	if (isLoading) {
		return <p>Loading</p>;
	}
	
	return (
		<>
			<form>  
				<select name='filter' value={filter} onChange={(event) => setFilter(event.target.value)}>
				
					{filters.map((filter) => {
						return (
							<option key={filter} value={filter}>
								{filter}
							</option>
						);
					})}
				</select>
				<select name='order' value={order} onChange={(event) => setOrder(event.target.value)}>
					<option value='desc'>descending</option>
					<option value='asc'>asending</option>
				</select>
			</form>
			<ul className='articles'>
				{articles.map((article) => {
					return (
						<li className='article-card' key={article.article_id}>
							<ArticleCard article={article}></ArticleCard>
						</li>
					);
				})}
			</ul>
		</>
	);
};


export default Articles;
