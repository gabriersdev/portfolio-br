import {Flex, IconButton, SmartLink, Text} from "@/once-ui/components";
import {person, social} from "@/app/resources/lang/pt-br/content";
import styles from "./Footer.module.scss";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Flex
      as="footer"
      position="relative"
      fillWidth
      padding="8"
      horizontal="center"
      mobileDirection="column"
    >
      <Flex
        className={styles.mobile}
        maxWidth="m"
        paddingY="8"
        paddingX="16"
        gap="16"
        horizontal="space-between"
        vertical="center"
      >
        <Text variant="body-default-m" onBackground="neutral-strong">
          <Text onBackground="neutral-medium" paddingRight="2">©{currentYear}</Text>
          <Text paddingX="2" onBackground={"brand-medium"}>
            <SmartLink style={{marginLeft: "-0.15rem"}} href={social.filter(s => s.name.toLowerCase() === "github" || s.icon.toLowerCase() === "github".toLowerCase())[0]["link"] || ""}>
              {person.name}
            </SmartLink>
          </Text>
          <Text onBackground="neutral-medium" style={{display: "block"}}>
            {" "}
            Feito com
            <SmartLink
              style={{marginLeft: "-0.005rem"}}
              href="https://once-ui.com/templates/magic-portfolio"
            >
              Once UI
            </SmartLink>
          </Text>
        </Text>
        <Flex gap="16">
          {social.map(
            (item, index) =>
              item.link && (
                <IconButton
                  key={index}
                  href={item.link}
                  icon={item.icon}
                  tooltip={item.name}
                  size="s"
                  variant="ghost"
                />
              ),
          )}
        </Flex>
      </Flex>
      <Flex height="80" show="s"></Flex>
    </Flex>
  );
};
