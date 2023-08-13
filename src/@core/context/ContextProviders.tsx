"use client";

import React, { ReactNode, useEffect } from "react";
import ThemeComponent from "@/@core/theme/ThemeComponent";
// import NextNProgress from "nextjs-progressbar";

import NProgress from "nprogress";

// ** Emotion Imports
import { CacheProvider } from "@emotion/react";
import { createEmotionCache } from "@/@core/utils/create-emotion-cache";
import type { EmotionCache } from "@emotion/cache";

// ** Config Imports
import themeConfig from "@/configs/themeConfig";

// ** Component Imports
import UserLayout from "@/layouts/UserLayout";

// ** ContextProviders
import {
  SettingsConsumer,
  SettingsProvider,
} from "@/@core/context/settingsContext";
import { usePathname, useSearchParams } from "next/navigation";

const ContextProviders = ({ children }: { children: ReactNode }) => {
  const emotionCache = createEmotionCache();
  // const pathname = usePathname();
  // const searchParams = useSearchParams();

  // console.log('searchParams', searchParams)
  // console.log('pathname', pathname)

  // useEffect(() => {
  //   // You can now use the current URL
  //   NProgress.start();
  // });

  // useEffect(() => {
  //   NProgress.done();
  //   // You can now use the current URL
  // }, [searchParams]);

  return (
    <>
      <CacheProvider value={emotionCache}>
        <SettingsProvider>
          <SettingsConsumer>
            {({ settings }) => {
              return (
                <ThemeComponent settings={settings}>
                  {/* <NextNProgress /> */}
                  {children}
                </ThemeComponent>
              );
            }}
          </SettingsConsumer>
        </SettingsProvider>
      </CacheProvider>
    </>
  );
};

export default ContextProviders;
