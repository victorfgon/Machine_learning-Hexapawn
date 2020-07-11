import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



export default class App extends React.Component{


constructor(props){
  super(props);

  this.state={
    currentPlayer:-1,// 1 = CPU turn , -1 = Player turn
    clicado:0, // 1 = some tile was selected
    row:0, // store the clicked row
    col:0, // store the clicked col
    winner:0, 
  }
}

componentDidMount(){
  this.initializaGame();

  global.neuronios = new Array(); // Creating the "brain" of the AI

  global.gameState = new Array();

  //initializing the game.
  global.gameState=[
    [1,1,1],
    [0,0,0],
    [-1,-1,-1]
  ];

  var neuronio21=[
        [1,1,1],
				[-1,0,0],
        [	0,-1,-1]
  ]

var jogada211 =[
  [1,0,1],
				[1,0,0],
      [	0,-1,-1]
]

var jogada212 =[
        [1,0,1],
				[-1,1,0],
        [0,-1,-1]
]

var jogada213 =[
  [1,1,0],
				[-1,0,1],
        [0,-1,-1]
]

neuronio21.push(jogada211,jogada212,jogada213);
global.neuronios.push(neuronio21);


var neuronio22=[
[1,1,1],
                [ 0,-1,0], 
                [-1,0,-1]
]

var jogada221 =[
  [0,1,1] ,
[1,-1,0], 
[-1,0,-1]
];
var jogada222 =[[0,1,1] 
                ,[0,1,0], 
                [-1,0,-1]];

neuronio22.push(jogada221,jogada222);
global.neuronios.push(neuronio22);

var neuronio41=[[1,0,1], 
                [1,-1,0], 
                [0,0,-1]
              ];


var jogada411 =[
              [0,0,1],
                [1,1,0], 
                [0,0,-1]
];

var jogada412 =[[1,0,1 ],
                [0,-1,0], 
                [1,0,-1]];

var jogada413 =[[1,0,0 ],
                [1,1,0], 
                [0,0,-1]];

var jogada414 =[[1,0,0] ,
                [1,-1,1], 
                [0,0,-1]];                

neuronio41.push(jogada411,jogada412,jogada413,jogada414);
global.neuronios.push(neuronio41);


var neuronio42=[[0,1,1], 
               [ -1,1,0], 
                [0,0,-1]];


var jogada421 =[[0,0,1 ],
                [1,1,0], 
                [0,0,-1]];

var jogada422 =[[0,1,1],
                [-1,0,0], 
                [0,1,-1]];

var jogada423 =[[0,1,0 ],
                [-1,1,1], 
                [0,0,-1]];
              

neuronio42.push(jogada421,jogada422,jogada423);
global.neuronios.push(neuronio42);


var neuronio43=[[1,0,1], 
                [-1,-1,0], 
                [0,-1,0]];


var jogada431 =[[0,0,1 ],
                [-1,1,0], 
                [0,-1,0]];

var jogada432 =[[1,0,0 ],
                [-1,1,0], 
                [0,-1,0]];

var jogada433 =[[1,0,0 ],
                [-1,-1,1], 
               [ 0,-1,0]];

              

neuronio43.push(jogada431,jogada432,jogada433);
global.neuronios.push(neuronio43);


var neuronio44=[[1,1,0], 
                [-1,0,-1], 
                [0,0,-1]];


var jogada441 =[[1,0,0] ,
                [1,0,-1], 
                [0,0,-1]];

var jogada442 =[[1,0,0 ],
                [-1,1,-1], 
                [0,0,-1]];

var jogada443 =[[1,0,0 ],
                [-1,0,1], 
               [ 0,0,-1]];

              

neuronio44.push(jogada441,jogada442,jogada443);
global.neuronios.push(neuronio44);


var neuronio45=[[0,1,1], 
               [ 0,1,-1], 
                [-1,0,0]];


var jogada451 =[[0,1,1] ,
                [0,0,-1], 
                [1,0,0]];

var jogada452 =[[0,1,1 ],
               [ 0,0,-1], 
                [-1,1,0]];

var jogada453 =[[0,0,1],
                [0,1,1], 
                [-1,0,0]];

              

neuronio45.push(jogada451,jogada452,jogada453);
global.neuronios.push(neuronio45);


var neuronio46=[[0,1,1], 
                [1,-1,-1], 
                [-1,0,0]];


var jogada461 =[[0,0,1 ],
                [1,-1,1], 
                [-1,0,0]];

var jogada462 =[[0,1,0 ],
               [ 1,1,-1] ,
                [-1,0,0]];

              
neuronio46.push(jogada461,jogada462);
global.neuronios.push(neuronio46);


var neuronio47=[[1,0,1], 
                [1,0,-1], 
                [0,-1,0]];


var jogada471 =[[1,0,1 ],
               [ 0,0,-1], 
                [1,-1,0]];

var jogada472 =[[1,0,1] ,
                [0,0,-1], 
               [ 0,1,0]];

              
neuronio47.push(jogada471,jogada472);
global.neuronios.push(neuronio47);


var neuronio48=[[1,1,0], 
                [-1,-1,1], 
               [ 0,0,-1]];


var jogada481 =[[0,1,0] ,
                [-1,1,1], 
               [ 0,0,-1]];

var jogada482 =[[1,0,0] ,
                [1,-1,1], 
                [0,0,-1]];

              
neuronio48.push(jogada481,jogada482);
global.neuronios.push(neuronio48);



var neuronio49=[[0,1,1], 
                [0,-1,0], 
                [0,0,-1]];


var jogada491 =[[0,1,0] ,
                [0,1,0], 
                [0,0,-1]];

var jogada492 =[[0,1,0] ,
                [0,-1,1], 
                [0,0,-1]];

              
neuronio49.push(jogada491,jogada492);
global.neuronios.push(neuronio49);


var neuronio50=[[0,1,1], 
               [ 0,-1,0], 
                [-1,0,0]];


var jogada501 =[[0,1,0] ,
               [ 0,1,0], 
                [-1,0,0]];

var jogada502 =[[0,1,0] ,
                [0,-1,1], 
                [-1,0,0]];

              
neuronio50.push(jogada501,jogada502);
global.neuronios.push(neuronio50);


var neuronio51=[[1,0,1], 
                [-1,0,0], 
                [0,0,-1]];


var jogada511 =[[1,0,0] ,
                [-1,0,1], 
                [0,0,-1]];


              
neuronio51.push(jogada511);
global.neuronios.push(neuronio51);


var neuronio61=[[0,0,1], 
                [1,1,-1], 
                [0,0,0]];


var jogada611 =[[0,0,1 ],
                [0,1,-1], 
                [1,0,0]];

var jogada612 =[[0,0,1] ,
                [1,0,-1], 
                [0,1,0]];



              
neuronio61.push(jogada611,jogada612);
global.neuronios.push(neuronio61);


var neuronio62=[[1,0,0], 
                [-1,-1,-1], 
                [0,0,0]];


var jogada621 =[[0,0,0] ,
                [-1,1,-1], 
                [0,0,0]];


              
neuronio62.push(jogada621);
global.neuronios.push(neuronio62);


var neuronio63=[[0,1,0], 
                [1,-1,-1], 
                [0,0,0]];


var jogada631 =[[0,0,0 ],
                [1,-1,1], 
                [0,0,0]];

var jogada632 =[[0,1,0 ],
                [0,-1,-1], 
                [1,0,0]];



              
neuronio63.push(jogada631,jogada632);
global.neuronios.push(neuronio63);


var neuronio64=[[0,1,0], 
                [-1,-1,1], 
                [0,0,0]];


var jogada641 =[[0,0,0 ],
               [ 1,-1,1], 
               [ 0,0,0]];

var jogada642 =[[0,1,0] ,
                [-1,-1,0], 
                [0,0,1]];



              
neuronio64.push(jogada641,jogada642);
global.neuronios.push(neuronio64);


var neuronio65=[[1,0,0], 
                [1,1,-1], 
                [0,0,0]];


var jogada651 =[[1,0,0 ],
                [0,1,-1], 
                [1,0,0]];

var jogada652 =[[1,0,0 ],
                [1,0,-1], 
                [0,1,0]];



              
neuronio65.push(jogada651,jogada652);
global.neuronios.push(neuronio65);



var neuronio66=[[0,0,1], 
                [-1,1,1], 
                [0,0,0]];


var jogada661 =[[0,0,1 ],
                [-1,0,1], 
                [0,1,0]];

var jogada662 =[[0,0,1] ,
                [-1,1,0], 
                [0,0,1]];



              
neuronio66.push(jogada661,jogada662);
global.neuronios.push(neuronio66);



var neuronio67=[[0,0,1], 
               [ 1,-1,0], 
                [0,0,0]];


var jogada671 =[[0,0,0 ],
                [1,1,0], 
                [0,0,0]];

var jogada672 =[[0,0,0 ],
                [1,-1,1], 
                [0,0,0]];

var jogada673 =[[0,0,1] ,
                [0,-1,0], 
                [1,0,0]];



              
neuronio67.push(jogada671,jogada672,jogada673);
global.neuronios.push(neuronio67);



var neuronio68=[[0,1,0], 
                [-1,1,0], 
                [0,0,0]];


var jogada681 =[[0,0,0 ],
                [1,1,0], 
                [0,0,0]];

var jogada682 =[[0,1,0 ],
                [-1,0,0], 
                [0,1,0]];


              
neuronio68.push(jogada681,jogada682);
global.neuronios.push(neuronio68);



var neuronio69=[[0,1,0], 
                [0,1,-1], 
                [0,0,0]];


var jogada691 =[[0,0,0] ,
                [0,1,1], 
                [0,0,0]];

var jogada692 =[[0,1,0] ,
                [0,0,-1], 
                [0,1,0]];


              
neuronio69.push(jogada691,jogada692);
global.neuronios.push(neuronio69);



var neuronio70=[[1,0,0], 
                [1,-1,0], 
                [0,0,0]];


var jogada701 =[[0,0,0 ],
                [1,1,0], 
                [0,0,0]];

var jogada702 =[[1,0,0 ],
                [0,-1,0], 
                [1,0,0]];


              
neuronio70.push(jogada701,jogada702);
global.neuronios.push(neuronio70);




var neuronio71=[[0,0,1], 
                [0,-1,1], 
               [ 0,0,0]];


var jogada711 =[[0,0,0 ],
                [0,1,1], 
                [0,0,0]];

var jogada712 =[[0,0,1 ],
                [0,-1,0], 
                [0,0,1]];


              
neuronio71.push(jogada711,jogada712);
global.neuronios.push(neuronio71);

global.c=0; // AI level counter
global.joga;// aux
global.neur;// aux
global.pm=0;// First movement done = 1.

}

