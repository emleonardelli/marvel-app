import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Grid = ({ dataset, children }) => {
  return (
    <PreviewLayout>
        {dataset.map(element => (
            children(element, styles.box)
        ))}
    </PreviewLayout>
  )
}

export default Grid


const PreviewLayout = ({ children }) => (
    <View style={{padding: 10, flex: 1}}>
      <View style={styles.row}>{children}</View>
    </View>
);
  
const styles = StyleSheet.create({
    box: {
        width: 150,
        height: 150,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'space-between',
    },
});

