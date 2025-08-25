"use client";

import {ReactNode, useEffect, useRef, useState} from "react";
import {useSearchParams} from "next/navigation";
import {RevealFx} from "@/once-ui/components";

export default function AppropriateParam({If, Else}: {If?: ReactNode, Else?: ReactNode}) {
  const params = useSearchParams();
  const [content, setContent] = useState<any>(<></>);
  const [showContent, setShowContent] = useState<any>(<></>);
  
  useEffect(() => {
    if (params) {
      console.log(params.get("o"))
      if (params.get("o")?.includes("99")) setContent(Else);
      else setContent(If);
    } else setContent(If);
  }, [params]);
  
  useEffect(() => {
    let tmt = setTimeout(() => {}, 0);
    clearTimeout(tmt);
    
    if (content) {
      tmt = setTimeout(() => {
        setShowContent(
          <RevealFx>
            {content}
          </RevealFx>
        )
      }, 250)
    }
    
    return () => {
      clearTimeout(tmt);
    }
  }, [content]);
  
  return (
    <div>
      {showContent}
    </div>
  )
};
