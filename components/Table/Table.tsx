import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import { TypeTableColumn } from './types';
import { useMemo } from 'react';

interface IProps<T> {
  title?: string;
  data: T[];
  columns: TypeTableColumn<T>[];
  loading?: boolean;
}

export default function Table<T extends { id: string | number }>({
  title,
  data,
  columns,
  loading,
}: IProps<T>) {
  const colWidthStyle: StyleProp<ViewStyle> = {
    ...styles.col,
    width: 100 / columns.length + '%',
  };

  const getTableHeader = (): JSX.Element => (
    <View style={{ ...styles.row, ...styles.tableHead }}>
      {columns.map((column, i) => {
        return (
          <View
            key={i}
            style={
              column?.width
                ? { ...colWidthStyle, width: column.width }
                : colWidthStyle
            }
          >
            <Text style={{ ...styles.paragraph, ...styles.tableHeadCol }}>
              {column.title}
            </Text>
          </View>
        );
      })}
    </View>
  );

  const tableItem: ListRenderItem<T> = ({ item }) => (
    <View style={styles.row}>
      {columns.map((column, i) => {
        return (
          <View
            key={i}
            style={
              column?.width
                ? { ...colWidthStyle, width: column.width }
                : colWidthStyle
            }
          >
            {column?.render ? (
              column.render(item)
            ) : (
              <Text style={styles.paragraph}>
                {item[column.fieldName] as string}
              </Text>
            )}
          </View>
        );
      })}
    </View>
  );

  const memoizedTableItem: ListRenderItem<T> = useMemo(() => tableItem, [data]);

  return (
    <SafeAreaView style={styles.container}>
      {title && <Text style={styles.mainTitle}>{title}</Text>}

      {loading ? (
        <View style={styles.loader}>
          <ActivityIndicator size={'large'} color={'#000'} />
        </View>
      ) : (
        <ScrollView
          horizontal={true}
          bounces={false}
          style={styles.horizontalContainer}
        >
          <FlatList
            data={data}
            renderItem={memoizedTableItem}
            bounces={false}
            keyExtractor={item => String(item.id)}
            stickyHeaderIndices={[0]}
            ListHeaderComponent={getTableHeader()}
          />
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  horizontalContainer: {
    marginHorizontal: 5,
  },
  row: {
    width: '100%',
    minHeight: 50,
    backgroundColor: '#dcdcdc',
    marginBottom: 3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  tableHead: {
    backgroundColor: '#b9b9b9',
  },
  col: {
    display: 'flex',
    flexShrink: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  tableHeadCol: {
    fontWeight: 'bold',
  },
  inner: {
    padding: 0,
    marginBottom: 90,
  },
  mainTitle: {
    fontSize: 31,
    color: '#2f2f2f',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  paragraph: {
    flex: 1,
    fontSize: 18,
    color: '#1c1c1c',
    paddingHorizontal: 10,
  },
  loader: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dcdcdc',
  },
});
