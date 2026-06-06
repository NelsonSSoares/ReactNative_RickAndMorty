import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../routes/types/RootStackParamList';
import { useEffect, useState } from 'react';
import { characterService } from '../graphql/services/characterService';
import type { CharacterDetails } from '../constants/types/types';
import FavoriteButton from '../components/faviroteButton/FavoriteButton';

type RouteProps = RouteProp<RootStackParamList, 'CharacterDetails'>;

const STATUS_COLORS: Record<string, string> = {
  Alive: '#55CC44',
  Dead: '#D63D2E',
  unknown: '#9E9E9E',
};

function InfoRow({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  );
}

export default function CharacterDetails() {
  const route = useRoute<RouteProps>();
  const { id } = route.params;
  const [character, setCharacter] = useState<CharacterDetails>();

  useEffect(() => {
    async function loadCharacterDetails() {
      try {
        const data = await characterService.getCharacterById(id);
        setCharacter(data?.character);
      } catch (error) {
        console.error(error);
      }
    }

    loadCharacterDetails();
  }, [id]);

  const statusColor = STATUS_COLORS[character?.status ?? ''] ?? '#9E9E9E';

  const formattedDate = character?.created
    ? new Date(character.created).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      })
    : undefined;

  return (
    <ScrollView
      style={styles.screen}
      contentContainerStyle={styles.scrollContent}
    >
      <View style={styles.avatarWrapper}>
        <Image source={{ uri: character?.image }} style={styles.avatar} />
      </View>

      <View style={styles.statusContainer}>
        <Text style={styles.name}>{character?.name}</Text>
        <FavoriteButton id={character?.id ?? ''} />
      </View>

      <View style={[styles.statusBadge, { backgroundColor: statusColor + '22' }]}>
        <View style={[styles.statusDot, { backgroundColor: statusColor }]} />
        <Text style={[styles.statusText, { color: statusColor }]}>
          {character?.status}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Informations</Text>
        <InfoRow label="Specie" value={character?.species} />
        <InfoRow label="Gender" value={character?.gender} />
        <InfoRow label="Type" value={character?.type || 'N/A'} />
        <InfoRow label="Created at" value={formattedDate} />
      </View>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Localization</Text>
        <InfoRow label="Name" value={character?.location?.name} />
        <InfoRow label="Type" value={character?.location?.type} />
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
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
  },
  avatar: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  statusContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 12,
    marginTop: 16,
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1A1A1A',
    marginTop: 4,
    textAlign: 'center',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 6,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
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
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    paddingBottom: 10,
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