import React from 'react'
import Icon from '../components/icon'

const ResumeTitle: React.FC = ({ siteMetadata }) => {
  const { author, profession, location, email, github, linkedin } = siteMetadata

  const iconsWithLinks = [
    ['email', `mailto:${email}`],
    ['github', github],
    ['linkedin', linkedin]
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

export default ResumeTitle
