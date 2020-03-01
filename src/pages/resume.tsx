import React, { FC } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import '../styles/resume.scss'

import Layout from '../components/layout'
import ResumeSection from '../components/resume-section'
import ResumeTitle from '../components/resume-title'

const ResumePage: FC = () => {
  const { site, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          resumeSections
          author
          profession
          location
          email
          linkedin
          github
        }
      }
      allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___startDate }
      ) {
        edges {
          node {
            frontmatter {
              section
              name
              description
              role
              institution
              link
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
      <div className='resume-container'>
        <ResumeTitle siteMetadata={site.siteMetadata} />
        <div className='resume-body'>
          {site.siteMetadata.resumeSections.map(section => (
            <ResumeSection
              key={`section-${section}`}
              title={section}
              entries={allMarkdownRemark.edges.filter(
                entry => entry.node.frontmatter.section === section
              )}
            />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default ResumePage
