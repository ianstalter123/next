import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableHighlight, View, Image } from 'react-native';
import { Container, InputGroup, Content, Card, Tab, List, ListItem, Thumbnail, Item, Body, Header, Button, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { getWalletList } from '../../modules/wallet';
import { connect } from 'react-redux';
import Modal from 'react-native-modal';


class Demo6 extends Component {

  state = {
    isModalVisible: false,
    wallets: []
  }

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

        <ListItem>
            <Thumbnail square size={80}   source={{uri: walletList[wallet].imageUrl}} />
            <Body>
                <Text>{walletList[wallet].name}</Text>
                <Text note>{walletList[wallet].birthday}.</Text>
            </Body>
        </ListItem>


    ));
    }
  }

  render() {
    return (
      <Container>
            <Content>
                    <List>
                        {this.renderList()}
                     </List>
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

export default connect(mapStateToProps, { getWalletList })(Demo6);
