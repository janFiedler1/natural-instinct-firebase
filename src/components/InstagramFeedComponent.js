import React, { useEffect, useState } from 'react';
import axios from 'axios';

function InstagramFeed ( username ) {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://graph.instagram.com/v12.0/${username}/media?access_token=${process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN}`);
        setFeed(response.data.data);
      } catch (error) {
        console.error('Error fetching Instagram feed:', error);
      }
    };

    fetchData();
  }, [username]);

  return (
    <div>
      {feed.map((post) => (
        <div key={post.id}>
          <img src={post.media_url} alt={post.caption} />
          <p>{post.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default InstagramFeed;