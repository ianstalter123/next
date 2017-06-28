import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableHighlight, View, Image } from 'react-native';
import { Container, Fab, Footer, FooterTab, InputGroup, Content, Card, Left, Right, Thumbnail, CardItem, Segment, Input, Item, Body, Header, Button, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Modal from 'react-native-modal';
import {GalleryModal} from '../common';;

class Demo2 extends Component {
  constructor(props) {
    super(props);
      this.state = {
          active: 'true'
      };
  }

  state = {
    isModalVisible: false
  }

  _showModal = () => this.setState({
    isModalVisible: true
  })

  _hideModal = () => this.setState({
    isModalVisible: false
  })

  render() {
    return (


      <Container>
      <Content>
      <Header searchBar rounded>
      <Item>
      <Icon name="ios-search" />
      <Input placeholder="Search" />
      <Icon name="ios-people" />
      </Item>
      <Button transparent>
      <Text>Search</Text>
      </Button>
      </Header>
      <Grid>
      <Row>
      <Col>
      <Card>
      <CardItem >
      <Body>
      <TouchableHighlight onPress={this._showModal}>
      <Text>Show Modal</Text>
      </TouchableHighlight>
      </Body>
      </CardItem>
      </Card>
      </Col>
      <Col>
      <Card>
      <CardItem >
      <Body>
      <TouchableHighlight onPress={this._showModal}>
      <Text>Show Modal</Text>
      </TouchableHighlight>
      </Body>
      </CardItem>
      </Card>
      </Col>
      <Col>
      <Card>
      <CardItem >
      <Body>
      <TouchableHighlight onPress={this._showModal}>
      <Text>Show Modal</Text>
      </TouchableHighlight>
      </Body>
      </CardItem>
      </Card>
      </Col>
      </Row>

      <Row>
      <Col>
      <Card>
      <CardItem >
      <Body>
      <TouchableHighlight onPress={this._showModal}>
      <Text>Show Modal</Text>
      </TouchableHighlight>
      </Body>
      </CardItem>
      </Card>
      </Col>
      <Col>
      <Card>
      <CardItem >
      <Body>
      <TouchableHighlight onPress={this._showModal}>
      <Text>Show Modal</Text>
      </TouchableHighlight>
      </Body>
      </CardItem>
      </Card>
      </Col>
      <Col>
      <Card>
      <CardItem >
      <Body>
      <TouchableHighlight onPress={this._showModal}>
      <Text>Show Modal</Text>
      </TouchableHighlight>
      </Body>
      </CardItem>
      </Card>
      </Col>
      </Row>

      <Row>
      <Col>
      <Card>
      <CardItem >
      <Body>
      <TouchableHighlight onPress={this._showModal}>
      <Text>Show Modal</Text>
      </TouchableHighlight>
      </Body>
      </CardItem>
      </Card>
      </Col>
      <Col>
      <Card>
      <CardItem >
      <Body>
      <TouchableHighlight onPress={this._showModal}>
      <Text>Show Modal</Text>
      </TouchableHighlight>
      </Body>
      </CardItem>
      </Card>
      </Col>
      <Col>
      <Card>
      <CardItem >
      <Body>
      <TouchableHighlight onPress={this._showModal}>
      <Text>Show Modal</Text>
      </TouchableHighlight>
      </Body>
      </CardItem>
      </Card>
      </Col>
      </Row>
      </Grid>



      <Modal
      isVisible={this.state.isModalVisible}>
      <View style={{
        flex: 1,
        backgroundColor: 'white',
      }}>

      <Card style={{
        flex: 0
      }}>
      <CardItem>
      <Left>
      <Thumbnail source={require('./img/iconsmall.png')} />
      <Body>
      <Text>NativeBase</Text>
      <Text note>April 15, 2016</Text>
      </Body>
      </Left>
      </CardItem>
      <CardItem>
      <Body>
      <Image style={{
        resizeMode: 'cover',
        width: 300,
        height: 400
      }} source={require('./img/image1.jpeg')} />

      <Button transparent textStyle={{
        color: '#87838B'
      }}>
      <Icon name="logo-github" />
      <Text>1,926 stars</Text>
      </Button>
      </Body>
      </CardItem>
      </Card>

      <Button
      full
      style={{
        position: 'absolute',
        bottom: 0,
        width: 337
      }}
      onPress={this._hideModal}
      >
      <Text>Close</Text>
      </Button>

      </View>
      </Modal>


      </Content>
      <Footer>
      <Fab
           active={this.state.active}
           direction="up"
           containerStyle={{ marginTop: 20 }}
           style={{ backgroundColor: '#5067FF'}}
           position="bottomLeft"
           onPress={() => this.setState({ active: !this.state.active })}>
           <Icon name="share" />
           <Button style={{ backgroundColor: '#34A34F' }}>
               <Icon name="logo-whatsapp" />
           </Button>
           <Button style={{ backgroundColor: '#3B5998' }}>
               <Icon name="logo-facebook" />
           </Button>
           <Button disabled style={{ backgroundColor: '#DD5144' }}>
               <Icon name="mail" />
           </Button>
       </Fab>
       <FooterTab>
                       <Button>
                           <Text>Apps</Text>
                       </Button>
                       <Button>
                           <Text>Camera</Text>
                       </Button>
                       <Button active>
                           <Text>Navigate</Text>
                       </Button>
              
                   </FooterTab>
      </Footer>
      </Container>


    );
  }
}

export default Demo2;
