import VueI18n from 'vue-i18n'
import { MetaInfo } from 'vue-meta'
import { Context as NuxtContext } from '@nuxt/types'

/**
 * The nuxt-i18n types namespace
 */
declare namespace NuxtVueI18n {
  type Locale = VueI18n.Locale
  type Strategies = 'no_prefix' | 'prefix_except_default' | 'prefix' | 'prefix_and_default'
  type Directions = 'ltr' | 'rtl' | 'auto'

  namespace Options {
    // e.g.:
    // [
    //   { code: 'en', iso: 'en-US', file: 'en.js' },
    //   { code: 'fr', iso: 'fr-FR', file: 'fr.js' },
    //   { code: 'es', iso: 'es-ES', file: 'es.js' }
    // ]
    interface LocaleObject {
      code: Locale
      // can be undefined: https://goo.gl/cCGKUV
      iso?: string
      dir?: Directions
      // can be undefined: https://goo.gl/ryc5pF
      file?: string
      isCatchallLocale?: boolean
      // Allow custom properties, e.g. "name": https://goo.gl/wrcb2G
      [key: string]: any
    }

    interface DetectBrowserLanguageInterface {
      useCookie?: boolean
      crossOriginCookie?: boolean
      cookieDomain?: string | null
      cookieKey?: string
      alwaysRedirect?: boolean
      fallbackLocale?: Locale | null
      onlyOnNoPrefix?: boolean
      onlyOnRoot?: boolean
    }

    interface RootRedirectInterface {
      path: string
      statusCode: number
    }

    interface VuexInterface {
      moduleName?: string
      syncLocale?: boolean
      syncMessages?: boolean
      syncRouteParams?: boolean
    }

    // options that are also exposed on VueI18n instance: https://goo.gl/UwNfZo
    interface NuxtI18nInterface {
      beforeLanguageSwitch?: (oldLocale: string, newLocale: string) => void
      defaultLocale?: Locale
      defaultDirection?: Directions
      defaultLocaleRouteNameSuffix?: string
      locales?: Array<Locale | LocaleObject>
      differentDomains?: boolean
      forwardedHost?: boolean
      onLanguageSwitched?: (oldLocale: string, newLocale: string) => void
    }

    // see options reference: https://github.com/nuxt-community/i18n-module/blob/master/docs/options-reference.md
    interface AllOptionsInterface extends NuxtI18nInterface {
      baseUrl?: string | ((context: NuxtContext) => string)
      detectBrowserLanguage?: DetectBrowserLanguageInterface | false
      langDir?: string | null
      lazy?: boolean
      // see https://goo.gl/NbzX3f
      pages?: {
        [key: string]: boolean | {
          [key: string]: boolean | string
        }
      }
      parsePages?: boolean
      rootRedirect?: string | null | RootRedirectInterface
      routesNameSeparator?: string
      seo?: boolean
      skipSettingLocaleOnNavigate?: boolean,
      strategy?: Strategies
      vueI18n?: VueI18n.I18nOptions | string
      vueI18nLoader?: boolean
      vuex?: VuexInterface | false
    }
  }
}

export interface NuxtI18nSeo {
  htmlAttrs?: MetaInfo['htmlAttrs']
  link?: MetaInfo['link']
  meta?: MetaInfo['meta']
}

export interface NuxtI18nHeadOptions {
  /**
   * Adds a `dir` attribute to the HTML element.
   * Default: `true`
   */
  addDirAttribute: boolean
  /**
   * Adds various SEO attributes.
   * Default: `false`
   */
  addSeoAttributes: boolean
}

export interface NuxtI18nComponentOptions {
  paths?: {
    [key: string]: string | false
  }
  locales?: Array<string>
  seo?: false
}