import {
  ScrollView,
  StyleSheet,
  View,
} from "react-native";

const List = ({ dataset, children }) => {
  return (
    <PreviewLayout>
        {dataset.map(element => (
            children(element)
        ))}
    </PreviewLayout>
  )
}

export default List


const PreviewLayout = ({ children }) => (
  <ScrollView
    horizontal={true}
    showsHorizontalScrollIndicator={false}
  >
    <View style={styles.row}>{children}</View>
  </ScrollView>
);
  
const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent:'space-between',
    },
});

