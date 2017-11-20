# Timeravel Software Development Process

This file documents the overall process, procedures, rules, and conventions to be followed within the Timeravel project.

## General Process Framework

TBD:

* SCRUM-"inspired"
* dates / development cycles
* meetings
* planning


## Task Management

TBD:

* template for writing issues
* defining acceptance criteria / definition of done


## Development Workflow

TBD

* Git Flow
* pair programming
* test-driven development


## Coding Conventions

TBD

* test classes
* code style conventions

## Testing process

- In timeravel we commit ourselves to maintaining the following types of tests in order to hold ourselves to the highest standards of software quality:
    - [Unit Tests](https://martinfowler.com/bliki/UnitTest.html)
        - As we are commiting ourselves to a TDD-based devlopment process, Unit tests shall be written in a timely manner before the production code. Additionally, they shall be run on every branch and every time a merge request is merged.
    - Integration Tests
        - Shall be run on every branch and every time a merge request is merged.
    - E2E tests (End-to-End tests)
        - Shall be run every time a merge request is merged.
    - Explorative tests
        - Shall be run periodically. 
    - Security
        - Shall be run periodically.