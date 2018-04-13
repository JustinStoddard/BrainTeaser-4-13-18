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
    axios.get('https://api.got.show/api/characters')
      .then( res => this.setState({ posts: res.data }) )
    
  }

  render() {
    const { posts } = this.state;
    return (
      <div>
        { posts.map( (post,i) => (
              <Segment>
                {post.name}
              </Segment>
            )
          )
        }
      </div>
    );
  }
}

export default Home;
