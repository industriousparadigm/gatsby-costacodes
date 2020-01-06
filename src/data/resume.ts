import { Section, Resume } from '../@types/resume'

const data: Resume = {
  sections: [
    {
      title: 'Career',
      entries: [
        {
          title: 'React/Node frontend developer',
          company: 'The Stylist Group',
          link: 'https://stylist.co.uk',
          duration: {
            start: 'September 2019',
            end: 'Present'
          },
          description: [
            'Managing a React-Node codebase for a site with thousands of daily visitors',
            'Learning technicalities of programming and dev team culture',
            'Contributing to tapestry-lite, an in-house Node server',
            'Updating the codebase to enable React upgrade (hooks!)',
            'Unit and integration tests in Jest/Enzyme and Cypress',
            'Emotion for theming and CSS-in-JS',
            'Prebid.js to handle ads',
            'Solid Github peer review workflow, CircleCI integration testing',
            'Heroku for review, staging apps and pushing to production',
            'Working with Redis cache',
            'Pushing changes to live site'
          ]
        },
        {
          title: 'Web developer',
          company: 'Creative Industries, LLC',
          duration: {
            start: 'May 2016',
            end: 'May 2018'
          },
          description:
            'Created a very interesting application that solved a serious supply chain management problem for client, increasing supply chain efficiency by 38%. Diagnosed and fixed multiple legacy system issues, organized company soccer league on Tuesday nights.'
        }
      ]
    },
    {
      title: 'Honors and Awards',
      entries: [
        {
          description: [
            'National Honors Society (2012-2014)',
            '2012 TIME Magainze Volunteer of the Year',
            '1st Place - 2011 FIRST Robotics Midwest Regional Competition',
            '2nd Place - 2007 Northwest Middle School Spelling Bee'
          ]
        }
      ]
    },
    {
      title: 'Education',
      entries: [
        {
          company: 'M.S., Computer Science',
          title: 'University of the Great Plains',
          duration: {
            start: 'May 2018',
            end: 'May 2019'
          },
          description: 'GPA: 2.718 / 4.00'
        },
        {
          company: 'B.S., Graphic Design',
          title: 'Northwill College',
          duration: {
            start: 'Aug 2013',
            end: 'May 2017'
          },
          description: 'GPA: 3.14 / 4.00'
        }
      ]
    },
    {
      title: 'Projects',
      entries: [
        {
          title: '3D video compression algorithm',
          duration: {
            start: 'May 2012',
            end: 'September 2012'
          },
          description:
            'Developed a "middle out" compression algorithm which achieved a Weissman score up to 5.2. Code available on Github.'
        },
        {
          title: 'Bicycle-powered XBox',
          duration: {
            start: 'March 2019',
            end: 'Present'
          },
          description:
            'Design and develop a patented bicycle powered XBox so I can work out while I play Fortnite.'
        },
        {
          title: 'Personal Blog',
          link: 'https://www.theblogstarter.com/',
          duration: {
            start: 'November 2017',
            end: 'January 2018'
          },
          description:
            'Write a variety of stories of varying quality on a variety of topics. Occasionally, make memes.'
        },
        {
          title: 'Lemonade stand',
          duration: {
            start: 'May 2012',
            end: 'September 2012'
          },
          description:
            'Ran a successful lemonade stand for several months using organic, hyper-local ingredients from family-owned farms, with a 500% net profit.'
        }
      ]
    }
  ]
}

export default data
