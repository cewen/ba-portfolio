import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import CustomPropTypes from 'lib/CustomPropTypes';

import Picture from 'components/Picture';
import getModule from 'views/Project/getModule';

import styles from './styles.scss';

class Project extends Component {
  static propTypes = {
    projects: PropTypes.arrayOf(CustomPropTypes.project).isRequired,
  };

  state = {
    project: {},
    nextProject: {},
  };

  getData(slug) {
    const { projects } = this.props;
    const [project] = projects.filter(item => item.fields.slug === slug);
    const nextProjectIndex = (projects.indexOf(project) + 1) % projects.length;
    const nextProject = projects[nextProjectIndex];

    this.setState((prevState, props) => {
      return {
        project,
        nextProject,
      };
    });
  };

  componentDidMount() {
    const { slug } = this.props.match.params;

    this.getData(slug);
  }

  componentWillReceiveProps(nextProps) {
    const { slug } = nextProps.match.params;

    this.getData(slug);
  }

  render() {
    const { project, nextProject } = this.state;

    if (!project || !project.fields) {
      return null;
    }

    const { fields } = project;

    return (
      <section className={styles.container}>
        <header className={styles.header}>
          <div className={styles.collapser}>
            <h1 className={styles.title}>{fields.title}</h1>
            <p className={styles.intro}>{fields.intro}</p>
          </div>
        </header>

        <Picture
          className={styles.hero}
          asset={fields.hero}
          sizes={{
            s: { width: 720 },
            m: { width: 1120 },
            l: { width: 1200 },
          }}
        />

        <div className={styles.info}>
          <div className={classNames(styles.collapser, styles.infoCollapser)}>
            <div className={styles.subheader}>
              <h2 className={styles.subtitle}>
                {fields.descriptionHeader}
              </h2>
              <p className={styles.description}>
                {fields.descriptionBody}
              </p>
            </div>

            <div className={styles.metadatas}>
              {fields.credits &&
                <div className={styles.metadata}>
                  <p className={styles.metadataTitle}>Completed At:</p>
                  <ul className={styles.metadataItems}>
                    {fields.credits.map((credit, i) => <li key={i} className={styles.metadataItem}>{credit}</li>)}
                  </ul>
                </div>
              }

              {fields.roles &&
                <div className={styles.metadata}>
                  <p className={styles.metadataTitle}>Roles:</p>
                  <ul className={styles.metadataItems}>
                    {fields.roles.map((role, i) => <li key={i} className={styles.metadataItem}>{role}</li>)}
                  </ul>
                </div>
              }

              {fields.honors &&
                <div className={styles.metadata}>
                  <p className={styles.metadataTitle}>Honors:</p>
                  <ul className={styles.metadataItems}>
                    {fields.honors.map((honor, i) => <li key={i} className={styles.metadataItem}>{honor}</li>)}
                  </ul>
                </div>
              }
            </div>
          </div>
        </div>

        {fields.modules && fields.modules.map(getModule)}

        <div className={styles.next}>
          <div className={styles.nextContent}>
            <span className={styles.nextHeader}>Next project</span>
            <Link to={`/${nextProject.fields.slug}`} className={styles.nextLink}>{nextProject.fields.title}</Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;