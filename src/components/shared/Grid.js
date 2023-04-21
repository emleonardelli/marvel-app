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
  <View style={styles.row}>{children}</View>
);
  
const styles = StyleSheet.create({
    box: {
        width: 110,
        height: 150,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent:'space-between',
    },
});

