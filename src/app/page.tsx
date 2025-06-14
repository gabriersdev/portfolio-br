import {Heading, Flex, Text, Button, Avatar, RevealFx, Column, Icon} from "@/once-ui/components";
import {Projects} from "@/components/work/Projects";

import {baseURL, routes, social} from "@/app/resources";
import {home, about, person, contact} from "@/app/resources/content";
import {Posts} from "@/components/blog/Posts";
import SchedulingButton from "@/components/SchedulingButton";
import {Contact} from "@/components/Contact";
import HeroHome from "@/components/hero-home/HeroHome";

export async function generateMetadata() {
  const title = home.title;
  const description = home.description;
  // const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;
  const ogImage = `https://${baseURL}/banner.png`

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
          <HeroHome/>
          <RevealFx translateY={"2"} fillWidth horizontal={"start"}>
            <div style={{display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "flex-end", gap: "0.5rem", flexDirection: "row-reverse"}}>
              <SchedulingButton variant={"primary"}/>

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
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[4, 4]}/>
      </RevealFx>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[1, 1]}/>
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l">
            <Heading as="h2" variant="display-strong-s" wrap="balance" style={{fontWeight: 600}}>
              Latest from the blog
            </Heading>
          </Flex>
          <Flex flex={3} paddingX="20">
            <Posts range={[1, 1]} columns="2"/>
          </Flex>
        </Flex>
      )}
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[3, 3]}/>
      </RevealFx>
      <Flex background={"brand-weak"} fillWidth={true} border={"brand-weak"} radius={"s"} padding={"s"} gap="8" center={true}>
        <Icon name={"grid"} size={"s"} onBackground={"brand-weak"}/>
        {/*@ts-ignore*/}
        <Text onBackground={"brand-weak"}>See outher works in <a href={"/work"}>Work page</a></Text>
      </Flex>
      {contact.display && <Contact contact={contact}/>}
    </Column>
  );
}
