# OsservaPrezzi-Connector

## API v1

### Soon available

## Legacy APIs

### Get pumps via geolocation(coordinates)

Path: `/api/legacy/pumps/query?latitude={latitude}&longitude={longitude}`

Fields:

| Name      | Format                                  |
| --------- | --------------------------------------- |
| latitude  | Latitude number with 15 decimal digits  |
| longitude | Longitude number with 15 decimal digits |

Example: `/api/legacy/pumps/query?latitude=45.731339159322104&longitude=9.391183295883996`

### Get pumps via position(manual search)

Path: `/api/legacy/pumps/query?region={region}&province={province}&town={town}`

Fields:

| Name     | Format                                |
| -------- | ------------------------------------- |
| region   | Complete name of the region           |
| province | Standard 2 letters code for provinces |
| town     | Complete name of the town             |

Example: `/api/legacy/pumps/query?region=Lombardia&province=MI&town=Sesto%20San%20Giovanni`

---

You can find the possible values for the fields under `/static/json` folder in the repo.

## Commits history

### 2022-04-27

#### Implementing search

- changed fields in legacy API functions
- added some js for future search implementation
- updated README.md

#### Fixed search by ID issue

- `nomeImpianto` field used instead of `name` to get informations about pump
- updated README.md

### 2022-04-26

#### Focus on legacy API

- legacy API work
- fixed some issues
- updated README.md

### 2022-03-26

#### Complete refactor

- completely changed project structure
- implemented MVC paradigm
- started working on completely new API
- legacy API will be back soon for compatibility
- updated README.md

### 2022-02-19

#### Minor changes

- refactored diesel to petrol
- added sorting to results since the api native feature does not work
- added all available fuels in a separate json file for future support
- updated README.md

### 2021-09-14

#### Added Log file

- added log file for easier error detection
- updated README.md

### 2021-09-14

#### Correction in cors support

- correction in cors support
- updated README.md

### 2021-09-14

#### Added cors support

- added cors support
- updated README.md

### 2021-09-14

#### Working API

Added support for

- get pumps via manual search
- get pumps via coordinates

### 2021-09-04

#### First commit

### 2021-09-04

#### Initial commit
