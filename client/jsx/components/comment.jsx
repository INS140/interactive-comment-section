import React from "react"

export function Comment({ comment }) {
    return (
        <div className="comment-card">
            <div className="details">
                <img 
                    src={comment.user.image.png}
                    alt={`${comment.user.username}'s profile photo`}
                    className="profile-img"
                />
                <h2>{comment.user.username}</h2>
                <p>{comment.createdAt}</p>
            </div>
            <div className="content-container">
                <p className="content">{comment.content}</p>
            </div>
            <div className="score-container">
                <div className="score-card">
                    <button>
                        <img
                            src="/images/icon-plus.svg"
                            alt="plus"
                            className="plus"
                        />
                    </button>
                    <span className="score">{comment.score}</span>
                    <button>
                        <img
                            src="/images/icon-minus.svg"
                            alt="minus"
                            className="minus"
                        />
                    </button>
                </div>
            </div>
            <div className="options">
                <button>Reply</button>
            </div>
        </div>
    )
}