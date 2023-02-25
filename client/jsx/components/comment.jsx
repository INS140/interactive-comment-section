import React from "react"

export function Comment({ comment }) {
    return (
        <div className="comment-card">
            <div className="score-container">
                <button>+</button>
                <span className="score">{comment.score}</span>
                <button>-</button>
            </div>
            <div className="details-container">
                <div className="details">
                    <img src={comment.user.image.png} alt={`${comment.user.username}'s profile photo`} />
                    <h2>{comment.user.username}</h2>
                    <p>{comment.createdAt}</p>
                </div>
                <button>Reply</button>
                <div className="content-container">
                    <p className="content">{comment.content}</p>
                </div>
            </div>
        </div>
    )
}