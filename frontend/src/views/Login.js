import { StyleSheet, View, Image,Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const PlaceholderImage = require('../../assets/images/cart.png')

export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <View>
            <View style={styles.imageContainer}>
                <Image source={PlaceholderImage} style={styles.image} />
            </View>    
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#ffffff'
  },
  imageContainer: {
    width:'50%',
    marginLeft:'auto',
    
  },
  image: {
    width: '100%',
  },
})