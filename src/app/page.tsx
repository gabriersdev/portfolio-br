import {baseURL, routes, bannerURL} from "@/app/resources";
import {home, about, person, contact} from "@/app/resources/lang/pt-br/content";
import ComponentHome from "@/components/ComponentHome";
import React from "react";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  // const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;
  const ogImage = `https://${baseURL}/${bannerURL}`
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
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

export default function Home() {
  return (
    <><ComponentHome/></>
  );
}
