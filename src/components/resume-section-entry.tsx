import React from 'react'

const ResumeSectionEntry: React.FC = ({ entry }) => {
  if (!entry) return null
  const {
    section,
    role,
    institution,
    link,
    degree,
    startDate,
    endDate
  } = entry.node.frontmatter

  console.log({ entry })

  if (section === 'Bio' || section === 'Programming tools')
    return (
      <div className='entry'>
        <div
          className={`entry-details ${section === 'Bio' ? 'tight' : 'tighter'}`}
          dangerouslySetInnerHTML={{ __html: entry.node.html }}
        />
      </div>
    )

  // if (section === 'Programming tools')
  // return (
  //   <div className='entry'>
  //     <div
  //       className='entry-details'
  //       dangerouslySetInnerHTML={{ __html: entry.node.html }}
  //     />
  //   </div>
  // )

  return (
    <div className='entry'>
      {role ? (
        <>
          <p className='entry-title'>{role}</p>
          <a href={link} target='_blank' rel='noopener noreferrer'>
            <p className='entry-institution'>{institution}</p>
          </a>
          <div
            className='entry-details'
            dangerouslySetInnerHTML={{ __html: entry.node.html }}
          />
        </>
      ) : (
        <>
          <a href={link} target='_blank' rel='noopener noreferrer'>
            <p className='entry-title'>{institution}</p>
          </a>
          <p className='entry-details'>
            {degree}, {endDate}
          </p>
        </>
      )}
    </div>
  )
}

export default ResumeSectionEntry
