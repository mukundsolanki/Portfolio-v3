import React, { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const getPostData = () => {
    axios
      .get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@juanfelipeoz.rar")
      .then((res) => {
        setPosts(res.data.items);
        //console.log("Res data", res.data)
      })
      .catch((error) => {
        console.error("Error fetching blog posts:", error);
      });
  };
  useEffect(() => {
    getPostData();
  }, []);

  const selectSpecificPosts = (posts) => {
    const indices = [0, 4, 7, 9]; // Índices para los posts 1, 5, 8 y 9 (basado en índice 0)
    return indices.map(index => posts[index]).filter(post => post !== undefined);
  };

  const sortedAndSelectedPosts = selectSpecificPosts(
    posts.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
  );


  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        {sortedAndSelectedPosts.map((post) => (
          <div key={post.guid}>
            <h2 className="bg-black text-white rounded-medium text-1xl font-bold w-fit  py-2 mb-1">
              <li>
              <a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a>
              </li>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;