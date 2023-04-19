import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TypeAboutScreenProps } from './types';

export default function AboutScreen({ navigation }: TypeAboutScreenProps) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.inner}>
        <Text style={styles.mainTitle}>О ПРИЛОЖЕНИИ</Text>

        <Text style={styles.secondTitle}>Кто мы</Text>

        <Text style={styles.paragraph}>
          Мы - команда разработчиков мобильного приложения с котировками акций,
          объединенная общей целью - помочь нашим пользователям следить за
          изменениями на фондовом рынке.
        </Text>

        <Text style={styles.secondTitle}>Что мы делаем</Text>

        <Text style={styles.paragraph}>
          Наше мобильное приложение предоставляет актуальные данные о биржевых
          котировках и позволяет отслеживать изменения в режиме реального
          времени. Мы уверены, что информация является ключом к успеху на рынке,
          поэтому всегда стараемся предоставлять нашим пользователям самые
          точные и свежие данные.
        </Text>

        <Text style={styles.secondTitle}>Наша миссия</Text>

        <Text style={styles.paragraph}>
          Наши пользователи доверяют нам важные инвестиционные решения, поэтому
          мы постоянно работаем над улучшением интерфейса, функционала и
          безопасности приложения. Наша главная миссия - помочь каждому
          инвестору достигнуть финансовой независимости через анализ данных и
          принятие осознанных решений.
        </Text>

        <Text style={styles.secondTitle}>Свяжитесь с нами</Text>

        <Text style={styles.paragraph}>
          Если у вас есть какие-либо вопросы или предложения, не стесняйтесь
          связаться с нами через контактную форму нашего сайта или отправить
          письмо на наш электронный адрес. Мы всегда готовы помочь и ответить на
          любые ваши запросы.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  inner: {
    padding: 30,
    marginBottom: 90,
    overflow: 'visible',
  },
  mainTitle: {
    fontSize: 31,
    color: '#2f2f2f',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  secondTitle: {
    fontSize: 26,
    color: '#585858',
    textAlign: 'center',
    marginBottom: 25,
    marginTop: 10,
  },
  paragraph: {
    fontSize: 18,
    color: '#151515',
    textAlign: 'center',
    marginBottom: 25,
  },
});
