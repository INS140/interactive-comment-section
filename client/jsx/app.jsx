import React from 'react'
import { Html } from "./html.jsx"
import { Comment } from "./components/comment.jsx"

export function App() {
  const comment = {
    id: 1,
    content: `Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You've nailed the design and the responsiveness at various breakpoints works really well.
      Diam vel quam elementum pulvinar. Leo in vitae turpis massa sed. Tincidunt vitae semper quis lectus. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis.
    In ante metus dictum at tempor commodo ullamcorper a. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Commodo odio aenean sed adipiscing diam donec adipiscing tristique. Sagittis aliquam malesuada bibendum arcu vitae elementum curabitur vitae. Sed nisi lacus sed viverra tellus in hac habitasse platea. Eget duis at tellus at urna condimentum. Nunc sed blandit libero volutpat sed cras ornare arcu. Tristique senectus et netus et malesuada. Et tortor consequat id porta nibh. Scelerisque felis imperdiet proin fermentum. Convallis a cras semper auctor neque.
    Dui accumsan sit amet nulla facilisi morbi. Id aliquet risus feugiat in ante metus. At consectetur lorem donec massa sapien faucibus et molestie. Pellentesque dignissim enim sit amet. In hac habitasse platea dictumst. Porttitor lacus luctus accumsan tortor. Et tortor consequat id porta. Tincidunt id aliquet risus feugiat in ante metus. Consequat interdum varius sit amet mattis vulputate. Malesuada bibendum arcu vitae elementum curabitur. Vel pharetra vel turpis nunc eget lorem dolor sed viverra. At lectus urna duis convallis convallis tellus. Blandit aliquam etiam erat velit scelerisque in dictum.`,
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