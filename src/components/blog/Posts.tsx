import {getPosts} from "@/app/utils/utils";
import {Grid} from "@/once-ui/components";
import Post from "./Post";

interface PostsProps {
  range?: [number] | [number, number];
  columns?: "1" | "2" | "3";
  thumbnail?: boolean;
  reverse?: boolean
}

export function Posts({range, columns = "1", thumbnail = false, reverse = false}: PostsProps) {
  let allBlogs = getPosts(["src", "app", "blog", "posts"]);
  
  const sortedBlogs = allBlogs.sort((a, b) => {
    return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
  });
  
  let displayedBlogs = range
    ? sortedBlogs.slice(range[0] - 1, range.length === 2 ? range[1] : sortedBlogs.length)
    : sortedBlogs;
  
  if (reverse !== false) displayedBlogs = displayedBlogs.toReversed();
  
  return (
    <>
      {displayedBlogs.length > 0 && (
        <Grid columns={columns} mobileColumns="1" fillWidth marginBottom="40" gap="m">
          {displayedBlogs.map((post, index) => (
            // <Post key={post.slug} post={post} thumbnail={thumbnail} />
            <Post key={index} post={post} thumbnail={thumbnail}/>
          ))}
        </Grid>
      )}
    </>
  );
}