  initializaGame=() =>{

    this.setState({
    currentPlayer:-1,
    clicado:0,
    row:0,
    col:0,
    winner:0,
    })
    global.pm=0;
    global.gameState=
      [
        [1,1,1],
        [0,0,0],
        [-1,-1,-1]
      ];

      
  }

  //Returns 1 if CPU won,-1 if Player won, or a 0 if no one has won.
  getWinner= (alu)=>{

    //Check if some pawn has reached the end of the board.
      if((alu[0][0]==-1) || (alu[0][1]==-1) ||(alu[0][2]==-1 )) {
          
                  return -1;
   }
  
   if((alu[2][0]==1) || (alu[2][1]==1) ||(alu[2][2]==1 )) {
    
    return 1;
}
      
      var frente = new Array();
  
  //Check if there is no movement allowed for the player.
  if(this.state.currentPlayer==-1){
    
   for(var i=0;i<3;i++) {
    for(var j=0;j<3;j++){
      if(alu[i][j]==-1){
         frente.push(alu[i-1][j]);
      }
  }
}
  for(var i=0;i<frente.length;i++) {
      if(frente[i]!=1){
          return 0;
      }
      }
  
  
      for(var i=0;i<3;i++) {
        for(var j=0;j<3;j++){
      if(alu[i][j]==-1){
      if((i==2 && j==0) ||(i==1 && j==0)){
          if(alu[i-1][j+1] == 1){
              return 0;
          }
      }
  
      if((i==2 && j==1) ||(i==1 && j==1)){
          if(alu[i-1][j+1]==1 || alu[i-1][j-1] == 1){
              return 0;
          }
      }
  
      if((i==2 && j==2) ||(i==1 && j==2)){
          if(alu[i-1][j-1] == 1){
              return 0;
          }
      }
  }
  }
}
    return 1;
  } 
  
  
  if(this.state.currentPlayer==1){
    for(var i=0;i<3;i++) {
     for(var j=0;j<3;j++){
       if(alu[i][j]==1){
          frente.push(alu[i+1][j]);
       }
   }
 }
   for(var i=0;i<frente.length;i++) {
       if(frente[i]!=-1){
           return 0;
       }
       }
   
   
       for(var i=0;i<3;i++) {
         for(var j=0;j<3;j++){
       if(alu[i][j]==1){
       if((i==0 && j==0) ||(i==1 && j==0)){
           if(alu[i+1][j+1] == -1){
               return 0;
           }
       }
   
       if((i==0 && j==1) ||(i==1 && j==1)){
           if(alu[i+1][j+1]==-1 || alu[i+1][j-1] == -1){
               return 0;
           }
       }
   
       if((i==0 && j==2) ||(i==1 && j==2)){
           if(alu[i+1][j-1] == -1){
               return 0;
           }
       }
   }
   }
 }
     return -1;
   } 

   //Check if the player has some pawn on the board.
   if(this.state.currentPlayer==1){
   for(var i=0;i<3;i++) {
    for(var j=0;j<3;j++){
  if(alu[i][j]==1){
      return 0;
  }  
  
      }
    }
    return -1;
   }
  
   if(this.state.currentPlayer==-1){
    for(var i=0;i<3;i++) {
     for(var j=0;j<3;j++){
   if(alu[i][j]==-1){
       return 0;
   }  
   
       }
     }
     return 1;
    }
  
     
  
  }

onTilePress = (row, col) => {
 if(this.state.winner==0){
  var value=global.gameState[row][col];

 //Check if the player clicked on a pawn. 
if(value==-1 && this.state.clicado==0){

  //The right pawn can t do the first move of the game because is the same as moving the left one.
  if(row==2 && col==2 && global.pm==0){
    return;
  } 
  this.state.clicado=1;
  this.setState({clicado:1});

 
 //Making the tile that the player clicked blue.
  global.gameState[row][col]=-2;


  this.state.col=col;
  this.setState({col:col});
  this.state.row=row;
  this.setState({row:row});
  
}else if(this.state.clicado==0 && value!= this.state.currentPlayer){
  return;
}



else if(this.state.clicado==1 && global.gameState[row][col]==0){
  
  
  this.state.clicado=0;
  this.setState({clicado:0});
  global.gameState[this.state.row][this.state.col]=-1;

  //Moving forward with the pawn.
  if(this.state.currentPlayer==-1 && this.state.row==row+1 && this.state.col==col ){
    global.gameState[this.state.row][this.state.col]=0;
    global.gameState[row][col]=-1;
  this.state.currentPlayer=1;
  this.setState({currentPlayer:1});
  global.pm=1;
  var winner=this.getWinner(global.gameState);
 
  if(winner==-1){
    this.state.winner=winner;
    this.setState(({winner:winner}));
    //Making the AI eliminate the bad play.
    global.neuronios[global.neur].splice(global.neuronios[global.neur].indexOf(global.joga), 1);
    global.c++;
    Alert.alert("Player is the winner");
    return;
  }
}
 
}

else if(this.state.clicado==1 && global.gameState[row][col]!=0){
  
  this.state.clicado=0;
  this.setState({clicado:0});
  global.gameState[this.state.row][this.state.col]=-1;

  //Eating enemy pawn.
  if(value==1 && this.state.col!=col && this.state.row==row+1 && this.state.col-col!=2 && this.state.col-col!=-2){
    global.gameState[this.state.row][this.state.col]=0;
    global.gameState[row][col]=-1;
  this.state.currentPlayer=1;
  this.setState({currentPlayer:1});
  global.pm=1;
  var winner=this.getWinner(global.gameState);

  if(winner==-1){
   
    this.state.winner=winner;
    this.setState(({winner:winner}));
    global.neuronios[global.neur].splice(global.neuronios[global.neur].indexOf(global.joga), 1);
    global.c++;
    Alert.alert("Player is the winner");
    return;
  }

  } 
}



  if(this.state.currentPlayer==1){
    //AI
    var r=0;

for(var i=0;i<global.neuronios.length;i++) {

  for(var j=0;j<3;j++) {
    //Finding the current state of the game.
      if((global.gameState[j][0] != global.neuronios[i][j][0]) || (global.gameState[j][1] != global.neuronios[i][j][1]) || (global.gameState[j][2] != global.neuronios[i][j][2])){
        
          break;
      }

      if(j==2){
        
        //Creating the random number based on the number of possible plays.
          if(global.neuronios[i].length==6){
              r=Math.floor(Math.random() *3 );
          }
          if(global.neuronios[i].length==3){

            //If no safe  move available.
            this.state.winner=-1;
            this.setState(({winner:-1}));
            global.neuronios[global.neur].splice(global.neuronios[global.neur].indexOf(global.joga), 1);
            global.c++;
          
          }
          if(global.neuronios[i].length==5){
              r=Math.floor(Math.random() *2 );
          }
          if(global.neuronios[i].length==4){
              r=0;
          }
          if(global.neuronios[i].length==7){
              r=Math.floor(Math.random() *4 );
          }


          //AI making the play.
          if(this.state.winner == 0){
         global.joga=global.neuronios[i][r+3];
         global.neur=i;
         for(var j=0;j<3;j++) {
          for(var k=0;k<3;k++) {
         global.gameState[j][k]=global.neuronios[i][r+3][j][k];
         }
        }

        //Checking if IA won.
         winner=this.getWinner(global.gameState)
         this.state.winner=this.getWinner(global.gameState);
         this.setState({winner:this.getWinner(global.gameState)});
         this.state.currentPlayer=-1;
         this.setState({currentPlayer:-1});
         if(this.getWinner(global.gameState)==1){
          Alert.alert("CPU is the winner");    
         }
         
      }else{
        Alert.alert("Player is the winner"); 
      }
      }
    }
    
}



 }

}

 }
 

