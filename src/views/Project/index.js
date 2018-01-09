import React, { Component } from 'react';

import api from 'lib/api';

import styles from './styles.scss';

class Project extends Component {
  state = {
    project: {}
  }

  componentDidMount() {
    const { slug } = this.props.match.params;

    api.getEntries({
      'content_type': 'project',
      'fields.slug': slug
    }).then((entry) => {
      console.log(entry.items[0])
      this.setState({ project: entry.items[0]})
    });
  }

  render() {
    const { project } = this.state;

    if (!project || !project.fields) {
      return null;
    }

    return (
      <div>THIS IS THE PROJECT PAGE for {project.fields.title}</div>
    );
  }
}

export default Project;