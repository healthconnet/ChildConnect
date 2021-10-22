import React from 'react';
import { Text, View, TextInput, Image, TouchableHighlight, ImageBackground, Button } from 'react-native';
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
    else {

    }
  }

  setEmail(email: string) {
    this.email = email;
  }

  setPass(password: string) {
    this.password = password;
  }

  render() {
    return (
      <View style={styles.root}>

        <View style={styles.alternativeLayoutButtonContainer}>
          <Image style={styles.logo_area} source={logoUrl} />
          <View style={[styles.textAlignStart]}>
            <Text style={styles.bigFontText} >WELCOME TO CHILD CONNECT</Text>
          </View>
        </View>
        <View style={styles.roundEdges}>
          <Image style={styles.pageDividerArea} source={backgroundUrl} />



          <View style={styles.form_background}>
            <Text style={[styles.text_center, styles.login_text_color, {marginBottom: 20, fontWeight: '400'}]}>Enter your email and password</Text>

            <View style={styles.form_position}>
              <Icon name="email" size={20} />
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
              />
            </View>
            <View style={styles.form_position}>
              <Icon name="lock" size={20} />
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

            

          <View style={styles.twoRowColumns}>
            <Button
              onPress={() => { }}
              title="Forgot username"
            />
            <Button
              onPress={() => { }}
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
        </View>

      </View>
    );
  }
}



// styles
const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#FF553E'
  },

  roundEdges: {
    borderRadius: 20
  },

  textAlignStart: {
    marginTop: 35,
    marginLeft: 20
  },

  alternativeLayoutButtonContainer: {
    marginLeft: 15,
    marginTop: 40,
    flexDirection: 'row',
  },

  twoRowColumns:{
    flexDirection: 'row',
    justifyContent:'space-between'
  },

  bigFontText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600'
  },

  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },

  logo_area: {
    height: 100,
    width: 100
  },

  pageDividerArea: {
    maxWidth: 370,
    marginLeft: 20,
    marginTop: 33,
    maxHeight: 350,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },

  formLogoArea: {
    width: 300
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

  form_position: {
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
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    maxWidth: 370,
    height: 300,
    padding: 20,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#E6E6E6',
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
    backgroundColor: '#4AB516',
  },

  login_text_color: {
    color: '#000000'
  }

});