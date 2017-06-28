/* eslint-disable class-methods-use-this */
import React, { Component, PropTypes } from 'react';
import { ListView, View, TouchableWithoutFeedback, TouchableHighlight, Text ,  Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, InputGroup, Content, Card, Left, Right, Thumbnail, CardItem, Segment, Input, Item, Body, Header, Button, Icon } from 'native-base';
import { getWalletList } from '../../modules/wallet';
import { connect } from 'react-redux';
import { Spinner } from '../common';
import Modal from 'react-native-modal';

class Demo5 extends Component {

  state = {
    isModalVisible: false,
    wallets: []
  }

  _showModal = () => this.setState({
    isModalVisible: true
  })

  _hideModal = () => this.setState({
    isModalVisible: false
  })

  componentWillMount() {
    // console.log('are there any props', this.props);
    this.props.getWalletList();
  }

  componentWillReceiveProps(nextProps){
    //console.log('next props', nextProps.list);
    this.setState({wallets:nextProps.list})
    const listItems = Object.keys(nextProps.list);
    //console.log('listItems', listItems);

  }

  componentWillUnmount() {
  }

  renderList() {
    //console.log('this state', this.state);
    if(this.state) {
      const walletList = this.state.wallets;
      const listItems = Object.keys(this.state.wallets);
      console.log('list items', listItems);
      return listItems.map(wallet => (
        // let imageUrl = 'ian';
        // <Text>{itemList[item].image}</Text>

        <TouchableHighlight onPress={this._showModal}>
        <Image
        images={walletList[wallet].images}
         style={{width: 120, height: 120, borderRadius:60}}
        source={{uri: walletList[wallet].imageUrl}} />
        </TouchableHighlight>


    ));
    }
  }

  render() {
    return (

            <Container>
            <Content>
      <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {this.renderList()}

      </View>

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
      </Container>

    );
  }
}


const mapStateToProps = ({ wallet }) => {
  const { loading, error } = wallet;
  const list = _.map(wallet.list, (val, uid) => ({ ...val, uid }));

  return { loading, postError: error, list };
};

export default connect(mapStateToProps, { getWalletList })(Demo5);
