import React, { Component } from 'react';

import api from '../lib/api';

class Home extends Component {
  state = {
    projects: []
  };

  componentDidMount() {
    api.getEntries({ 'content_type': 'project' }).then((response) => {
      this.setState((prevState, props) => {
        return { projects: response.items };
      })
    });
  }

  render() {
    const { projects } = this.state;

    return (
      <div>
        <div>THIS IS THE HOME PAGE</div>
        <ul>
          {projects.map((project) => {
            return <li key={project.sys.id}>{project.fields.cmsTitle}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Home;