
/*
import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";

import { ThemeProvider } from "@/core/theme/ThemeProvider";
import { CampaignProvider } from "@/core/campaign/CampaignProvider";

import HomeFeedEngine from "@/core/engine/HomeFeedEngine";

export default function App() {
  return (
    <ThemeProvider>
      <CampaignProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" />

          <HomeFeedEngine />
        </SafeAreaView>
      </CampaignProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});*/

import React from "react";
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";

import { ThemeProvider } from "@/core/theme/ThemeProvider";
import { CampaignProvider } from "@/core/campaign/CampaignProvider";

import HomeFeedEngine from "@/core/engine/HomeFeedEngine";

export default function App() {
  return (
    <ThemeProvider>
      <CampaignProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="dark-content" />

          <HomeFeedEngine />
        </SafeAreaView>
      </CampaignProvider>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
});