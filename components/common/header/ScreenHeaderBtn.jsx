import React from 'react'
import { TouchableOpacity,Image  } from 'react-native'

import styles from './screenheader.style'



const ScreenHeaderBtn = ({iconUrl,dimension,handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image source={iconUrl} resizeMode='cover'
      style={styles.btnImg(dimension)}>

      </Image>
    </TouchableOpacity>
   
  )
}

export default ScreenHeaderBtn