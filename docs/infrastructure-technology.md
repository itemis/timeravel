# Revision Control
Obviously, the project is hosted on github :-) . Accordingly, we are using GIT as a revision control system.

# Ticekting and Issue Tracking System
Our choice of a tracking system was driven by two factors:
- The first one being an easy integration with Github so that we can e.g. refer commits from github.
- Free usage for Open source projects

Accordingly, we chose [Zenhub](https://app.zenhub.com/ "Zenhub Homepage") as it fulfills both these criterias and seems from first hand experience quite flexible.
# Continuous Integration
As a continuous integration system we have decided to use [Travis](http://travis-ci.org/ "Travis Homepage") for several reasons. Among these reasons are the fact that several of the team members are familiar with Travis.

# Build System(s)
- We currently know that we will have a web-based frontend and one or several web-based backends but we are not 100% yet in regards to the exact technologies we will use. 
- For now, if possible, we would like eventually to use something easily integrable with Travis. In case Java is used to implement the backend, we will probably use [Gradle](https://gradle.org/ "Gradle homepage").

# Hosting
We want to use a hosting service that offers free hosting to open source projects. We are still searching for a service that would cover both our backend and frontend needs. For now, as we started experimenting with Angular for the frontend, we also started trying to deploy to [Firebase](https://firebase.google.com/ "Firebase homepage").
