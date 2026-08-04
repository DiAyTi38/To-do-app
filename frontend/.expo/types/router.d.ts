/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(auth)/login` | `/(auth)/welcome` | `/(drawer)` | `/(drawer)/` | `/(drawer)/(tabs)` | `/(drawer)/(tabs)/` | `/(drawer)/(tabs)/account` | `/(drawer)/(tabs)/calendar` | `/(drawer)/(tabs)/drawer-button` | `/(drawer)/account` | `/(drawer)/calendar` | `/(drawer)/donate` | `/(drawer)/drawer-button` | `/(drawer)/family-apps` | `/(drawer)/faq` | `/(drawer)/feedback` | `/(drawer)/follow-us` | `/(drawer)/setting` | `/(drawer)/star-task` | `/(drawer)/theme` | `/(drawer)/type` | `/(drawer)/up-pro` | `/(drawer)/widget` | `/(tabs)` | `/(tabs)/` | `/(tabs)/account` | `/(tabs)/calendar` | `/(tabs)/drawer-button` | `/_sitemap` | `/account` | `/calendar` | `/donate` | `/drawer-button` | `/family-apps` | `/faq` | `/feedback` | `/follow-us` | `/home/body.home` | `/home/header.home` | `/login` | `/setting` | `/star-task` | `/theme` | `/type` | `/up-pro` | `/welcome` | `/widget`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
