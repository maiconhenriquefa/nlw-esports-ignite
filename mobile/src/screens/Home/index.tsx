import { Image, View, FlatList } from 'react-native'
import { styles } from './styles'

import logoImg from '../../assets/logo-nlw-esports.png'

import { GameCard } from '../../components/GameCard'
import { Heading } from '../../components/Heading'

import { GAMES } from '../../utils/games';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />

      <Heading title='Encontre seu duo!' subtitle='Selecione o game que deseja jogar...' />

      <FlatList
        data={GAMES}
        horizontal
        contentContainerStyle={styles.contentList}
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <GameCard
            data={item}
          />
        )}
      />

    </View>
  )
}