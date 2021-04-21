let colors = ['grey', 'green', 'blue', 'yellow', 'red']
var lastPick = null

let pickColor = () => {
  if (!lastPick) {
    lastPick = colors[Math.floor(Math.random() * colors.length)]
    return lastPick
  }
  let currentColor = colors[Math.floor(Math.random() * colors.length)]
  while (currentColor === lastPick) {
    currentColor = colors[Math.floor(Math.random() * colors.length)]
  }
  lastPick = currentColor
  return currentColor
}

export const index = (req, res, next) => {
  let myExperience = [{
    position: 'Research Assistant',
      time: 'January 2021 - present',
    company: 'Boston University',
    description: "• Partner with Assistant Professor Supervisor to develop Android application on interactive fitness tracking.<br>" +
  "• Research and implement algorithms for on device search engine.",
    icon: 'balance',
    color: pickColor()
  }, {
    position: 'Application Development Product Support Specialist (Full-stack developer)',
      time: 'March 2018 - August 2020',
      company: 'IBM Solutions Delivery Co., Ltd.',
      description: "• Lead, teach and handle mobile application development teams as projects assigned.<br>" +
    "• Get and analyse customer’s requirements and develop software features.<br>" +
    "• Present and demonstrate the innovation to the clients and provide technical solutions<br>",
      icon: 'case',
      color: pickColor()
  }, {
    position: 'Senior iOS Developer',
      time: 'March 2017 - March 2018',
      company: 'Nimbl3 Co., Ltd.',
      description: "• Act as the leader of the mobile development team (iOS) and partner up with CTO.<br>" +
    "• Setup a continuous delivery system for all application deployment.<br>" +
    "• Communicate with clients to solve problems with technical aspects.<br>",
      icon: 'city',
      color: pickColor()
  }, {
    position: 'Founder & Chief technical officer',
      time: 'April 2016 - April 2017',
      company: 'Unicorn Studio Co., Ltd.',
      description: "• Have responsibilities in looking at the big picture of all the technical aspects of the company as Full-stack Engineer.<br>" +
    "• Act as a company representative to contact third parties both private and government sector.<br>" +
    "• Generate and implement new business and application \"Glurr Talk\" - online learning.<br>",
      icon: 'lamp',
      color: pickColor()
  }, {
    position: 'iOS Developer',
      time: 'December 2014 - June 2016',
      company: 'Ookbee Co., Ltd.',
      description: "• Manage and handle all company iOS applications.<br>" +
    "• Introduce new features that create better user experiences.<br>" +
    "• Work with start-up partners, creating a new reader system to the company’s application.<br>",
      icon: 'book',
      color: pickColor()
  }, {
    position: 'Software Developer',
      time: 'June 2014 - December 2014',
      company: '500 trends LTD',
      description: "• Acts as the main programmer of the start-up, improving the product, and partnering with the CEO.<br>" +
    "• Develop Java web services that serve a mobile application with Tomcat, Hibernate, MySQL.<br>",
      icon: 'shopping-cart',
      color: pickColor()
  }]
  res.status(200).json(myExperience)
}
