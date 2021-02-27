```
.----------------.  .----------------.  .----------------.  .----------------. 
| .--------------. || .--------------. || .--------------. || .--------------. |
| |      __      | || |     ______   | || | ____    ____ | || |  _________   | |
| |     /  \     | || |   .' ___  |  | || ||_   \  /   _|| || | |_   ___  |  | |
| |    / /\ \    | || |  / .'   \_|  | || |  |   \/   |  | || |   | |_  \_|  | |
| |   / ____ \   | || |  | |         | || |  | |\  /| |  | || |   |  _|  _   | |
| | _/ /    \ \_ | || |  \ `.___.'\  | || | _| |_\/_| |_ | || |  _| |___/ |  | |
| ||____|  |____|| || |   `._____.'  | || ||_____||_____|| || | |_________|  | |
| |              | || |              | || |              | || |              | |
| '--------------' || '--------------' || '--------------' || '--------------' |
 '----------------'  '----------------'  '----------------'  '----------------' 
```

![github action](https://github.com/israteneda/acme/workflows/tests/badge.svg)

Hello !

In this space I provide everything needed to run the console program and an overview of how I did it.

## Quickstart install

```js
{
 npm: 6.14.4 or higher ✅
 node: v12.18.0 or higher ✅
}
```

Clone the project:

```cmd
git clone https://github.com/thegreatyamori/acme-exercise
```

Go to the app directory:

```cmd
cd acme-exercise
```

Install dev dependencies:

```cmd
npm install
```

Run:

```cmd
npm start
```

Run tests:

```cmd
npm run test
```

## Usage

After running the program, simply enter the `txt` path or leave blank to run test data.

> You can use absolute or relative path.

![](docs/img.jpg)

## Problem Description

Exercise

The company ACME offers their employees the flexibility to work the hours they want. They will pay for the hours worked based on the day of the week and time of day, according to the following table:

#### Monday - Friday

---

| Start Hour | Finish Hour | Price/h |
| ---------- | ----------- | ------- |
| 00:01      | 09:00       | 25 USD  |
| 09:01      | 18:00       | 15 USD  |
| 18:01      | 00:00       | 20 USD  |

#### Saturday and Sunday

---

| Start Hour | Finish Hour | Price/h |
| ---------- | ----------- | ------- |
| 00:01      | 09:00       | 30 USD  |
| 09:01      | 18:00       | 20 USD  |
| 18:01      | 00:00       | 25 USD  |

The goal of this exercise is to calculate the total that the company has to pay an employee, based on the hours they worked and the times during which they worked. The following abbreviations will be used for entering data:

| Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday |
| ------ | ------- | --------- | -------- | ------ | -------- | ------ |
| MO     | TU      | WE        | TH       | FR     | SA       | SU     |

Input: the name of an employee and the schedule they worked, indicating the time and hours. This should be a .txt file with at least five sets of data. You can include the data from our two examples below.

Output: indicate how much the employee has to be paid

| Input                                                                      | Output                              |
| -------------------------------------------------------------------------- | ----------------------------------- |
| RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00 | The amount to pay RENE is: 215 USD  |
| ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00                           | The amount to pay ASTRID is: 85 USD |

## Architecture

I used a small component diagram based on the C4 architecture. This diagram allows me to see in a general way how the different components communicate in the resolution of the exercise.

<iframe frameborder="0" style="width:100%;height:553px;" src="https://viewer.diagrams.net/?edit=_blank&layers=1&nav=1&title=dfs.drawio#R7Ztbd9o4EIB%2FDWefkuMLxuSRW9o93bY5m013%2ByhsAWpkySvLAffX70iWsU2cBBIS3I05bbBGo5EljWY%2BZOi5k2jzQaB49ZmHmPYcK9z03GnPcWzLseFNSbJcMrAvcsFSkNAolYJr8hMXLY00JSFOaoqScypJXBcGnDEcyJoMCcHXdbUFp%2FVeY7TE9wTXAaL3pX%2BTUK5y6dDxS%2FlHTJaromd7YMYXoULZjCRZoZCvKyJ31nMngnOZX0WbCaZq8op5ydtdPlC7vTGBmWxowOc%2F1HyABkUBXsG4sdiZsv4XFJlhTjhLOIzZseBKIsKwKJT%2BymKjNNvgIJWEsxm7I4KzSPVstEZxTEmAVG2uTDiWZ3iDRUASbJ9b52YaKJqDi2iVnjOgcOvjkNyp%2BZGZmfTBv6malLHEG3mGKFmCyZFqiheyrIWrZf7umZE4XmERZkEbLTSO0o%2BXd1UdKfToTR%2Fq1Kms1mJ2c3mV3dxe9%2BWnL9%2B%2Bhp9G1vzM3nrBdnXLm3MET1mIVXsbzK1XROLrGJYSBGvYayBbyYiaaj2rYxTcLnWzCadcQBXjDPTHC0JpIeo57kK%2FlBzWuiK39AvkZi6meiKgKAKzMT0oJVLwW9zU7A4LCTNDR6b5nEvJI6iIsESzkEhzs6o4RRKp5v64nGnja%2BXMw2pU6zGYQHNa11ggmuCeP1X%2F3HHMCZPazT21YNa58omJpf%2BrlZpoYZPMvy%2B0VamwUBc2yXyvyaTd0PeuzGkQNpps6NvauUlvunW%2Bamwwe14tEd5URMb9PmAOqyIyUDG1jmc2bFYEZFNeV8Ogka0qIdArGiITbpZb22V0ggvj80XRxKvmYNe4fQZmSIimZsukCaSKPNiW%2BwiHENBNkQu54kvOEJ2V0nG505QXlzp%2FcB4bl%2F2BpczMJkCp5PXdF6Jktd2pD859wlMR4EcG5Jr8hsQSy0f0vFxPDezRlRSYQpi6q2eyA1Zlv2UoEnoL1gFviPxHNT%2F3TOl7pWa6MZZ1IasUrrAgMBlYFDIGE1MxpIrfq3WlKV3KqqVdY2%2FsHHa%2FVd7heC30Dv9Y7lFzjtJX2uwegzdyj8P483cWp1uWLInzmi%2FkGmYDxNdZInFUqExxEggSl7j5DZglRFJ5loVYqPoVPMCJ9jUrVLQBnlr20oCh8yeIct7Ik3U4zAHmMSo0fYnHjClL1RE%2BDLZPMqb7ZoxZZ8ktYxYsGYBLK6ev0KRtdWz49my482Fg6I3Hl1YT1%2FvD0XA6PA5Nuv0dmnTu06Q9aKBJ24ZPjtXX4ZHoWXA5bE3aOlKC8PZMEH678MFqzToU%2BFBcV3L%2BL08P%2BzrHRbucoz2fALdsWXMO%2F3je4fwK7nF8uNRNR0KgrKJgEnlp%2BUoJymTjDerJxrGcqq89qe%2F1hzu%2Bmd9B6anbobycfGdRTHmG8Uvgd7aRAgVqSiy5UvrYGP1NiZgmWUPFCWZhqbfG%2BJaqqV1zcUvYUiVfcAatwOHPRyioM2GKkuR9cbPXcXPHzafnZm%2F4i3Fz8WCsTTn5f3ga6J8sI%2B9LbP3VKPt65RLn22V4N%2Fj5%2Bfv6CzqzW%2Bccr0Xz%2FrF4bWflXtddLl7HOQ4johw6XkxDW%2BQJOFMB93HcgRSngAejhGiNCDESpzBsrEzkA0jOFQshGmh5YuxUjMTqqbkV5rDagFuELbiIzKPjnLCuBAlwgVjn74ux%2FI6xOsZqH2O5lrcnY%2FXf6Em37bYmb9Yy1LEI6%2FmJ7WJfDnJOxUHNlNye4%2BVyDZ0jYbLdopOrvf2jHSdXw3snUf6Or73iSZRBkeeD140klPxEmmASjUVCv4eqLTDZHP3gmokArhDVAAVrqvSDHKoUPenvj8YCB0TpxlwTFUEKvUYhdD5xeyM7KdsUTWAraV3JJVJlpK0vtU19AykzB2MYhfydkVaV6zvS6kjrRKS1%2Fb5gcZpl73ua5b4Rabnte954tOOrnbx8yrRc4Fh7zq8OS5V%2FIrZ8UaqcqjmNCMPl4UCsSUHkli0UBFyE%2BRmFPijIlYpqvqgcO4SFsfCdpbXcjbq81uW1E%2Be1i50ThL3z2tGf0hwWx76m8oXfu7zUB5oqIlVMvZv40%2B%2FiTxd%2FTh9%2FHH8n%2FpzuKfFh8UedGCQvCT%2Fq53oBpxT6zB%2BqaDBC6YZQgvQULVKm63LQ0qEqQEpzrnkKA96Hap8rEWKZthfFsOuYfG80NeiiWRfNTh%2FNdp%2FHeKeLZlAsf6Cdn7eWP3N3Z%2F8B"></iframe>

![](docs/diagram.svg)

I performed a preliminary analysis of the exercise to understand what the problem to be solved was.

## Approach & Methodology

After performing the analysis I created this table to get an overview of how to manipulate the data.

|Start Hours|Finish Hours|MO|TU|WE|TH|FR|SA|SU|
|---|---|---|---|---|---|---|---|---|
|00:01|09:00|25|25|25|25|25|30|30|
|09:01|18:00|15|15|15|15|15|20|20|
|18:01|00:00|20|20|20|20|20|25|25|

- I wrote the actions that the program had to accomplish in order to solve the problem.
- I designed the component diagram.
- I distributed the program design into easy to do tasks.
- I created and configured nodeJS + Jest + Git environment tox the project.
- I designed and develop the tests needed to test the solution to the problem.
- Using a simple files structure, I wrote the code needed to validate and process the input, calculate the working hours for each day, calculate the hourly price for each day and finally the total price.
- I performed the tests and refactored the code in some parts.
- I uploaded the project to GitHub and configured the GitHub Actions to automate the tests.

To develop the solution I took a TDD (Test Driven Development) approach, trying to write as less code as possible. This allowed me to improve the communication flow between components and refactor the code for maintainability reasons.

For task management I used [Notion](https://www.notion.so/ ) using a Kanban board.
![](docs/img1.jpg)

And for time management [Wakatime](https://wakatime.com/).

