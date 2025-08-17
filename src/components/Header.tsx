"use client";

import {useCallback, useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import {Fade, Flex, Text, ToggleButton} from "@/once-ui/components";
import styles from "@/components/Header.module.scss";
import {routes} from "@/app/resources";
import {langs} from "@/app/resources/config";
import {getDictionary} from "@/app/resources/lang/dictionary";

export const Header = () => {
  const pathname = usePathname() ?? "";
  // Se pathname comecar com um termo que esteja em langs e seu conteúdo não for apenas /, assume que o base path é o lang correspondente
  let basePath = pathname !== "/" && langs.includes(pathname) ? pathname : pathname.split("/").length > 1 ? `/${pathname.split("/")[1]}` : "";
  basePath = pathname !== "/" ? basePath : "";
  
  const [home, setHome] = useState<any | null>(null);
  const [about, setAbout] = useState<any | null>(null);
  const [blog, setBlog] = useState<any | null>(null);
  const [work, setWork] = useState<any | null>(null);
  const [gallery, setGallery] = useState<any | null>(null);
  
  const updateData = useCallback(() => {
    getDictionary(pathname).then(data => {
      if (data.home && data.about, data.blog, data.work, data.gallery) {
        setHome(data.home);
        setAbout(data.about);
        setBlog(data.blog);
        setWork(data.work);
        setGallery(data.gallery);
      }
    });
  }, [pathname]);
  
  useEffect(() => {
    updateData();
  }, []);
  
  useEffect(() => {
    updateData();
  }, [pathname]);
  
  if (!(home || about || blog || work || gallery)) return null;
  
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
        <Flex paddingLeft="12" fillWidth vertical="center" textVariant="body-default-m">
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
            <Flex gap="4" vertical="center" textVariant="body-default-m">
              {routes[`${basePath ? basePath : "/"}`] && (
                <>
                  <ToggleButton
                    className={"s-flex-hide"}
                    prefixIcon="home"
                    label={home.label}
                    href={`${basePath ? basePath : "/"}`}
                    size={"l"}
                    selected={pathname === `/${basePath}`}
                    style={{borderRadius: "25px"}}/>
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="home"
                    href={`${basePath ? basePath : "/"}`}
                    selected={pathname === `/${basePath}`}
                    style={{borderRadius: "25px"}}
                  />
                </>
              )}
              {routes[`${basePath}/about`] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="person"
                    href={`${basePath}/about`}
                    label={about.label}
                    size={"l"}
                    selected={pathname === `${basePath}/about`}
                    style={{borderRadius: "25px"}}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="person"
                    href={`${basePath}/about`}
                    selected={pathname === `${basePath}/about`}
                    style={{borderRadius: "25px"}}
                  />
                </>
              )}
              {routes[`${basePath}/work`] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="grid"
                    href={`${basePath}/work`}
                    label={work.label}
                    size={"l"}
                    selected={pathname.includes(`${basePath}/work`)}
                    style={{borderRadius: "25px"}}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="grid"
                    href={`${basePath}/work`}
                    selected={pathname.includes(`${basePath}/work`)}
                    style={{borderRadius: "25px"}}
                  />
                </>
              )}
              {routes[`${basePath}/blog`] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="book"
                    href={`${basePath}/blog`}
                    label={blog.label}
                    size={"l"}
                    selected={pathname.includes(`${basePath}/blog`)}
                    style={{borderRadius: "25px"}}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="book"
                    href={`${basePath}/blog`}
                    selected={pathname.includes(`${basePath}/blog`)}
                    style={{borderRadius: "25px"}}
                  />
                </>
              )}
              {routes[`${basePath}/gallery`] && (
                <>
                  <ToggleButton
                    className="s-flex-hide"
                    prefixIcon="gallery"
                    href={`${basePath}/gallery`}
                    label={gallery.label}
                    size={"l"}
                    selected={pathname.includes(`${basePath}/gallery`)}
                    style={{borderRadius: "25px"}}
                  />
                  <ToggleButton
                    className="s-flex-show"
                    prefixIcon="gallery"
                    href={`${basePath}/gallery`}
                    selected={pathname.includes(`${basePath}/gallery`)}
                    style={{borderRadius: "25px"}}
                  />
                </>
              )}
              {langs && langs.length > 1 && (
                <>
                  <Flex
                    padding={"xs"}
                    paddingRight={"2"}
                    style={{marginRight: "0.75rem", border: 0, outline: "none"}}
                  >
                    <Flex vertical={"center"} gap={"xs"} paddingRight={"1"} style={{lineHeight: 0}}>
                      <Text style={{fontWeight: "light", fontSize: "13px"}} onBackground={"info-medium"} className={"s-flex-hide"}>Idiomas</Text>
                      <Flex vertical={"center"} gap={"xs"}>
                        {
                          langs.map((lang, index) => (
                            <Link key={index} href={"/" + lang.replace("/", "")}><Image src={"/img/languages/" + (lang === "/" ? "default" : lang) + ".svg"} alt={""} width={20} height={16} style={{objectFit: "cover", borderRadius: "1.5px"}}/></Link>
                          ))
                        }
                      </Flex>
                    </Flex>
                  </Flex>
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
