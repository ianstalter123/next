/* eslint-disable class-methods-use-this */
import React, { Component, PropTypes } from 'react';
import { ListView, View, TouchableWithoutFeedback, Text ,  Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, InputGroup, Content, Card, Left, Right, Thumbnail, CardItem, Segment, Input, Item, Body, Header, Button, Icon } from 'native-base';
import { getItemList } from '../../modules/item';
import { connect } from 'react-redux';
import { Spinner } from '../common';

class Demo4 extends Component {
  componentWillMount() {
    // console.log('are there any props', this.props);
    this.props.getItemList();
  }

  componentWillReceiveProps(nextProps){
    //console.log('next props', nextProps.list);
    this.setState({items:nextProps.list})
    const listItems = Object.keys(nextProps.list);
    //console.log('listItems', listItems);

  }

  componentWillUnmount() {
  }

  renderList() {
    //console.log('this state', this.state);
    if(this.state) {
      const itemList = this.state.items;
      const listItems = Object.keys(this.state.items);
      console.log('list items', listItems);
      return listItems.map(item => (
        // let imageUrl = 'ian';
        // <Text>{itemList[item].image}</Text>
        <Image
         style={{width: 150, height: 150}}
        source={{uri: itemList[item].image}} />
    ));
    }
  }

  render() {
    return (

      <View style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {this.renderList()}
      </View>
    );
  }
}


const mapStateToProps = ({ item }) => {
  const { loading, error } = item;
  const list = _.map(item.list, (val, uid) => ({ ...val, uid }));

  return { loading, postError: error, list };
};

export default connect(mapStateToProps, { getItemList })(Demo4);
