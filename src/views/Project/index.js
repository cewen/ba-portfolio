import React, { Component } from 'react';
import classNames from 'classnames';

import api from 'lib/api';

import Picture from 'components/Picture';

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
      <section className={styles.container}>
        <header className={styles.header}>
          <div className={styles.collapser}>
            <h1 className={styles.title}>{project.fields.title}</h1>
            <p className={styles.intro}>{project.fields.intro}</p>
          </div>
        </header>

        <Picture
          className={styles.hero}
          asset={project.fields.hero}
          sizes={{
            s: { width: 720, height: 430 },
            m: { width: 1120, height: 720 },
            l: { width: 1200, height: 720 },
          }}
        />

        <div className={styles.info}>
          <div className={classNames(styles.collapser, styles.infoCollapser)}>
            <div className={styles.subheader}>
              <h2 className={styles.subtitle}>
                {project.fields.descriptionHeader}
              </h2>
              <p className={styles.description}>
                {project.fields.descriptionBody}
              </p>
            </div>

            <div className={styles.metadatas}>
              <div className={styles.metadata}>
                <p className={styles.metadataTitle}>Completed At:</p>
                <ul className={styles.metadataItems}>
                  {project.fields.credits.map((credit, i) => <li key={i} className={styles.metadataItem}>{credit}</li>)}
                </ul>
              </div>

              <div className={styles.metadata}>
                <p className={styles.metadataTitle}>Roles:</p>
                <ul className={styles.metadataItems}>
                  {project.fields.roles.map((role, i) => <li key={i} className={styles.metadataItem}>{role}</li>)}
                </ul>
              </div>

              <div className={styles.metadata}>
                <p className={styles.metadataTitle}>Honors:</p>
                <ul className={styles.metadataItems}>
                  {project.fields.honors.map((honor, i) => <li key={i} className={styles.metadataItem}>{honor}</li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;