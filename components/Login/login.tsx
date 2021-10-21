import React from 'react';
import { Text, View, TextInput, Image , TouchableHighlight,ImageBackground,Button  } from 'react-native';
import { LoginPageProps } from '../../core/Models/props/loginPageProps';
import { State } from '../../core/Models/state';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';
const logoUrl = require('../../assets/images/logo.png');
const backgroundUrl = require('../../assets/images/motherschild.png');


export class Login extends React.Component<LoginPageProps, State> {

  email: string = '';
  password: string = '';

  constructor(props: LoginPageProps) {
    super(props);
    this.state = {
      isUserLoggedIn: false
    };


    if (this.state.isUserLoggedIn) {
    }
    else{
        
    }
  }

  setEmail(email: string){
    this.email = email;
  }

  setPass(password: string){
    this.password = password;
  }

  render() {
    return (
      <View style={styles.root}>
        <ImageBackground source={backgroundUrl} resizeMode="cover" style={styles.container}>

        <Image style={styles.logo_area} source={logoUrl}/>
        <View style={styles.form_background}>

          
      <Text style={styles.login_text_font}>Welcome to child connect</Text>
      <Text style={[styles.text_center, styles.login_text_color]}>Enter your email and password</Text>

      <View style={styles.form_position}>
        <Icon name="email" size={30} />
        <TextInput style={styles.form_input_style}
          onChangeText={text => this.setEmail(text)} 
          value={this.email} 
          textContentType={'emailAddress'}
          autoCompleteType={'email'}
          clearButtonMode={'while-editing'}
          keyboardType={'email-address'}
          returnKeyLabel={'next'}
          returnKeyType={'next'}
          underlineColorAndroid={'#FF0000'}
          placeholder={'Email Address'}
        />
      </View>
      <View style={styles.form_position}>
        <Icon name="lock" size={30} />
        <TextInput style={styles.form_input_style}
          onChangeText={text => this.setPass(text)} 
          value={this.password} 
          textContentType={'password'} 
          autoCompleteType={'password'}
          clearButtonMode={'while-editing'}
          returnKeyLabel={'done'}
          returnKeyType={'done'}
          underlineColorAndroid={'#FF0000'}
          placeholder={'Password'}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={() => {}}
            title="Forgot username"
          />
          <Button
            onPress={() => {}}
            title="Forgot password"
            color="#841584"
          />
        </View>

        <Text style={[styles.text_center, styles.login_text_color]}>If you dont have one create a new user here</Text>

      <View style={styles.row_container}>
        <TouchableHighlight activeOpacity={0.8} underlayColor="#ffffff">
          <View style={styles.button_position}>
            <Text style={styles.login_text_color}>Login</Text>
          </View>
        </TouchableHighlight>
      </View>

        </View>
          </ImageBackground>
        
    </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
  root: {    
    flex: 1,
    justifyContent: 'flex-start',
  },

  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  container:{
    flex: 1,
    justifyContent: 'flex-start',
  },

  logo_area: {
    marginTop: 50,
    marginLeft: 20,
    alignSelf: 'flex-start',
    height:100,
    width:100,
    borderRadius: 10
  },

  text_center: {
    textAlign: 'center'
  },

  login_text_font: {
    marginTop: 30,
    alignSelf: 'center',
    fontSize: 30,
    marginBottom: 30,
    color: '#FC0505',
    fontWeight: '600',
  },

  form_position:{
    flexDirection: 'row',
    marginBottom: 20,
  },

  form_input_style: {
    flex: 1,
    paddingLeft: 20,
    borderBottomColor: '#9BE6DE',
    borderBottomWidth: 1,
  },

  form_background: {  
    marginTop: 100,  
    padding:20,
    marginLeft:20,
    marginRight: 20,
    height: 400,
    opacity: .8,
    backgroundColor:'#E6E6E6',
    borderRadius: 20
  },


  row_container: {
    alignSelf: 'center',
    marginTop: 30,
  },

  button_position: {
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 8,
    elevation: 8,
    shadowColor: '#0047BB',
    shadowRadius: 8,
    backgroundColor: '#F06403',
  },

  login_text_color: {
    color: '#000000'
  }
  
});