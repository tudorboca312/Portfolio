function calculateTime(startDate, endDate) {
  const end = endDate || new Date();
  const yearDiff = end.getFullYear() - startDate.getFullYear();
  const monthDiff = end.getMonth() - startDate.getMonth();

  // Calculate the total difference in months
  const totalMonthDiff = yearDiff * 12 + monthDiff;

  // Convert the total difference in months to years and remaining months
  const years = Math.floor(totalMonthDiff / 12);
  const months = totalMonthDiff % 12;

  // Construct the time string
  let timeStr = "";
  if (years > 0) {
    timeStr += years > 1 ? `${years} years ` : `${years} year `;
  }
  if (months > 0) {
    timeStr += months > 1 ? `${months} months` : `${months} month`;
  }

  return timeStr;
}

const jobs = [
  // {
  //   title: "Web Developer",
  //   description:
  //     "Embarking on a web development journey, I've honed skills in JavaScript, ReactJS, and Redux over a year. My portfolio, featuring projects executed with HTML, CSS, Bootstrap, TailwindCSS, and Material UI, reflects proficiency in these technologies. Eager to contribute, I am poised to transition my passion for web development into a professional realm.",
  //   time: calculateTime(new Date(2022, 5)),
  //   startDate: new Date(2022, 2),
  // },
  // {
  //   title: "Service Now Developer",
  //   description:
  //     "As a ServiceNow Developer for a year, I managed the ticketing platform, troubleshooted basic issues, and collaborated with my team to implement new features as per client requests, ensuring smooth operation and continual platform enhancement.",
  //   time: calculateTime(new Date(2022, 5), new Date(2023, 5)),
  //   startDate: new Date(2022, 5),
  //   endDate: new Date(2023, 5),
  // },

  {
    title: "Junior System Administrator",
    description:
      "Oversaw and maintained production and development servers for diverse clients, ensuring seamless operations. Proactively identified and resolved issues, guaranteeing optimal performance and minimizing downtime. My role was pivotal in ensuring all systems functioned flawlessly, contributing to enhanced customer satisfaction and operational efficiency.",

    time: calculateTime(new Date(2022, 10), new Date(2023, 5)),
    startDate: new Date(2022, 9),
    endDate: new Date(2023, 4),
  },
  {
    title: "Tech Customer Service",
    description:
      "I served as first-line Tech Customer Support, overseeing 15 global clients. I worked extensively in ServiceNow, Azure, and Active Directory, swiftly resolving diverse software issues. This role enhanced my problem-solving skills and technical expertise.",
    time: calculateTime(new Date(2020, 9), new Date(2022, 10)),
    startDate: new Date(2020, 8),
    endDate: new Date(2022, 9),
  },
];

export { jobs };
