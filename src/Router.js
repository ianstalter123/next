import React from 'react';
import firebase from 'firebase';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Signin from './containers/auth/Signin';
import Signup from './containers/auth/Signup';
import Demo from './components/auth/demo';
import Demo2 from './components/auth/demo2';
import Demo3 from './components/auth/demo3';
import Demo4 from './components/auth/demo4';
import Demo5 from './components/auth/demo5';
import Demo6 from './components/auth/demo6';
import PostCreate from './containers/post/PostCreate';
import PostEdit from './containers/post/PostEdit';
import PostList from './containers/post/PostList';
import requireAuth from './containers/auth/requireAuth';
import requireNotAuth from './containers/auth/requireNotAuth';

const RouterComponent = () => (
    <Router
    sceneStyle={{
        paddingTop: 65,
        backgroundColor: '#edecec'
    }}
    navigationBarStyle={styles.navigationBarStyle}
    titleStyle={{
        color: '#4d4d4d'
    }}
    >
  <Scene key="auth">
  <Scene key="signup" component={requireNotAuth(Signup)} title="Please Sign up" />
  <Scene key="signin" component={requireNotAuth(Signin)} title="Please Sign in" />
  <Scene key="demo" component={requireNotAuth(Demo)} title="Demo" />
  </Scene>
  <Scene key="demo2" component={requireNotAuth(Demo2)} title="Demo2" />
  <Scene key="demo3" component={requireNotAuth(Demo3)} title="Demo3" />
  <Scene key="demo4" component={requireNotAuth(Demo4)} title="Demo4" />
  <Scene key="demo5" component={requireNotAuth(Demo5)} title="Demo5" />
  <Scene key="demo6" component={requireNotAuth(Demo6)} title="Demo6" />
  <Scene key="post">
  <Scene
    key="postList"
    component={requireAuth(PostList)}
    title="Posts"
    leftTitle="Sign out"
    onLeft={() => {
        firebase.auth().signOut(); Actions.auth();
    }}
    onRight={() => Actions.postCreate()}
    rightTitle="Add"
    />
  <Scene key="postCreate" component={requireAuth(PostCreate)} title="Create Post" />
  <Scene key="postEdit" component={requireAuth(PostEdit)} title="Edit Post" />
  </Scene>
  </Router>
);

const styles = {
    navigationBarStyle: {
        backgroundColor: '#fff',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.2,
    },
};

export default RouterComponent;
