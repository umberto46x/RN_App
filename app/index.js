import { View,ScrollView,SafeAreaView } from "react-native";
import {Stack,useRouter} from "expo-router";
import { useState } from "react";
import {COLORS,icons,images,SIZES} from "../constants"
import {Nearbyjobs,Popularjobs,ScreenHeaderBtn,Welcome} from "../components"
import 'expo-router/entry';


const Home = () =>{
    const router = useRouter();
    const [searchTerm,setSearchTerm] = useState("")


     return(
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen 
            options={{headerStyle:{backgroundColor:COLORS.lightWhite}, 
            headerShadowVisible:false,
            headerLeft: ()=> (<ScreenHeaderBtn iconUrl={icons.menu} dimension={"60%"} ></ScreenHeaderBtn>),
             headerRight: ()=> (<ScreenHeaderBtn iconUrl={images.profile} dimension={"100%"} ></ScreenHeaderBtn>),
             headerTitle: "Home"
            }} />

            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{flex:1, padding:SIZES.medium}}>
            <Welcome searchTerm={searchTerm} setSearchTerm={setSearchTerm} 
                    handleClick={()=> {
                    if(searchTerm) router.push(`/search/${searchTerm}`)
            }}    />
            <Popularjobs />
            <Nearbyjobs/>

            </View>

            </ScrollView>
 
            
        </SafeAreaView>
     )
}

export default Home;