  onNewGamePress=()=>{
    this.initializaGame();
  }

  renderIcon=(row,col) => {
    if(global.gameState!=null){
    var value=global.gameState[row][col];
    switch(value){
      case 1: return <Image source={require('./assets/black_pawn.png')} resizeMode='center' style={styles.tileO}/>; 
      case -1: return <Image source={require('./assets/white_pawn.png')} resizeMode='center' style={styles.tileO}/>;
      case 2: return <Image source={require('./assets/white_pawn.png')} resizeMode='center' style={styles.tileX}/>;
      case -2: return <Image source={require('./assets/white_pawn.png')} resizeMode='center' style={styles.tileX}/>;
      default: return <View/>;
    }
  }
  }

  render(){
    return(

      <View style={styles.container}>

          <View style={{flexDirection:"row"}}>
    <Text style={{ color: 'black', fontSize: 30,justifyContent:'space-evenly' }}>AI LEVEL : {global.c}</Text>  
      </View>

        <View style={{flexDirection:"row"}}>

        < TouchableOpacity onPress={
          () =>this.onTilePress(0,0)
          }
          style={styles.tileg}>
            {this.renderIcon(0,0)}
           
        </ TouchableOpacity>

        < TouchableOpacity onPress={() =>this.onTilePress(0,1)} style={styles.tile}>
        {this.renderIcon(0,1)}
        </ TouchableOpacity>
        < TouchableOpacity onPress={() =>this.onTilePress(0,2)} style={styles.tileg}>
        {this.renderIcon(0,2)}
        </TouchableOpacity>
        </View>

        <View style={{flexDirection:"row"}}>
        < TouchableOpacity onPress={() =>this.onTilePress(1,0)} style={styles.tile}>
        {this.renderIcon(1,0)}
        </TouchableOpacity>
        < TouchableOpacity onPress={() =>this.onTilePress(1,1)} style={styles.tileg}>
        {this.renderIcon(1,1)}
        </ TouchableOpacity>
        < TouchableOpacity  onPress={() =>this.onTilePress(1,2)} style={styles.tile}>
        {this.renderIcon(1,2)}
        </ TouchableOpacity>
        </View>

        <View style={{flexDirection:"row"}}>
        < TouchableOpacity onPress={() =>this.onTilePress(2,0)} style={styles.tileg}>
        {this.renderIcon(2,0)}
        </ TouchableOpacity>
        < TouchableOpacity onPress={() =>this.onTilePress(2,1)} style={styles.tile}>
        {this.renderIcon(2,1)}
        </ TouchableOpacity>
        < TouchableOpacity onPress={() =>this.onTilePress(2,2)} style={styles.tileg}>
        {this.renderIcon(2,2)}
        </ TouchableOpacity>
        </View>

        <View style={{paddingTop:50}}/>
        <Button title="New Game" onPress={this.onNewGamePress}/>

      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center',
    
  },

  tile:{
    borderWidth:1,
    width:125,
    height:125,
  },

  tileg:{
    borderWidth:1,
    width:125,
    height:125,
    backgroundColor:'gray'
  },

  tileX:{
  
    width:125,
    height:125,
    backgroundColor:'blue',
 
  },

  tileO:{  

    width:125,
    height:125,

 
  },
})
