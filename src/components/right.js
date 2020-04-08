import React, { Component } from "react";

class Right extends Component {
  render() {
    return (
      <div className="right">
        <div className="right-inner">
          <div className="introduction">
            <h4>Intro</h4>
            <div className="content">
              <p className="intro-p">
                I am an IT-Professional with over 20 years of experience in
                Infratructure, Systems, and Application Support for highly
                visible, public facing Enterprise applications in the Financial,
                Insurance, and E-commerce industries.
              </p>
              <p className="intro-p">
                I have the skills, training ,and experience needed to help
                develop, support, and maintain software programs.
              </p>

              {/* <p className="intro-p job-plz">{this.props.myGoal}</p> */}
            </div>
          </div>
          <div className="skills">
            <h4 className="category">Skills</h4>
            <div className="content">
              <div className="skill-category">
                <strong>Languages: &nbsp;</strong>
                <span>Java 8, HTML/CSS, JavaScript</span>
              </div>
              <div className="skill-category">
                <strong>Libraries &amp; Frameworks: &nbsp;</strong>
                <span>
                  Spring MVC, Spring Boot, JPA, Maven, jQuery, Bootstrap,
                  MongoDB, PostgreSQL, MariaDB, Express, ReactJS
                </span>
              </div>
              <div className="skill-category">
                <strong>Tools: &nbsp;</strong>
                <span>
                  Git, GitHub, bitbucket, Jira, Confluence, Bamboo, CLI,
                  Postman, JMeter, AppDynamics, Splunk, Unix/Linux, bash, Agile
                </span>
              </div>

              <div className="skill-category">
                <strong>Certifications: &nbsp;</strong>
                <ul className="description">
                  <li>AWS Certified Cloud Practitioner</li>
                  <li>CompTia A+</li>
                  <li>
                    IT Information Library (ITIL) Foundations Certification
                  </li>
                  <li>Splunk Certified Architect 6.3</li>
                  <li>Splunk Certified Admin</li>

                  <li>Splunk Certified Knowledge Manager</li>
                  <li>Splunk Certified Power User</li>
                </ul>
              </div>
            </div>
          </div>
          {/* Education Section */}
          <div className="education">
            <h4 className="category">Training</h4>
            <div className="content">
              <div className="edu-institution">
                <a
                  href="https://www.platformbyps.org/boston/application-developer"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Platform by Per Scholas
                </a>
              </div>
              <div className="edu-program">Java Full-Stack Web Developer</div>
              <div className="edu-description">
                <strong>Description:</strong> Training covered exploration on
                how to be efficient in Agile-Scrum project methodologies using
                Jira. Managed databases requiring SQL and learned how to
                install, configure, connect, query with MariaDB. Additional
                topics included collections, basic I/O, JDBC, JPA, and Spring
                MVC.
              </div>

              <div className="edu-institution">
                <a
                  href="https://generalassemb.ly/blog/tag/web-development-immersive"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  General Assembly
                </a>
              </div>
              <div className="edu-program">
                Web Development Immersive (WDI) Program
              </div>
              <div className="edu-description">
                <strong>Description:</strong> Full Stack web development program
                focusing on ES6 JavaScript, Bootstrap, JSON, jQuery, HTML5,
                CSS3, Ruby, Rails, Node, Express, Ember, React.js, MongoDB,
                Postgress, SQL, GIT, problem-solving, planning, modeling, and
                maintaining applications with client-API architectures, as well
                as software engineering principles including design patterns,
                sorting algorithms, big O notation, recursion, and data
                structures from linked lists to binary trees. This program
                requires work in teams and independently to build functioning
                sites that solve real- world business problems.
              </div>
            </div>
          </div>
          {/* Experience Section */}
          <div className="experience">
            <h4 className="category">Experience</h4>
            <div className="content">
              <div className="exp-item">
                <div className="job">
                  <a
                    className="company"
                    href="https://www.tjx.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    TJX Companies
                  </a>
                  <div className="duration">Feb. 2020 &mdash; March 2020</div>
                </div>
                <div className="title">
                  Software Engineer Co-op (Contractor)
                </div>
                <ul className="description">
                  <li>
                    Support, monitor, and maintain critical web-functionality of
                    24/7 e-Commerce sites
                  </li>
                  <li>
                    Initiated GitFlow branching/merging strategy to improve
                    speed, efficiency, and scalability of the build process
                  </li>
                  <li>
                    Collaborated with Rackspace to review Jenkins pipeline to
                    streamline the Continuous Integration (CI) practices
                  </li>
                  <li>
                    Supported the software development life cycle and Agile
                    development methodologies
                  </li>
                  <li>
                    Leveraged Application Performance Management (APM) and web
                    analytics tools such as Splunk, AppDynamics, Google
                    Analytics, and Omniture / Adobe Analytics
                  </li>
                  <li>
                    Gained valuable experience with Oracle ATG, Endeca, OMS, ESB
                    e-Commerce platform
                  </li>
                </ul>
              </div>
              <div className="exp-item">
                <div className="job">
                  <a
                    className="company"
                    href="https://www.leisurepassgroup.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Leisure Pass Group
                  </a>
                  <div className="duration">Sept. 2019 &mdash; Feb. 2020</div>
                </div>
                <div className="title">
                  Software Application Support Engineer / Java developer
                </div>
                <ul className="description">
                  <li>
                    Built and Maintained Continuous Integration with CircleCI
                    and Bamboo to build, test, and deployment
                  </li>
                  <li>
                    Managed, and performed deployment of software components
                    into lower and Production environments
                  </li>
                  <li>
                    Troubleshoot compile and build failures, and facilitated
                    resolution
                  </li>
                  <li>
                    Proven ability to excel working within in 2-weeks sprint
                    iterative agile development environment
                  </li>
                  <li>
                    Acquired AWS certification and increased working knowledge
                    with EC2, ELB, S3, and RDS
                  </li>
                  <li>
                    Utilized JUnit for unit testing, IntelliJ for static
                    analysis, and Clover for code-coverage tools for Java
                  </li>
                  <li>
                    Developed React and Java code using Git with repositories in
                    GitHub
                  </li>
                  <li>
                    Heavily use SQL against MySQL and NoSQL for MongoDB to
                    manage app and troubleshoot issues
                  </li>
                  <li>
                    Implemented API test automation test automation for Postman,
                    JMeter
                  </li>
                  <li>
                    Worked to continuously identified opportunities for
                    automation and operational efficiencies
                  </li>
                </ul>
              </div>

              <div className="exp-item">
                <div className="job">
                  <a
                    className="company"
                    href="https://www.vestmark.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Vestmark
                  </a>
                  <div className="duration">June 2018 &mdash; Sept. 2019</div>
                </div>
                <div className="title">
                  Managed Services Team: Systems Engineer
                </div>
                <ul className="description">
                  <li>
                    Monitor, troubleshoot, and triage system health and database
                    backups related issues
                  </li>
                  <li>
                    Troubleshoot issues across the stack (hardware, network,
                    applications, database, storage)
                  </li>
                  <li>
                    Implemented production changes while adhering to
                    standardized change control protocols
                  </li>
                  <li>
                    Utilized APM tools to monitor, track trends, and proposed
                    solutions to recurring issues
                  </li>
                  <li>
                    Monitor and resolve any nightly MS SQL databases backups
                    issues
                  </li>
                  <li>
                    Developed automation scripts using PowerShell for internal
                    monitoring and alerting
                  </li>
                </ul>
              </div>

              <div className="exp-item">
                <div className="job">
                  <a
                    className="company"
                    href="https://www.libertymutual.com"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Liberty Mutual Insurance Group (2011 – 2018)
                  </a>
                </div>
                <div className="duration">March 2017 &mdash; June 2018</div>
                <div className="title">Software Developer</div>
                <ul className="description">
                  <li>
                    Produced clean and reusable software in fail-fast, rapid
                    iteration, greenfield, Agile development environment
                  </li>
                  <li>
                    Obtained mastery of Git source control management system for
                    repositories hosted on GitHub and bitbucket
                  </li>
                  <li>
                    Utilized Selenium 2.0 WebDriver, Jest, Enzyme, and Cucumber
                    for functional test automation
                  </li>
                  <li>
                    Created and maintained continuous integration and continuous
                    delivery (CI/CD) process documentation
                  </li>
                  <li>
                    Achieved success in transforming the renewal experience for
                    the personal insurance market
                  </li>
                </ul>
              </div>

              <div className="exp-item">
                <div className="job">
                  <div className="duration">Oct. 2011 &mdash; March 2017</div>
                </div>
                <div className="title">Senior Software / Systems Engineer</div>
                <ul className="description">
                  <li>
                    Designed clear, comprehensive system, technical and
                    infrastructure solutions in the monitoring space, that
                    supported current and future direction
                  </li>
                  <li>
                    Reviewed major infrastructure designs from a monitoring
                    perspective to ensure consistency, maintainability and
                    flexibility with respect to overall system, technical and
                    product architectures within a market
                  </li>

                  <li>
                    Worked effectively with senior systems engineers,
                    developers, software owners (IT and business customers),
                    production support teams, project managers, and senior
                    managers
                  </li>
                  <li>
                    Provided 24x7 support for IBM’s Websphere Application Server
                    (WAS6.1, 7.x, 8.x), IBMIHS, Weblogic, IIS,Tomcat,
                    Siteminder, LDAP, BigIP, Teradata, Splunk, AppDynamics,
                    Introscope
                  </li>
                </ul>
              </div>

              <div className="exp-item">
                <div className="job">
                  <a
                    className="company"
                    href="https://www.statestreet.com/"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    State Street Corporation (2000 - 2011)
                  </a>
                </div>
                <div className="duration">Nov. 2008 &mdash; Oct. 2011</div>
                <div className="title">Application Support Engineer</div>
                <ul className="description">
                  <li>
                    Maintained, monitored, and supported UNIX/Linux Apps with
                    Oracle Database servers
                  </li>
                  <li>
                    Performed Oracle Database Administration (DBA) tasks to
                    monitor and maintain system health
                  </li>
                  <li>
                    Reviewed and tuned SQL queries to increase system
                    performance
                  </li>
                  <li>
                    Managed the deployment of software components into QA, UAT,
                    Pre-Prod, and Production environments
                  </li>
                  <li>
                    Developed scripts on Solaris Unix and Red Hat Linux using
                    bash and ksh to automate App management
                  </li>
                </ul>
              </div>

              <div className="exp-item">
                <div className="job">
                  <div className="duration">Sept. 2007 &mdash; Nov. 2008</div>
                </div>
                <div className="title">Trade Application Engineer</div>
                <ul className="description">
                  <li>
                    Supported and maintained trading applications and
                    infrastructure
                  </li>
                  <li>
                    Monitored electronic trade and FIX activities for immediate
                    mitigation and resolution
                  </li>
                  <li>
                    Worked with Trading Desk, Market, and Middle Office to
                    resolve any trade issues
                  </li>
                </ul>
              </div>

              <div className="exp-item">
                <div className="job">
                  <div className="duration">Sept. 2004 &mdash; Sept. 2007</div>
                </div>
                <div className="title">
                  Data Center Operations | Night Shift Manager
                </div>
                <ul className="description">
                  <li>
                    Technical Support Manager for the night shift Open Systems
                    support in 24x7 environment
                  </li>
                  <li>
                    Responsible for staff selection, training and development,
                    and performance reviews
                  </li>
                  <li>
                    Maintained staffing and resource management for major data
                    centers in Massachusetts
                  </li>
                  <li>
                    Lead problem management, post mortem analysis, and root
                    cause analysis
                  </li>
                </ul>
              </div>

              <div className="exp-item">
                <div className="job">
                  <div className="duration">June 2001 &mdash; Sept. 2004</div>
                </div>
                <div className="title">Application Support Engineer</div>
                <ul className="description">
                  <li>
                    Provided 3rd tier support for a real-time enterprise online
                    data delivery application in 24x7 environment
                  </li>
                  <li>
                    Deployment Management responsibilities including planning,
                    implementation, and reporting
                  </li>
                  <li>
                    Created and maintained shell and Perl scripts via AutoSys
                    jobs for automation
                  </li>
                  <li>
                    Fulfilled Business Continuity Manager (BCM) needs to track
                    resources during emergency situations
                  </li>
                </ul>
              </div>

              <div className="exp-item">
                <div className="job">
                  <div className="duration">April 2000 &mdash; June 2001</div>
                </div>
                <div className="title">
                  Network Operating Center (NOC) | Communications Analyst
                </div>
                <ul className="description">
                  <li>
                    Supported over 6,000 Solaris, AIX, HP UNIX/NT enterprise
                    servers and applications world wide
                  </li>
                  <li>Monitored system health and application functions</li>
                  <li>
                    Active involvement in problem diagnosis, escalation, and
                    resolution
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Right;
