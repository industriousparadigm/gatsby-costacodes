import React from 'react'

const ResumeSectionEntry: React.FC = ({ entry }) => {
  if (!entry) return null
  const {
    section,
    name,
    description,
    role,
    institution,
    link,
    degree,
    startDate,
    endDate
  } = entry.node.frontmatter

  if (
    section === 'Bio' ||
    section === 'Programming tools' ||
    section === 'Languages'
  )
    return (
      <div className='entry'>
        <div
          className={`entry-details ${section === 'Bio' ? 'tight' : 'tighter'}`}
          dangerouslySetInnerHTML={{ __html: entry.node.html }}
        />
      </div>
    )

  if (section === 'Projects')
    return (
      <div className='entry'>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <h3 className='entry-title'>{name}</h3>
        </a>
        <p className='entry-subtitle'>{description}</p>
        <div
          className='entry-details'
          dangerouslySetInnerHTML={{ __html: entry.node.html }}
        />
      </div>
    )

  if (section === 'Career')
    return (
      <div className='entry'>
        <h3 className='entry-title'>{role}</h3>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <h5 className='entry-institution'>{institution}</h5>
        </a>
        <div
          className='entry-details'
          dangerouslySetInnerHTML={{ __html: entry.node.html }}
        />
      </div>
    )

  if (section === 'Education')
    return (
      <div className='entry'>
        <a href={link} target='_blank' rel='noopener noreferrer'>
          <p className='entry-title'>{institution}</p>
        </a>
        <p className='entry-subtitle'>
          {degree},{' '}
          {startDate !== endDate ? `${startDate}-${endDate}` : endDate}
        </p>
      </div>
    )
}

export default ResumeSectionEntry
