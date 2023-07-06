// Higher Order Functions

import { posts } from "./posts.js";
const filteredPosts = posts.filter((post) => {
    return post.userId === 5;
});
console.log(filteredPosts);