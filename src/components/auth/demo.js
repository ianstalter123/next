import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Content, Form, Item, Icon, Input, Button, Segment, Text, Thumbnail } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

class Demo extends Component {
  render() {
    return (
      <Container>
			<Content>

			<Grid>
			<Col style={myStyles.headIcon}>
			<Thumbnail
      style={{
        flex: 1,
        width: 70,
        height: 70,
        borderRadius: 30,
        resizeMode: 'contain'
      }}
      source={require('./img/iconsmall.png')} />
			</Col>
			</Grid>
			<Text style={{
        textAlign: 'center',
        fontSize: 25,
        paddingBottom: 20
      }}>Welcome.</Text>

			<Form style={myStyles.main}>
			<Item regular>

			<Input placeholder='Username'/>

			</Item>
			<Item regular>

			<Input placeholder='Password'/>

			</Item>

			</Form>

			<Grid>
			<Row>
			<Col>
			<Button style={myStyles.formButton} block success>
			<Text>Log In</Text>
			</Button>
			</Col>
			<Col>
			<Button style={myStyles.formButton} bordered block success>
			<Text
      onPress={() => Actions.signup()}
      >Sign Up</Text>

			</Button>
			</Col>
			</Row>
			</Grid>

			<Text style={{
        color: 'green',
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 20
      }}
      onPress={() => Linking.openURL('http://google.com')}>
      	Forgot your password?
      	</Text>

      	<Grid >
      	<Col style={myStyles.centerIcon}>
      	<Thumbnail

      source={require('./img/email.png')} />
      	</Col>
      	<Col style={myStyles.centerIcon}>
      	<Thumbnail

      source={require('./img/gmail.png')} />
      	</Col>
      	<Col style={myStyles.centerIcon}>
      	<Thumbnail

      source={require('./img/facebook.png')} />
      	</Col>
      	</Grid>

      	<Text style={{
        color: 'green',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 20
      }}
      onPress={() => Linking.openURL('http://google.com')}>
      	Not ready to signup? Explore the app.
      	</Text>
      	</Content>
      	</Container>
    );
  }
}

const myStyles = {
  headIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  formButton: {
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
  },
  centerIcon: {
    justifyContent: 'center',
    alignItems: 'center'
  },

  main: {
    elevation: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 30,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
  }
};

export default Demo;
