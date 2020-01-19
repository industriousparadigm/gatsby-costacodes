import React from 'react'
import ResumeSectionEntry from '../components/resume-section-entry'

const ResumeSection: React.FC = ({ title, entries }) => {
  return (
    <section className='section'>
      <div className='section-title-container'>
        <h2 className='section-title'>{title}</h2>
      </div>
      {entries.map((entry, i) => (
        <ResumeSectionEntry key={`${title}-entry-${i}`} entry={entry} />
      ))}
    </section>
  )
}

export default ResumeSection
