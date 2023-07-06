// Higher Order Functions

import { posts } from "./posts.js";
const filteredPosts = posts.filter((post) => {
    return post.userId === 10;
});
console.log(filteredPosts);

const mappedPosts = filteredPosts.map((post) => {
    return post.id * 10;
});
console.log(mappedPosts);

const reducedPostsValue = filteredPosts.reduce((sum, post) => {
    return sum + post;
});
console.log(reducedPostsValue);