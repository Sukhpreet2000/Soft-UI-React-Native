import { I18n } from "i18n-js";
import * as Localization from "expo-localization";
import Storage from "@react-native-async-storage/async-storage";
import React, { useCallback, useContext, useEffect, useState } from "react";

import translations from "../constants/translations/";
import { ITranslate } from "../constants/types";

export const TranslationContext = React.createContext({});

export const TranslationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [locale, setLocale] = useState("en");

  const [i18n, setI18n] = useState(() => new I18n(translations));

  // Set the locale once at the beginning of your app.
  // i18n.locale = locale;
  // Set the key-value pairs for the different languages you want to support.
  // i18n.translations = translations;
  // When a value is missing from a language it'll fallback to another language with the key present.
  // i18n.fallbacks = true;

  const t = useCallback(
    (scope: I18n.Scope, options?: I18n.TranslateOptions) => {
      return i18n.t(scope, { ...options, locale });
    },
    [i18n, locale]
  );

  // get locale from storage
  const getLocale = useCallback(async () => {
    try {
      const localeJSON = await Storage.getItem("locale");
      setLocale(localeJSON !== null ? localeJSON : Localization.locale);
    } catch (error) {
      console.error("Error retrieving locale from storage:", error);
    }
  }, [setLocale]);

  useEffect(() => {
    const initializeI18n = async () => {
      await getLocale();
      setI18n(new I18n({ ...translations, locale }));
    };

    initializeI18n();
  }, [getLocale, locale]);

  useEffect(() => {
    const saveLocale = async () => {
      try {
        await Storage.setItem("locale", locale);
      } catch (error) {
        console.error("Error saving locale to storage:", error);
      }
    };

    saveLocale();
  }, [locale]);
  const contextValue = {
    t,
    locale,
    setLocale,
    translate: t,
  };

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  );
};

/*
 * useTranslation hook based on i18n-js
 * Source: https://github.com/fnando/i18n-js
 */
export const useTranslation = (): ITranslate => {
  const context = React.useContext(TranslationContext);

  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context as ITranslate;
};
