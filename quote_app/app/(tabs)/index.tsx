import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const API_URL = "https://dummyjson.com/quotes/random";

export default function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchQuote = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch quote");
      }

      const data = await response.json();

      setQuote(data.quote);
      setAuthor(data.author);
    } catch (err) {
      console.error(err);

      setError(
        "Unable to load quote.\nPlease check your internet connection."
      );

      setQuote("");
      setAuthor("");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      
      
      <View style={styles.card}>
        <View style={styles.iconContainer}>
          <Text style={styles.quoteIcon}>“</Text>
        </View>

        <Text style={styles.label}>DAILY INSPIRATION</Text>

        <View style={styles.divider} />

        {loading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#38BDF8" />
            <Text style={styles.loadingText}>Finding inspiration...</Text>
          </View>
        ) : error ? (
          <Text style={styles.error}>{error}</Text>
        ) : (
          <>
            <Text style={styles.quote}>"{quote}"</Text>

            <Text style={styles.author}>— {author}</Text>
          </>
        )}

        <TouchableOpacity
          style={[styles.button, loading && styles.buttonDisabled]}
          onPress={fetchQuote}
          disabled={loading}
          activeOpacity={0.8}
        >
          <Text style={styles.buttonIcon}>↻</Text>
          <Text style={styles.buttonText}>NEW QUOTE</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eaedf1",
    padding: 20,
    overflow: "hidden",
  },

  card: {
    width: "100%",
    maxWidth: 430,
    backgroundColor: "#0D1D2D",
    borderRadius: 28,
    paddingHorizontal: 28,
    paddingVertical: 34,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#19344B",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 16,
    },
    shadowOpacity: 0.35,
    shadowRadius: 24,

    elevation: 12,
  },

  iconContainer: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "#123B55",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 18,
    borderWidth: 1,
    borderColor: "#1E5877",
  },

  quoteIcon: {
    color: "#38BDF8",
    fontSize: 42,
    fontWeight: "700",
    lineHeight: 50,
    marginTop: 8,
  },

  label: {
    color: "#38BDF8",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 2.5,
    marginBottom: 18,
  },

  divider: {
    width: 42,
    height: 3,
    borderRadius: 2,
    backgroundColor: "#38BDF8",
    marginBottom: 28,
  },

  quote: {
    color: "#F8FAFC",
    fontSize: 23,
    fontWeight: "500",
    lineHeight: 34,
    textAlign: "center",
    marginBottom: 20,
  },

  author: {
    color: "#8FA9BD",
    fontSize: 15,
    fontStyle: "italic",
    marginBottom: 32,
  },

  loadingContainer: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 145,
  },

  loadingText: {
    color: "#8FA9BD",
    fontSize: 14,
    marginTop: 14,
    marginBottom: 25,
  },

  error: {
    color: "#FFB4B4",
    backgroundColor: "#3A2028",
    borderWidth: 1,
    borderColor: "#63313C",
    paddingHorizontal: 18,
    paddingVertical: 16,
    borderRadius: 14,
    textAlign: "center",
    marginBottom: 28,
    lineHeight: 22,
    overflow: "hidden",
  },

  button: {
    width: "100%",
    backgroundColor: "#38BDF8",
    minHeight: 52,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,

    shadowColor: "#38BDF8",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,

    elevation: 5,
  },

  buttonDisabled: {
    opacity: 0.45,
  },

  buttonIcon: {
    color: "#061421",
    fontSize: 20,
    fontWeight: "700",
  },

  buttonText: {
    color: "#061421",
    fontSize: 13,
    fontWeight: "900",
    letterSpacing: 1,
  },

  footer: {
    color: "#526B7D",
    fontSize: 12,
    marginTop: 22,
    letterSpacing: 0.5,
  },
});
