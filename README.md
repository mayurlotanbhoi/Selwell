# Senwell - Node.js Backend Developer Challenge

## Hosted Api




# Employee Maneager.

## Table of Contents
- [Description](#description)
- [API Endpoints](#api-endpoints)
- [Setup and Run Locally](#setup-and-run-locally)
- [Decisions and Assumptions](#decisions-and-assumptions)

## Description





## API Endpoints

### Filter by Department : like HR, Developer etc

- **Endpoint:** `/department`
- **Method:** `POST`
- **Request Body:**
  - `department` (string, required): The department name.
- **Response:** Returns a list selected department .

### Sort by salary

- **Endpoint:** `/salary`
- **Method:** `POST`
- **Request Body:**
  - `method` (number, required): Sort by salary : Ascending 1 &&  descending -1.
- **Response:** Returns a list of all data in sorted format.

### Search by name : like first name, last name

- **Endpoint:** `/name`
- **Method:** `POST`
- **Request Body:**
  - `method` (method, required): Search Employee base on last_name or first_name
  - `name` (name, required): Search book Emaplyee base on name
- **Response:** Returns the details of the Emaplyee.

### Get All Employee

- **Endpoint:** `/get`
- **Method:** `GET`
- **Response:** Returns a list of Employee.

### Add Employee

- **Endpoint:** `/insert`
- **Method:** `POST`
- **Request Body:**
     - `all data requerd`
- **Response:** return added Employee.

## Setup and Run Locally

Follow these steps to set up and run the application locally:

1. Clone this repository to your local machine.

```bash
git clone <https://github.com/mayurlotanbhoi/brewapps-book.git>
cd <brewapps-book>
```

2. install all required packeges
```bash
npm i
```

3. add .env file add environment variable mongoDb url

```bash
MONGO_URL <MongDB URL>
```
3. run a command to start app
```bash
npm run dev
```
