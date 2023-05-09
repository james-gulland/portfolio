import Timeline from '@mui/lab/Timeline'
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineDot from '@mui/lab/TimelineDot'

const career = [
  {
    companyName: 'General Assembly',
    jobTitle: 'Software Engineering Immersive',
    startDate: '2023',
    endDate: '2023',
    description: '12-week immersive course that covered full-stack capabilities, including JavaScript, React.js, HTML, CSS and Python. Involved individual, paired, and group projects, using agile practices such as stand-ups, pair programming, and showcases.',
  },
  {
    companyName: 'Numan',
    jobTitle: 'Lead Product Manager',
    startDate: '2022',
    endDate: '2023',
    description: 'Leading two product teams in the design and development of complex internal web applications. Implemented best practices for product excellence.',
  },
  {
    companyName: 'Subway',
    jobTitle: 'Lead Product Manager',
    startDate: '2020',
    endDate: '2022',
    description: 'Leading digital transformation for the Subway apps across EMEA; scaling up two product divisions, building out the Mobile Order platform from scratch, culture shifting towards data and customer centricity.',
  },
  {
    companyName: 'Pizza Hut Digital Ventures',
    jobTitle: 'Senior Product Manager',
    startDate: '2017',
    endDate: '2020',
    description: 'Launching Pizza Hut digital platform in India. 35% growth rate improvement to conversion, 28% revenue uplift vs existing vendor.  Pizza Hut best project prize winner 2019.',
  },
  {
    companyName: 'New Look',
    jobTitle: 'Product Manager',
    startDate: '2017',
    endDate: '2017',
    description: 'Defining a 2 year strategy for personalisation and recommendations, in order to maximise conversion across the e-commerce funnel.',
  },
  {
    companyName: 'Just Eat',
    jobTitle: 'Product Manager',
    startDate: '2016',
    endDate: '2017',
    description: 'Adding incremental value to the e-commerce funnel; building on and maintaining conversion rates of 30-40%, across all channels.',
  },
  {
    companyName: 'Comic Relief',
    jobTitle: 'Product Owner',
    startDate: '2014',
    endDate: '2015',
    description: 'Owning the product strategy and delivery for the CR fundraising platform; consisting of event registration and sponsorship (e-commerce) for Sport Relief 2016 and Red Nose Day 2015.',
  },
  {
    companyName: 'uSwitch',
    jobTitle: 'Project/Product Manager',
    startDate: '2011',
    endDate: '2014',
    description: 'Owning the product strategy and delivery for the broadband comparison product; assessing product opportunities, working across the business to gather and prioritise requirements, and delivering new feature sets.',
  },
  {
    companyName: 'Orange (now EE)',
    jobTitle: 'Technical Graduate Scheme',
    startDate: '2004',
    endDate: '2011',
    description: '1 of 12 successful candidates from over 3000 applicants across the country to secure a place on the Orange Technical Graduate Scheme.  Consisted of 5 month placements around Technical, Retail, and Marketing, transitioning in a Project Manager role.',
  },
  {
    companyName: 'Toyota',
    jobTitle: 'Web Developer',
    startDate: '2004',
    endDate: '2004',
    description: 'Developed an online parts system for Toyota dealers, to be able to search and order parts according to current stock levels.  Received the Project Prize of the Year 2004, awarded by The British Computing Society (BCS).',
  },
  {
    companyName: 'Electrosonic',
    jobTitle: 'Software Developer',
    startDate: '2002',
    endDate: '2003',
    description: 'Application development in Visual Basic.NET that scheduled audio-visual equipment.  Received Grade A by Kingston University.',
  }
]

const Career = () => {

  return (
    <Timeline className="timeline-wrapper"
      sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    > 
      {career.length > 0 ? (
        career.map((job, index) => {
          const { companyName, jobTitle, startDate, endDate, description } = job
          const isLastItem = index === career.length - 1 
          return (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot className="timelinedot" />
                {!isLastItem && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <div className="timeline-container">
                  <div className="timeline-item-name">
                    <h4>{companyName}</h4>
                    <div>{`${startDate} → ${endDate}`}</div>
                  </div>
                  <div className="timeline-item-job">{jobTitle}</div>
                  <div className="timeline-item-description tile-text">{description}</div>
                </div>
              </TimelineContent>
            </TimelineItem>
          )
        })

      ) :
        <>
          {console.log('error')}
        </>
      }
    </Timeline>
  )
}

export default Career