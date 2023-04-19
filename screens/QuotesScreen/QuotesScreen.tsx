import { TypeHomeScreenProps } from './types';
import { StyleSheet, Text, View } from 'react-native';
import Table from '../../components/Table/Table';
import { useFocusEffect } from '@react-navigation/native';
import { EMPTY_VALUE, QUOTES_REQUEST_TIMEOUT_MS } from '../../common/constants';
import { TypeTableColumn } from '../../components/Table/types';
import { useCallback } from 'react';
import { TypeQuotes } from '../../store/quotes/types';
import { observer } from 'mobx-react-lite';
import quotesStore from '../../store/quotes/quotes';

function QuotesScreen({ navigation }: TypeHomeScreenProps) {
  useFocusEffect(
    useCallback(() => {
      quotesStore.fetchQuotes();

      const timerId = setInterval(
        () => quotesStore.fetchQuotes(),
        QUOTES_REQUEST_TIMEOUT_MS
      );

      return () => clearInterval(timerId);
    }, [])
  );

  const tableColumns: TypeTableColumn<TypeQuotes>[] = [
    { title: 'Тикер', fieldName: 'ticker', width: 110 },
    { title: 'Last', fieldName: 'last', width: 150 },
    {
      title: 'Percent change',
      fieldName: 'percentChange',
      width: 150,
      render: item => (
        <Text style={styles.paragraph}>
          {item?.percentChange
            ? item.percentChange.replace(/0+$/, '').replace(/\.$/, '') + ' %'
            : EMPTY_VALUE}
        </Text>
      ),
    },
    {
      title: 'Highest bid',
      fieldName: 'highestBid',
      render: item => (
        <Text style={styles.paragraph}>{item?.highestBid ?? EMPTY_VALUE}</Text>
      ),
    },
  ];

  return (
    <View style={styles.container}>
      <Table
        title='Таблица котировок'
        data={quotesStore.quotes}
        columns={tableColumns}
        loading={!Boolean(quotesStore.quotes.length)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
  },
  inner: {
    paddingTop: 30,
    marginBottom: 90,
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
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default observer(QuotesScreen);
