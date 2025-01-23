import{SafeAreaView,Text, StyleSheet, Image, ScrollView} from 'react-native';
 
export default function App(){
  return(
  <SafeAreaView style={styles.container}>
  <ScrollView>
    <Text style={styles.titulo}> "Sabor & Grão" </Text>
    <Image style={styles.img} source={require('./Classico1.jpg')}/>
    <Text style={styles.subtitulo}> Hambúrguer Clássico </Text>
    <Text style={styles.frase}> Ingredientes: Pão de brioche, hambúrguer de carne bovina, queijo cheddar, alface, tomate, cebola roxa, picles, molho especial.
    Preço: R$ 25,00 </Text>

    <Image style={styles.img} source={require('./Cheeseburger-Bacon.jpg')}/>
    <Text style={styles.subtitulo}> Cheeseburger-Bacon </Text>
    <Text style={styles.frase}> Ingredientes: Pão de brioche, hambúrguer de carne bovina, queijo cheddar, bacon crocante, alface, tomate, cebola caramelizada, maionese de alho. 

Preço: R$ 28,00  </Text>

    <Image style={styles.img} source={require('./HamburguerVegano.jpg')}/>
    <Text style={styles.subtitulo}> Hambúrguer Vegano </Text>
    <Text style={styles.frase}> Pão integral, hambúrguer de grão-de-bico, alface, tomate, cebola roxa, abacate, molho de tahine. 

Preço: R$ 24,00  </Text>

    <Image style={styles.img} source={require('./HamburguerdeFrango.jpg')}/>
    <Text style={styles.subtitulo}> Hambúrguer de Frango </Text>
    <Text style={styles.frase}> Pão de brioche, filé de frango grelhado, queijo suíço, alface, tomate, maionese de ervas. 

Preço: R$ 26,00  </Text>

    <Image style={styles.img} source={require('./HamburguerBBQ.jpg')}/>
    <Text style={styles.subtitulo}> HambúrguerBBQ </Text>
    <Text style={styles.frase}> Pão de brioche, hambúrguer de carne bovina, queijo cheddar, bacon, cebola frita, molho barbecue. 

Preço: R$ 27,00  </Text>

<Text style={styles.titulo}> "Sobremesas" </Text>
    <Image style={styles.img} source={require('./BrowniecomSorvete.jpg')}/>
    <Text style={styles.subtitulo}>  Brownie com Sorvete </Text>
    <Text style={styles.frase}> Brownie de chocolate, sorvete de baunilha, calda de chocolate. 

Preço: R$ 15,00  </Text>

    <Image style={styles.img} source={require('./CheesecakedeFrutasVermelhas.jpg')}/>
    <Text style={styles.subtitulo}> Cheesecake de Frutas Vermelhas </Text>
    <Text style={styles.frase}> Ingredientes: Base de biscoito, creme de queijo, calda de frutas vermelhas. 

Preço: R$ 18,00  </Text>

    <Image style={styles.img} source={require('./MilkshakedeOreo.jpg')}/>
    <Text style={styles.subtitulo}> Milkshake de Oreo </Text>
    <Text style={styles.frase}>  Sorvete de baunilha, biscoitos Oreo, chantilly. 

Preço: R$ 14,00  </Text>

    <Text style={styles.titulo}> "Bebidas" </Text>
    <Image style={styles.img} source={require('./Refrigerante.jpg')}/>
    <Text style={styles.subtitulo}>  Refrigerante </Text>
    <Text style={styles.frase}> Opções: Coca-Cola, Guaraná, Sprite. 

Preço: R$ 6,00   </Text>

    <Image style={styles.img} source={require('./SucoNatural.jpg')}/>
    <Text style={styles.subtitulo}> Cheesecake de Frutas Vermelhas </Text>
    <Text style={styles.frase}> Opções: IPA, Lager, Weiss. 

Preço: R$ 12,00   </Text>


    



   </ScrollView>
  </SafeAreaView>
  )
}
 
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    backgroundColor: '#000000',
    justifyContent:'center',
    

  },
  titulo:{
    fontSize: 50,
    fontFamily:'Arial',
    color:'#fff',
    justifyContent:'center',
    margin:30
      
  },
   subtitulo:{
     backgroundColor:'#d83a31',
     fontSize:40,
     color:'#f0f0d8'
    },
  img:{
    width:400,
    height:200 
  },
  frase:{
    fontSize:20,
    color:'#f0f0d8'
  }
  

 
});