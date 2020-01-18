import { graphql, StaticQuery, useStaticQuery } from 'gatsby'
import React, { FC } from 'react'
import Icon from '../components/icon'
import Layout from '../components/layout'
import ResumeSectionEntry from '../components/resume-section-entry'

import { Duration, Entry, Resume, Section } from '../@types/resume'
import data from '../data/resume'
import './resume.scss'

const Page: FC = () => {
  const { site, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          resumeSections
          author
          profession
          location
          description
          email
          linkedin
          github
          medium
        }
      }
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              section
              role
              institution
              degree
              startDate
              endDate
            }
            html
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <RenderResume metadata={site.siteMetadata} markdown={allMarkdownRemark} />
    </Layout>
  )
}

const RenderResume: FC<Resume> = ({ metadata, markdown }) => {
  const sections = metadata.resumeSections
  const entries = markdown.edges

  return (
    <div className='resume-container'>
      <ResumeTitle metadata={metadata} />
      <div className='resume-body'>
        {sections.map(section => (
          <RenderSection
            key={`section-${section}`}
            title={section}
            markdown={markdown}
            entries={entries}
          />
        ))}
      </div>
    </div>
  )
}

const ResumeTitle: FC = ({ metadata }) => {
  const {
    author,
    profession,
    location,
    email,
    github,
    linkedin,
    medium
  } = metadata

  const iconsWithLinks = [
    ['email', `mailto:${email}`],
    ['github', github],
    ['linkedin', linkedin],
    ['mulan', medium]
  ]

  return (
    <div className='resume-title'>
      <h1 className='resume-name'>{author}</h1>
      <h5 className='title-section-description'>{`${profession} | ${location}`}</h5>
      <div className='icon-section'>
        {iconsWithLinks.map(([iconName, href], i) => (
          <a key={`link-${i}`} className='link-icon' href={href}>
            <Icon key={`link-${i}`} name={iconName} />
          </a>
        ))}
      </div>
    </div>
  )
}

/** Renders a section, a titled list of entries. */
const RenderSection: FC<Section> = ({ title, markdown, entries }) => {
  console.log({ entries, title })
  return (
    <section className='section'>
      <div className='section-title-container'>
        <h2 className='section-title'>{title}</h2>
      </div>
      {entries.map((entry, i) => (
        <ResumeSectionEntry
          key={`${title}-entry-${i}`}
          entry={entry.node.frontmatter.section === title ? entry : null}
        />
      ))}
    </section>
  )
}

export default Page
