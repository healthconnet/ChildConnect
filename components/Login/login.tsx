import React from 'react';
import { Text, View, TextInput, TouchableNativeFeedback, TouchableHighlight  } from 'react-native';
import { LoginPageProps } from '../../core/Models/props/loginPageProps';
import { State } from '../../core/Models/state';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StyleSheet } from 'react-native';


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
    this.email
  }

  setPass(password: string){
    
  }

  render() {
    return (
      <View style={styles.root}>
      <Text style={styles.login_text_font}>Login</Text>
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
      <View style={styles.row_container}>
        <TouchableHighlight activeOpacity={0.8} underlayColor="#ffffff">
          <View style={styles.button_position}>
            <Text style={styles.login_text_color}>Login</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
  root: {    
    padding: 20,
    backgroundColor: '#133E7C',
    flex: 1,
    justifyContent: 'center',
  },

  login_text_font: {
    alignSelf: 'center',
    fontSize: 30,
    marginBottom: 50,
    color: '#9BE6DE',
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
    backgroundColor: '#0D2534',
  },

  login_text_color: {
    color: '#9BE6DE'
  }
  
});