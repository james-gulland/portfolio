import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { careers } from "../../data/careers";

const Career = () => {
  return (
    <Timeline
      className="timeline-wrapper"
      sx={{
        padding: 0,
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}
    >
      {careers.length > 0 ? (
        careers.map((job, index) => {
          const { id, companyName, jobTitle, startDate, endDate, description } = job;
          const isLastItem = index === careers.length - 1;
          return (
            <TimelineItem key={id}>
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
          );
        })
      ) : (
        <>{console.log("error")}</>
      )}
    </Timeline>
  );
};

export default Career;
