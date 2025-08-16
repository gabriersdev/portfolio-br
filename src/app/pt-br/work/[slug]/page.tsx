import {notFound} from "next/navigation";
import {CustomMDX} from "@/components/mdx";
import {getPosts} from "@/app/utils/utils";
import {AvatarGroup, Button, Column, Flex, Heading, SmartImage, Text} from "@/once-ui/components";
import {baseURL} from "@/app/resources";
import {person} from "@/app/resources/lang/pt-br/content";
import {formatDate} from "@/app/utils/formatDate";
import ScrollToHash from "@/components/ScrollToHash";
import React from "react";
import AnimatedComponents from "@/components/animated-components/animated-componets";

interface WorkParams {
  params: {
    slug: string;
  };
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = getPosts(["src", "app", "work", "projects"]);
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({params: {slug}}: WorkParams) {
  let post = getPosts(["src", "app", "work", "projects"]).find((post) => post.slug === slug);
  
  if (!post) {
    // @ts-ignore
    return;
  }
  
  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    images,
    image,
    team,
  } = post.metadata;
  let ogImage = image ? `https://${baseURL}${image}` : `https://${baseURL}/og?title=${title}`;
  
  // @ts-ignore
  // @ts-ignore
  return {
    title,
    description,
    images,
    team,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://${baseURL}/work/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Project({params}: WorkParams) {
  let post = getPosts(["src", "app", "work", "projects"]).find((post) => post.slug === params.slug);
  
  if (!post) {
    notFound();
  }
  
  const avatars =
    post.metadata.team?.map((person) => ({
      src: person.avatar,
    })) || [];
  
  return (
    <Column as="section" maxWidth="m" horizontal="center" gap="l">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://${baseURL}${post.metadata.image}`
              : `https://${baseURL}/og?title=${post.metadata.title}`,
            url: `https://${baseURL}/work/${post.slug}`,
            author: {
              "@type": "Person",
              name: person.name,
            },
          }),
        }}
      />
      <AnimatedComponents>
        <Flex>
          <Column maxWidth="xs" gap="16">
            <Button href="/work" variant="tertiary" weight="default" size="m" prefixIcon="chevronLeft">
              <span style={{fontSize: "1rem"}}>Projects</span>
            </Button>
            <Heading variant="display-strong-s">{post.metadata.title}</Heading>
          </Column>
        </Flex>
      </AnimatedComponents>
      
      {post.metadata.images.length > 0 && (
        <SmartImage
          priority
          aspectRatio="16 / 9"
          radius="m"
          alt="image"
          src={post.metadata.images[0]}
        />
      )}
      
      <AnimatedComponents>
        <Column style={{margin: "auto"}} as="article" maxWidth="xs">
          <Flex gap="12" marginBottom="24" vertical="center">
            {post.metadata.team && <AvatarGroup reverse avatars={avatars} size="m"/>}
            <Text variant="body-default-m" onBackground="neutral-weak">
              {post.metadata.publishedAt && formatDate(post.metadata.publishedAt)}
            </Text>
          </Flex>
          <CustomMDX source={post.content}/>
          <Flex marginTop={"m"} gap={"s"}>
            {post.metadata.link && (
              <Button href={post.metadata.link} variant={"primary"} style={{borderRadius: 500}} size={"l"}>
                <Flex style={{fontFamily: "'Inter', sans-serif"}}>View project</Flex>
              </Button>
            )}
            
            {post.metadata.repo && (
              <Button href={post.metadata.repo} variant={"secondary"} style={{borderRadius: 500}} size={"l"}>
                <Flex style={{fontFamily: "'Inter', sans-serif"}}>View repository</Flex>
              </Button>
            )}
          </Flex>
        </Column>
        <ScrollToHash/>
      </AnimatedComponents>
    </Column>
  );
}
