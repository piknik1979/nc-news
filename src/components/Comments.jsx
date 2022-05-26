import { useState, useEffect } from 'react';
import { UserContext } from '../App';
import { formatDate } from '../utils/utils';
import { addCommentToArticle, getCommentsById, deleteComment } from '../utils/api';
import '../css/comments.css';

const Comments = ({ article_id }) => {
	const user = UserContext._currentValue;
	const [comments, setComments] = useState([]);
	const [newComment, setNewComment] = useState({
		author: user,
		body: '',
	});

	const handleChange = (event) => {
		setNewComment((currComment) => {
			const updatedComment = { ...currComment };
			updatedComment.body = event.target.value;
			return updatedComment;
		});
	};
	const handleDelete = (comment_id) => {
		setComments((currComments) => {
			const commentsCopy = [...currComments];
			const filteredComments = commentsCopy.filter((comment) => {
				return comment.comment_id !== comment_id;
			});
			return filteredComments;
		});
		deleteComment(comment_id).catch((err) => err.response.data.msg);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (newComment.body.length <= 0) return;
		const date = new Date(Date.now()).toISOString();

		setComments((currComments) => {
			const commentToAdd = { ...newComment };
			commentToAdd.created_at = date;
			commentToAdd.comment_id = 0;
			commentToAdd.votes = 0;
			return [commentToAdd, ...currComments];
		});

		addCommentToArticle(article_id, newComment).catch((err) => {
			console.log(err.response.data.msg);
		});

		setNewComment({ author: user, body: '' });
	};

	useEffect(() => {
		getCommentsById(article_id).then((commentsFromApi) => {
			setComments(commentsFromApi);
			console.log(comments[0]);
		});
	// eslint-disable-next-line
	}, [article_id]);

	return (
		<section className='comments'>
			<h2 className='section-tit'>
				Comments<span className='count-num'>{comments.length}</span>
			</h2>
			<form onSubmit={handleSubmit}>
				<textarea placeholder='Add a comment' value={newComment.body} required onChange={(event) => handleChange(event)}></textarea>
				<button type='submit'>Add</button>
			</form>
			<ul>
				{comments.map((comment) => {
					return (
						<li className='comment' key={comment.comment_id}>
							<span className='comment-author'>{comment.author}</span>
							<span className='comment-date'>{formatDate(comment.created_at)}</span>
							<p className='comment-body'>{comment.body}</p>
							<p className='comment-votes'>{comment.votes}</p>
							{user === comment.author && <button onClick={(event) => handleDelete(comment.comment_id)}>delete</button>}
						</li>
					);
				})}
			</ul>
		</section>
	);
};

export default Comments;