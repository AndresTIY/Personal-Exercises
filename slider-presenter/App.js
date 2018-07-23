import React from 'react';
import { StyleSheet, Text, Dimensions, View, ScrollView } from 'react-native';


<View style={styles.Container}>

  <View styles={styles.backdrop}>

    <ScrollView
      ref={(ref) => this.scrollBack = ref}
      showsHorizontalScrollIndicator={false}
      removeClippedSubviews={true}
      horizontal={true}
      scrollEnabled={false}>
      { this.renderBackdrops(items) }
      >
    </ScrollView>

  </View>



  <View style={styles.contentWrapper} >

    <View style={styles.contentBackground} >

      <ScrollView 
        ref={(ref) => this.scrollCont = ref}
        style={styles.contentRoller}
        showsHorizontalScrollIndicator={false}
        removeClippedSubviews={true}
        horizontal={true}
        scrollEnabled={false}
      >

        { this.renderContents(items) }

      </ScrollView>

    </View>

  </View>


  <View style={styles.posterWrapper}>

    <ScrollView
      scrollEventThrottle={16}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      removeClippedSubviews={true}
      onScroll={(e) => {this.scrollBack.scrollTo(e.nativeEvent.contentOffset);
        
        this.scrollCont.scrollTo({
          x: e.nativeEvent.contentOffset.x / screen.width * (contentWidth + SPACE_LG2)
        });
      }}
    >
    { this.renderPosters(items) }
    </ScrollView>
  </View>


</View>

export const screen = Dimensions.get('screen')
export const contentWidth = (screen.width - SPACE_LG2 - SPACE_MD2 - SPACE_MD2);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  backdrop: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: screen.width
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'flex-end',
    width: screen.width,
    marginBottom: SPACE_LG
  },
  contentBackground: {
    marginHorizontal: SPACE_LG,
    paddingTop: 120,
    height: screen.height / 5 * 3,
    borderRadius: BORDER_RADIUS_LG,
    backgroundColor: Colors.white,
    shadowColor: Colors.black,
    shadowOffset: {width: 0, height: SPACE_SM},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 1
  },
  contentRoller: {
    flex: 1,
    marginHorizontal: SPACE_SM,
    marginBottom: SPACE_MD,
  },
  contentItem: {
    width: contentWidth
  },
  posterWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: screen.width
  }
})

const Backdrop = ({ backdrop: {uri} }) => (
  <BlurView style={backdropStyles.container}>
    <Image 
      style={backdropStyles.image}
      source={{uri}}
      resizeMode={Image.resizeMode.cover}
    />
  </BlurView>
)

const Content = ({ item, style}) => (
  <View>
    <Text></Text>
    <Text></Text>
    <Rating />
    <ScrollView>
      <Text></Text>
    </ScrollView>
  </View>
)