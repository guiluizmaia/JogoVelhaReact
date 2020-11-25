import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import jogo from '../../jogo';

type Props = {};
export default class App extends Component<Props>{
  
  constructor(props){
    super(props);

    jogo.start();
    this.state = {
      board: jogo.board,
      gameOver: jogo.gameover
    }
  }

  makePlay(index){
      jogo.make_play(index)

      this.setState({
        board: jogo.board,
        gameOver: jogo.gameover
      })
  }

  eGameOver(){
    if (this.state.gameOver){
      jogo.start();
      return <Text>Game Over</Text>
      this.setState({
        board: jogo.board,
        gameOver: jogo.gameover
      })

    }
  }
  
  render(){
    return(
      
      <View style={styles.container}>
        
          {this.state.board.map((value, index) =>(
              <TouchableOpacity key={index} style={styles.piece} onPress={()=>{this.makePlay(index)}}>
                <Text style={styles.pieceText}>
                  {value}
                </Text>
              </TouchableOpacity>
          ))}
          {
            this.eGameOver()
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#000'
  },
  piece:{
    width: Dimensions.get('window').width/3,
    height: Dimensions.get('window').height/3,
    backgroundColor: "#000",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: "#7FFF7F"
  }
,
  pieceText:{
    fontSize: 60,
    color: "#7FFF7F"
  }
});

