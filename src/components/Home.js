import React, { Component } from 'react';
import axios from 'axios';
import { 
  Container,
  Divider,
  Button,
  Segment,
  Rail,
  Loader,
  Image,
  Grid,
  Card,
  Header, 
} from 'semantic-ui-react';

class Home extends Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get('https://api.got.show/api/characters/byId/:id')
      .then( res => this.setState({ cities: res.data }) )
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        { posts.map( post => {
              <Segment>
                {post.name}
                <Segment>
                  {post.photo}
                </Segment>
              </Segment>
            }
          )
        }
      </div>
    );
  }
}

export default Home;
