import {Heading, Flex, Button, Avatar, RevealFx, Column, Icon, SmartLink} from "@/once-ui/components";
import {Projects} from "@/components/work/Projects";
import {baseURL, routes} from "@/app/resources";
import {home, about, person, contact} from "@/app/resources/lang/pt-br/content";
import {Posts} from "@/components/blog/Posts";
import SchedulingButton from "@/components/SchedulingButton";
import {Contact} from "@/components/Contact";
import HeroHome from "@/components/hero-home/HeroHome";
import React from "react";
import CallToAction from "@/components/CallToAction";
import AppropriateParam from "@/components/AppropriateParam";

export default function ComponentHome() {
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
            <div style={{display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "flex-start", columnGap: "0.5rem", rowGap: "0.75rem", width: "auto"}}>
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
              
              <AppropriateParam
                If={<SchedulingButton variant={"primary"}/>}
                
                Else={
                  <>
                    <Button
                      id="messagex"
                      data-border="rounded"
                      href={"https://www.99freelas.com.br/user/gabrielmpribeiro"}
                      variant="secondary"
                      size="l"
                    >
                      <Flex gap="4" vertical="center" style={{fontFamily: "var(--font-primary)"}}>
                        <Icon
                          style={{marginLeft: "-0.75rem", marginRight: "0.25rem", border: "none"}}
                          paddingLeft="8" name="email" size={"s"} onBackground="info-weak"
                        />
                        {"Eu na 99 freelas"}
                      </Flex>
                    </Button>
                  </>
                }
              />
              
              <AppropriateParam If={
                <Button
                  id="mailtox"
                  data-border="rounded"
                  href={"mailto:devgabrielribeiro@gmail.com"}
                  variant="primary"
                  size="l"
                >
                  <Flex gap="4" vertical="center">
                    <Icon
                      style={{marginLeft: "-0.75rem", marginRight: "0.25rem", border: "none"}}
                      paddingLeft="8" name="email" size={"s"} onBackground="info-weak"
                    />
                    {"Me envie um e-mail"}
                  </Flex>
                </Button>
              }/>
            </div>
          </RevealFx>
        </Column>
      </Column>
      <RevealFx translateY="16" delay={0.6}>
        <Projects range={[4, 4]}/>
      </RevealFx>
      <RevealFx translateY="16" delay={0.7}>
        <Projects range={[10, 10]}/>
      </RevealFx>
      <RevealFx translateY="16" delay={0.8}>
        <Projects range={[6,6]}/>
      </RevealFx>
      {routes["/blog"] && (
        <Flex fillWidth gap="24" mobileDirection="column">
          <Flex flex={1} paddingLeft="l">
            <Heading as="h2" variant="display-strong-s" wrap="balance" style={{fontWeight: 600}}>
              Últimos posts <SmartLink style={{marginLeft: "-0.15rem"}} href={"/blog"}>do blog</SmartLink>
            </Heading>
          </Flex>
          <Flex flex={3} wrap={true}>
            <Posts range={[1, 2]} columns="1"/>
          </Flex>
        </Flex>
      )}
      <RevealFx translateY="16" delay={0.9}>
        <Projects range={[1, 1]}/>
      </RevealFx>
      <RevealFx translateY="16" delay={1}>
        <Projects range={[2, 2]}/>
      </RevealFx>
      <CallToAction/>
      
      {contact.display && (
        <AppropriateParam
          If={<Contact contact={contact}/>}
        />
      )}
    </Column>
  );
}
