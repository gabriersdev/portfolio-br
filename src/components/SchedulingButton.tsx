import {about} from "@/app/resources";
import {Flex, Icon} from "@/once-ui/components";
import styles from "@/components/about/about.module.scss";

export default function SchedulingButton({variant}: {variant?: string}) {
  if (about.calendar.display) {
    return (
      <a style={{textDecoration: "none"}} href={"#"}>
        <Flex
          fitWidth
          border="brand-alpha-medium"
          className={styles.blockAlign}
          style={{
            backdropFilter: "blur(var(--static-space-1))",
          }}
          background="brand-alpha-weak"
          radius="full"
          padding={variant === "home" ? "8" : "4"}
          gap="8"
          marginBottom={variant === "home" ? "0" : "m"}
          vertical="center"
        >
          <Icon paddingLeft="8" name="calendar" onBackground="brand-weak"/>
          <Flex paddingRight="8">Schedule a call</Flex>
        </Flex>
      </a>
    )
  } else return null
}
