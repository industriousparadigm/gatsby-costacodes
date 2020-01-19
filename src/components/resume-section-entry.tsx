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

  if (section === 'Career')
    return (
      <div className='entry'>
        <h3 className='entry-title'>{role}</h3>
        <div className='entry-institution-container'>
          <h5 className='entry-institution'>
            <a href={link} target='_blank' rel='noopener noreferrer'>
              {institution}
            </a>
            <span className='entry-date-inline'>
              {' - '}
              {startDate !== endDate ? `${startDate}-${endDate}` : endDate}
            </span>
          </h5>
        </div>
        <div
          className='entry-details'
          dangerouslySetInnerHTML={{ __html: entry.node.html }}
        />
      </div>
    )

  if (section === 'Projects')
    return (
      <div className='entry'>
        <h3 className='entry-title'>
          <a href={link} target='_blank' rel='noopener noreferrer'>
            {name}
          </a>
          <span className='entry-date-inline'>{` - ${endDate}`}</span>
        </h3>
        <p className='entry-subtitle'>{description}</p>
        <div
          className='entry-details'
          dangerouslySetInnerHTML={{ __html: entry.node.html }}
        />
      </div>
    )

  if (section === 'Education')
    return (
      <div className='entry'>
        <h3 className='entry-title'>
          <a href={link} target='_blank' rel='noopener noreferrer'>
            {institution}
          </a>
        </h3>
        <p className='entry-subtitle'>
          {degree}
          {', '}
          {startDate !== endDate ? `${startDate}-${endDate}` : endDate}
        </p>
      </div>
    )
}

export default ResumeSectionEntry
