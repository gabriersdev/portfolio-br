"use client";

import {
  AvatarGroup,
  Carousel,
  Column,
  Flex,
  Heading,
  SmartLink,
  Text,
} from "@/once-ui/components";

interface ProjectCardProps {
  href: string;
  priority?: boolean;
  images: string[];
  title: string;
  content: string;
  description: string;
  avatars: { src: string }[];
  link: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
                                                          href,
                                                          images = [],
                                                          title,
                                                          content,
                                                          description,
                                                          avatars,
                                                          link,
                                                        }) => {
  return (
    <Column fillWidth gap="m">
      <Carousel
        sizes="(max-width: 960px) 100vw, 960px"
        images={images.map((image) => ({
          src: image,
          alt: title,
        }))}
      />
      <Flex
        mobileDirection="column"
        fillWidth
        paddingX="s"
        paddingTop="12"
        paddingBottom="24"
        gap="l"
      >
        {title && (
          <Flex flex={5}>
            <Heading as="h2" wrap="balance" variant="heading-strong-xl" style={{fontWeight: 600, fontSize: "1.75rem"}} onBackground={"brand-strong"}>
              {title}
            </Heading>
          </Flex>
        )}
        {(avatars?.length > 0 || description?.trim() || content?.trim()) && (
          <Column flex={7} gap="16">
            {avatars?.length > 0 && <AvatarGroup avatars={avatars} size="m" reverse/>}
            {description?.trim() && (
              <Text wrap="balance" variant="body-default-m" onBackground="info-medium">
                {description}
              </Text>
            )}
            <Flex gap="m" wrap>
              {content?.trim() && (
                <SmartLink
                  suffixIcon="arrowRight"
                  style={{margin: "0", width: "fit-content", textDecoration: "none"}}
                  href={href}
                >
                  <Text variant="body-default-m">Read case study</Text>
                </SmartLink>
              )}
              {link && (
                <SmartLink
                  suffixIcon="arrowUpRightFromSquare"
                  style={{margin: "0", width: "fit-content", textDecoration: "none"}}
                  href={link}
                >
                  <Text variant="body-default-m">View project</Text>
                </SmartLink>
              )}
            </Flex>
          </Column>
        )}
      </Flex>
    </Column>
  );
};
