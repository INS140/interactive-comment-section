import React from 'react'
import { Html } from "./html.jsx"
import { Comment } from "./components/comment.jsx"

export function App() {
  const comment = {
    id: 1,
    content: "Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.",
    createdAt: "1 month ago",
    score: 12,
      user: {
      image: { 
        png: "./images/avatars/image-amyrobson.png",
        webp: "./images/avatars/image-amyrobson.webp"
      },
      username: "amyrobson"
    },
    replies: []
  }

  return (
    <Html>
      <main>
        <Comment comment={comment} />
      </main>
    </Html>
  )
}