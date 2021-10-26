import React from 'react';
import { Text, View, TextInput, Image, TouchableHighlight, ScrollView, Button } from 'react-native';
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
        </View>
        <View style={styles.roundEdges}>

        <Text style={[styles.bigFontText, {alignSelf: 'center', justifyContent: 'center', marginTop: 20}]} >WELCOME TO CHILD CONNECT</Text>


          <Image style={styles.pageDividerArea} source={backgroundUrl} />



          <View style={styles.form_background}>

          <Text style={[styles.text_center, styles.login_text_color, {marginBottom: 20}]}>Forgot Password ? Enter registered email. We'll send a link to recover your account</Text>

          <View style={styles.form_position}>
              <TextInput style={styles.form_input_style}
                onChangeText={text => this.setEmail(text)}
                value={this.email}
                textContentType={'emailAddress'}
                autoCompleteType={'email'}
                clearButtonMode={'while-editing'}
                keyboardType={'email-address'}
                returnKeyLabel={'next'}
                returnKeyType={'next'}
                placeholder='Email Address'
                underlineColorAndroid={'#FF0000'}
              />
            </View>

          <View style={styles.row_container}>
            <TouchableHighlight activeOpacity={0.8} underlayColor="#ffffff">
              <View style={styles.button_position}>
                <Text style={styles.login_text_color}>Send</Text>
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
    backgroundColor: '#0047BB'
  },

  roundEdges: {
    borderRadius: 20
  },

  textAlignStart: {
    marginTop: 35
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
    fontSize: 30,
    color: '#fff',
    fontWeight: '700'
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
    maxHeight: 200,
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
    flexDirection: 'column',
    marginBottom: 20,
  },

  form_input_style: {
    marginBottom: 10,
    paddingLeft: 20,
    backgroundColor: '#0047BB',
    minHeight: 40,
    borderRadius: 15
  },

  form_background: {
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    maxWidth: 370,
    padding: 20,
    marginLeft: 20,
    marginRight: 20,    
    backgroundColor: '#E6E6E6'
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