import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { LoginPageProps } from '../../core/Models/props/loginPageProps';
import { State } from '../../core/Models/state';

export class Login extends React.Component<LoginPageProps, State> {
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

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.greeting}>
        </Text>

        <View style={styles.buttons}>
          <View style={styles.button}>
          </View>

          <View style={styles.button}>
          </View>
        </View>
      </View>
    );
  }
}

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    alignSelf: 'center'
  },
  buttons: {
    flexDirection: 'row',
    minHeight: 70,
    alignItems: 'stretch',
    alignSelf: 'center',
    borderWidth: 5
  },
  button: {
    flex: 1,
    paddingVertical: 0
  },
  greeting: {
    color: '#999',
    fontWeight: 'bold'
  }
});