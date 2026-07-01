import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const USER = {
  name: 'Nelson Sousa',
  email: 'nelson.sousa@example.com',
  avatar: 'https://i.pravatar.cc/300?img=12',
  memberSince: '2024-03-15',
  favoritesCount: 8,
  bio: 'Fã de ficção científica e maratonas de Rick and Morty.',
};

function InfoRow({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: string;
}) {
  return (
    <View style={styles.infoRow}>
      <View style={styles.infoLabelContainer}>
        <Icon name={icon} size={18} color="#9E9E9E" style={styles.infoIcon} />
        <Text style={styles.infoLabel}>{label}</Text>
      </View>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

export default function Profile() {
  const formattedDate = new Date(USER.memberSince).toLocaleDateString(
    'en-US',
    {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    },
  );

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.avatarWrapper}>
        <Image source={{ uri: USER.avatar }} style={styles.avatar} />
      </View>

      <Text style={styles.name}>{USER.name}</Text>
      <Text style={styles.email}>{USER.email}</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>About</Text>
        <Text style={styles.bio}>{USER.bio}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Details</Text>
        <InfoRow icon="calendar-outline" label="Member since" value={formattedDate} />
        <InfoRow
          icon="heart-outline"
          label="Favorites"
          value={String(USER.favoritesCount)}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#F4F4F4',
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
    gap: 16,
  },
  avatarWrapper: {
    borderRadius: 60,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1A1A1A',
    textAlign: 'center',
  },
  email: {
    fontSize: 14,
    color: '#9E9E9E',
    marginTop: -8,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 6,
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#9E9E9E',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 4,
  },
  bio: {
    fontSize: 14,
    color: '#555555',
    lineHeight: 20,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    paddingBottom: 10,
  },
  infoLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoIcon: {
    marginRight: 6,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  infoValue: {
    fontSize: 14,
    color: '#555555',
    maxWidth: '55%',
    textAlign: 'right',
  },
});