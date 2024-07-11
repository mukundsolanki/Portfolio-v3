import React, { useEffect, useState } from "react";
import axios from "axios";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const getPostData = () => {
    axios
      .get("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@juanfelipeoz.rar")
      .then((res) => {
        setPosts(res.data.items);
        console.log("Res data", res.data)
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
      <div className="grid grid-cols-2 gap-8 mb-5">
        {sortedAndSelectedPosts.map((post) => (
          <div key={post.guid}>
            {/* <h2 className="bg-black text-white rounded-medium text-1xl font-bold w-fit  py-2 mb-1 mx-auto text-center">
              <a href={post.link} target="_blank" rel="noopener noreferrer">{post.title}</a>
            </h2>   */}
            <a href={post.link} target="_blank" className="block m-auto max-w-sm p-6 h-full bg-gray-300 outline outline-offset-4 outline-2 outline-green-100 rounded-lg shadow hover:bg-gray-100 transition duration-300">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
              <p className="font-normal text-[10px] text-gray-700 dark:text-gray-400">Medium:@juanfelipeoz.rar</p>
            </a>
          </div>
        ))}
      </div>
    </div>

  );
};
export default Blog;