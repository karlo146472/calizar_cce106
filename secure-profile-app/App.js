import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

import {
    getCurrentUser,
    loginUser,
} from './src/services/authService';

import {
    deleteToken,
    getToken,
    saveToken,
} from './src/storage/tokenStorage';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [username, setUsername] = useState('emilys');
  const [password, setPassword] = useState('emilyspass');

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [checkingSession, setCheckingSession] = useState(true);
  const [error, setError] = useState('');

  // Restore the previous session when the app starts.
  useEffect(() => {
    restoreSession();
  }, []);

  async function restoreSession() {
    try {
      const token = await getToken();

      // No saved token means the user needs to log in.
      if (!token) {
        return;
      }

      try {
        const user = await getCurrentUser(token);
        setProfile(user);
      } catch (error) {
        // Stored token is invalid or expired.
        await deleteToken();
        setProfile(null);
      }
    } catch (error) {
      setError('Could not restore your session.');
    } finally {
      setCheckingSession(false);
    }
  }

  async function handleLogin() {
    setError('');
    setLoading(true);

    try {
      const data = await loginUser(username, password);

      // Save only the access token securely.
      await saveToken(data.accessToken);

      // Use the token to request the protected profile.
      const user = await getCurrentUser(data.accessToken);

      setProfile(user);
    } catch (error) {
      setError('Login failed. Check your username and password.');
    } finally {
      setLoading(false);
    }

    setUsername('')
    setPassword('')
  }

  async function handleLogout() {
    try {
      await deleteToken();
    } finally {
      setProfile(null);
      setError('');
      setLoading(false);
    }
  }

  // ------------------------------------
  // Initial session loading screen
  // ------------------------------------
  if (checkingSession) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.centerContent}>
          <ActivityIndicator size="large" color="#7C83FD" />
          <Text style={styles.loadingText}>
            Checking your session...
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  // ------------------------------------
  // Logged-out login screen
  // ------------------------------------
  if (!profile) {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.loginCard}>

            <Text style={styles.title}>Secure Profile</Text>

            <Text style={styles.label}>Username</Text>

            <TextInput
              style={styles.input}
              onChangeText={setUsername}
              placeholder="Enter username"
              placeholderTextColor="#A7A7B5"
              autoCapitalize="none"
              editable={!loading}
            />

            <Text style={styles.label}>Password</Text>

            <TextInput
              style={styles.input}
              onChangeText={setPassword}
              placeholder="Enter password"
              placeholderTextColor="#A7A7B5"
              secureTextEntry
              autoCapitalize="none"
              editable={!loading}
            />

            {error ? (
              <View style={styles.errorBox}>
                <Text style={styles.errorText}>
                  {error}
                </Text>
              </View>
            ) : null}

            <TouchableOpacity
              style={[
                styles.loginButton,
                loading && styles.disabledButton,
              ]}
              onPress={handleLogin}
              disabled={loading}
              activeOpacity={0.8}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <Text style={styles.buttonText}>Login</Text>
              )}
            </TouchableOpacity>

          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ------------------------------------
  // Authenticated profile screen
  // ------------------------------------
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.profileCard}>
          <Text style={styles.profileTitle}>
            My Profile
          </Text>

          {profile.image ? (
            <Image
              source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ68M10GEWe3H3zyecnnSXmnpsYL6pdTcJAiRG3uCVbIw&s=10" }}
              style={styles.profileImage}
            />
          ) : (
            <View style={styles.profilePlaceholder}>
              <Text style={styles.placeholderText}>
                {profile.firstName?.charAt(0)}
              </Text>
            </View>
          )}

          <Text style={styles.fullName}>
            {profile.firstName} {profile.lastName}
          </Text>

          <Text style={styles.username}>
            @{profile.username}
          </Text>

          <View style={styles.infoContainer}>
            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>
                {profile.email}
              </Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Username</Text>
              <Text style={styles.infoValue}>
                {profile.username}
              </Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>User ID</Text>
              <Text style={styles.infoValue}>
                {profile.id}
              </Text>
            </View>

            <View style={styles.infoBox}>
              <Text style={styles.infoLabel}>Name</Text>
              <Text style={styles.infoValue}>
                {profile.firstName} {profile.lastName}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.logoutButton}
            onPress={handleLogout}
            activeOpacity={0.8}
          >
            <Text style={styles.logoutText}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// ------------------------------------
// Styles
// ------------------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F5FF',
  },

  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },

  centerContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  loadingText: {
    marginTop: 12,
    color: '#66667A',
    fontSize: 16,
  },

  loginCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 26,
    shadowColor: '#8E8AAE',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4,
  },

  iconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#E7E5FF',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 16,
  },

  iconText: {
    fontSize: 28,
  },

  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#36364A',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 15,
    color: '#77778A',
    textAlign: 'center',
    marginTop: 8,
    marginBottom: 28,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4B4B60',
    marginBottom: 8,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#DEDDF0',
    backgroundColor: '#FBFAFF',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#36364A',
    marginBottom: 18,
  },

  errorBox: {
    backgroundColor: '#FFE8E8',
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },

  errorText: {
    color: '#B84A4A',
    fontSize: 14,
    textAlign: 'center',
  },

  loginButton: {
    height: 52,
    borderRadius: 14,
    backgroundColor: '#7C83FD',
    alignItems: 'center',
    justifyContent: 'center',
  },

  disabledButton: {
    backgroundColor: '#B9BDF7',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },

  testAccount: {
    color: '#9999AA',
    textAlign: 'center',
    marginTop: 18,
    fontSize: 12,
  },

  profileCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 26,
    alignItems: 'center',
    shadowColor: '#8E8AAE',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 4,
  },

  profileTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#36364A',
    marginBottom: 22,
  },

  profileImage: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#E7E5FF',
    marginBottom: 16,
  },

  profilePlaceholder: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#DDF5E5',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },

  placeholderText: {
    fontSize: 42,
    color: '#4D8B62',
    fontWeight: '700',
  },

  fullName: {
    fontSize: 25,
    fontWeight: '700',
    color: '#36364A',
  },

  username: {
    fontSize: 15,
    color: '#85859A',
    marginTop: 5,
    marginBottom: 24,
  },

  infoContainer: {
    width: '100%',
  },

  infoBox: {
    backgroundColor: '#F7F5FF',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },

  infoLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#85859A',
    marginBottom: 4,
  },

  infoValue: {
    fontSize: 15,
    color: '#36364A',
  },

  logoutButton: {
    width: '100%',
    height: 50,
    borderRadius: 14,
    backgroundColor: '#FFD9DC',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 14,
  },

  logoutText: {
    color: '#A4434B',
    fontSize: 16,
    fontWeight: '700',
  },
});
