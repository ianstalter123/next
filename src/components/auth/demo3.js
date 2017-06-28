import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, TouchableHighlight, View, Image } from 'react-native';
import { Container, InputGroup, Content, Card, Tab, Tabs, Left, Right, Thumbnail, CardItem, Segment, Input, Item, Body, Header, Button, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Modal from 'react-native-modal';
import Demo2 from './demo2';
import Demo5 from './demo5';
import Demo1 from './demo';

class Demo3 extends Component {
  render() {
    return (
      <Container>
			<Tabs>
			<Tab heading="My Items">
			<Demo1/>
			</Tab>
			<Tab heading="Browse Catalog">
			<Demo2/>
			</Tab>
			<Tab heading="Browse Items">
			<Demo5/>
			</Tab>
			</Tabs>
			</Container>
    );
  }
}

export default Demo3;
