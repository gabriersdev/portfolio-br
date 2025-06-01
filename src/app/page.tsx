import React from "react";

import {Heading, Flex, Text, Button, Avatar, RevealFx, Column, Icon} from "@/once-ui/components";
import {Projects} from "@/components/work/Projects";

import {baseURL, routes} from "@/app/resources";
import {home, about, person, newsletter} from "@/app/resources/content";
import {Mailchimp} from "@/components";
import {Posts} from "@/components/blog/Posts";
import SchedulingButton from "@/components/SchedulingButton";
import AnimatedComponents from "@/components/animated-components/animated-componets";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

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
    <Column maxWidth="m" gap="xl" horizontal="center">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Column fillWidth paddingY="l" gap="m">
        <Column maxWidth="s">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="m">
            <div style={{display: "flex", flexDirection: "column", gap: "1rem"}}>
              <Heading wrap="balance" variant="display-default-l" style={{fontWeight: 500}}>
                {home.headline}
              </Heading>
            </div>
          </RevealFx>
          <RevealFx translateY="8" delay={0.2} fillWidth horizontal="start" paddingBottom="m">
            <Text wrap="balance" onBackground="info-medium" variant="heading-strong-l">
              {home.subline}
            </Text>
          </RevealFx>
          <AnimatedComponents delay={3000}>
            <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-end", gap: "0.5rem", flexDirection: "row-reverse"}}>
              <Button
                id="schedule"
                data-border="rounded"
                href="https://calendly.com/devgabrielribeiro/30min"
                variant="primary"
                size="l"
              >
                <Flex gap="4" vertical="center">
                  <Icon
                    style={{marginLeft: "-0.75rem", marginRight: "0.25rem", border: "none"}}  
                    paddingLeft="8" name="calendar" onBackground="info-weak"
                  />
                  {"Schedule a call"}
                </Flex>
              </Button>
              
              <Button
                id="about"
                data-border="rounded"
                href="/about"
                variant="primary"
                size="l"
              >
                <Flex gap="4" vertical="center">
                  {about.avatar.display && (
                    <Avatar
                      style={{marginLeft: "-0.75rem", marginRight: "0.25rem", border: "none"}}
                      src={person.avatar}
                      size="m"
                    />
                  )}
                  {about.title}
                </Flex>
              </Button>
            </div>
          </AnimatedComponents>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]}/>
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l">
            <Heading as="h2" variant="display-strong-s" wrap="balance">
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 2]} columns="2"/>
          </Flex>
        </Flex>
      )}
      <Projects range={[2]}/>
      {newsletter.display && <Mailchimp newsletter={newsletter}/>}
    </Column>
  );
}
