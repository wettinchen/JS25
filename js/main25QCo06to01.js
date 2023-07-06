// Higher Order Functions

import { posts } from "./posts.js";
const filteredPosts = posts.filter((post) => {
    return post.userId === 5;
});
console.log(filteredPosts);

const mappedPosts = filteredPosts.map((post) => {
    return post.id * 10;
});
console.log(mappedPosts);