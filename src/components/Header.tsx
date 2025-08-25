"use client";

import {usePathname} from "next/navigation";

import {Fade, Flex, ToggleButton} from "@/once-ui/components";
import styles from "@/components/Header.module.scss";

import {routes} from "@/app/resources";
import {home, about, blog, work, gallery} from "@/app/resources/lang/pt-br/content";

export const Header = () => {
  const pathname = usePathname() ?? "";
  
  return (
    <>
      <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9}/>
      <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9}/>
      <Flex
        fitHeight
        className={styles.position}
        as="header"
        zIndex={9}
        fillWidth
        padding="12"
        horizontal="center"
      >
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-s">
        </Flex>
        <Flex fillWidth horizontal="center">
          <Flex
            background="surface"
            border="neutral-medium"
            radius="xs"
            shadow="l"
            padding="8"
            horizontal="center"
            style={{borderRadius: "100px", padding: "0.5rem 0.5rem"}}
          >
            <Flex gap="4" vertical="center" textVariant="body-default-s">
              {routes["/"] && (
                <>
                  <ToggleButton
                    className={"s-flex-hide"}
                    prefixIcon="home"
                    label={home.label}
                    href="/"
                    size={"l"}
                    selected={pathname === "/"}
                    style={{borderRadius: "25px"}}/>
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="home"
                    href="/"
                    selected={pathname === "/"}
                    style={{borderRadius: "25px"}}
                  />
                </>
              )}
              {routes["/about"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href="/about"
                    label={about.label}
                    size={"l"}
                    selected={pathname === "/about"}
                    style={{borderRadius: "25px"}}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href="/about"
                    selected={pathname === "/about"}
                    style={{borderRadius: "25px"}}
                  />
                </>
              )}
              {routes["/work"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="grid"
                    href="/work"
                    label={work.label}
                    size={"l"}
                    selected={pathname.startsWith("/work")}
                    style={{borderRadius: "25px"}}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="grid"
                    href="/work"
                    selected={pathname.startsWith("/work")}
                    style={{borderRadius: "25px"}}
                  />
                </>
              )}
              {routes["/blog"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="book"
                    href="/blog"
                    label={blog.label}
                    size={"l"}
                    selected={pathname.startsWith("/blog")}
                    style={{borderRadius: "25px"}}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="book"
                    href="/blog"
                    selected={pathname.startsWith("/blog")}
                    style={{borderRadius: "25px"}}
                  />
                </>
              )}
              {routes["/gallery"] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="gallery"
                    href="/gallery"
                    label={gallery.label}
                    size={"l"}
                    selected={pathname.startsWith("/gallery")}
                    style={{borderRadius: "25px"}}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="gallery"
                    href="/gallery"
                    selected={pathname.startsWith("/gallery")}
                    style={{borderRadius: "25px"}}
                  />
                </>
              )}
            </Flex>
          </Flex>
        </Flex>
        <Flex fillWidth horizontal="end" vertical="center">
        </Flex>
      </Flex>
    </>
  );
};
