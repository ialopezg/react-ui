# React UI

> Components & Helper Functions for ReactJS and NodeJS

[![Coverage Status](https://coveralls.io/repos/github/ialopezg/react-ui/badge.svg?branch=main)](https://coveralls.io/github/ialopezg/react-ui?branch=main)

## Table Of Content
- [**Getting Started**](#getting-started)
  - [**Installing**](#installing)
  - [**Properties**](#properties)
    - [**Global**](#datatable)
    - [**Data Options**](#dataoptions)
        - [**Data Columns**](#datacolumns)
        - [**Data Rows**](#datarows)

## Getting Started
### Installing

```sh
$ npm install --save @ialopez/react-ui
```

### Properties
#### DataTable

| Property | Type                        | Required | Default | Description                                            |
|----------|-----------------------------|----------|---------|--------------------------------------------------------|
| title    | string                      | false    | null    | DataTable title                                        |
| data     | [DataOptions](#dataoptions) | true     |         | Data options. Contains the column and row collections. |


##### Data

| Property | Type        | Required | Default | Description                                                              |
|----------|-------------|----------|---------|--------------------------------------------------------------------------|
| columns  | DataColumns | true     | []      | An array of [DataColumns](#) objects that defines the DataTable columns. |
| rows     | DataRows    | true     | []      | An array of [DataRows](#) objects that defines the DataTable columns.    |

#### Columns

Represents an array of DataColumn objects of a DataTable component.

| Property   |   Type   | Required |    Default    | Description                                                                                               |
|:-----------|:--------:|:--------:|:-------------:|:----------------------------------------------------------------------------------------------------------|
| id         |  string  |   true   |               | Column ID (`must be unique`).                                                                             |
| label      |  string  |   true   |               | Column label.                                                                                             |
| size       |  string  |  false   |               | Column size (between 1px and 15px).                                                                       |
| editable   | boolean  |  false   |     false     | Whether column value is editable.                                                                         |
| type       |  string  |  false   |    string     | Column content type. Possible values: `boolean`, `text`, `number`, `date`, `datetime`, `time`.            |
| component  |  string  |  false   |               | Component when row value is editable (`input`, `textarea`, `select`, etc.).                               |
| format     |  string  |  false   | locale format | Column date format when type is date. Required only when column type is `date`.                           |
| options    |  Option  |  false   |      []       | An array of [Option](#option) objects for select components. Required only when component type is select. |
| required   | boolean  |  false   |     false     | Whether column content is required.                                                                       |
| validation | Function |  false   |               | A callable function to validate column data values.                                                       |

#### Rows

Represents an array of DataRow objects of a DataTable component.

| Property   |   Type   | Required |    Default    | Description               |
|:-----------|:--------:|:--------:|:-------------:|:--------------------------|
| id         |  string  |   true   |               | Row ID.                   |

> **Note**: All other values will be cast as key pair object according the column definition.


### Contributors

* **[Isidro A. Lopez G.](https://github.com/ialopezg)**