Steps in the Direction of a convenient, (fully) automated Travel Expense Tracking Solution:
1. **BlueAnt-Equivalent (Minimum Viable Product)**
- allows manually entering all neccessary Information about a business Trip
- exports the data directly into BlueAnt
- modular: allows adding other exporters for possible future BlueAnt replacements
2. **Automation**
- Triggers
  - searches in Google Calendar to find Events named "Reise" or "Trip"
  - can be manually triggered via Slack-Bot
- accesses GMail via IMAP
  - searches for EMails from DB, Airlines, HRS, etc. that fall into the time priod of the expected travel
  - automatically extracts all neccessary information, Tickets, etc.
  - automatically fills in the BlueAnt Business Expenses Report
- when in doubt, asks the Traveler via Slack or SmartPhone App.
- when all information for a Trip has been filled in, shows the Report to the User and asks for confirmation before moving it to the next state.
- of course it should also be possible to provide the Tickets/Bills manually, f.i. when they were sent
  to a different EMail Address or downloaded.
3. **Camera**
- allows using the SmartPhone Camera to take pictures of Tickets / Bills and automatically attach them to
  the items in a Reisekostenabrechnung (also fill in date automatically assuming that the Photo is taken immidiately after purchase)
- other data must still be provided manually
4. **Image Recognition**
- uses Image Recognition, Optical Character Recognition, QR Code Scanning, and Machine Learning to automatically
  - recognize the type of ticket on the Image (DB, Airline Ticket, Taxi-Bill, Hotel-Bill, etc.)
  - extract all neccessary Information
    - Amount After Tax
    - Date (alternatively take current date)
    - Breakfast included?
    - Distance travelled (important for Tax) (when not available guess based on ticket type)
5. **Assistant**
- use Machine Learning to infer Travel Templates from past trips.
- when a Trip is announced (Calendar / Slack), try to guess which template fits best (allow user to override) and suggest
  - Flights,
  - Hotels, and
  - Train Connections
  matching the schedule.
- of course, suggestions should be based on actual availability (checked online)
- allow users to include additional Tasks for the Assistant into the Templates like
  - ordering a Taxi
  - sending an EMail to the Hotel that one will arrive after 18:00.
