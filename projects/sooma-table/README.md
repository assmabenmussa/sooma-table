# SoomaTable

Angular table generator which allows to declare tables with minimal effort.
To install run the following command: `npm install sooma-table`

## Features
* Generates table
* Adds action buttons to each row [view, edit, delete]

## Dependencies
This component depends on **Angular ^8.x.x* and **Bootstrap 4.x.x**.

## Usage Examples
Here, you will find a [live demo](https://stackblitz.com/edit/sooma-table)

## Walkthrough
let's say you have a list of dogs you would like to display in a table. A dog object has the following format:

```typescript
{name: ..., breed: ..., birthday: ..., cute_level:...}
```
the table builder will need three things in its object: `title`, `attribute`, and `type`

`title` is going to be the actual text displayed in the table heading.
`attribute` is going to be each attribute in the object.
`type` is used to specify whether the displayed data will be a _date_, an _icon_, or _text_.

you can define an array like:
```typescript
table_title_and_attributes = [
      {title: "name", attribute: "name", type: "text"}, 
      {title: "breed", attribute: "breed", type: "text"}, 
      {title: "birthday", attribute: "birthday", type: "date"}, 
      {title: "cuteness level", attribute: "cute_level", type: "text"},
      {title: "fas fa-cog", attribute: ["delete","edit","show"], type: "icon"}
    ];
```
If you have a list of dog data like:

```json
{
    "data": [
        {
            "name": "Mr.Fluffy",
            "breed": "Golden Retriever",
            "birthday": "2008-09-08T11:13:04.698Z",
            "cute_level": 100
        },
        {
            "name": "T-Rex",
            "breed": "Bulldog",
            "birthday": "2008-07-11T11:13:04.698Z",
            "cute_level": 100
        },
        {
            "name": "Blue",
            "breed": "Husky",
            "birthday": "2001-02-01T11:13:04.698Z",
            "cute_level": 100
        },
    ]
}
```
You can define an array for the data like this:
```typescript
    dogs: any[];
```
and retrieve the dog data from the backend through a service and call a function that executes the service like

```typescript
    getDogs(){
        this.dogsService.get()
            .subscribe(res => {
                this.dogs = res["data"];
            });
    }
```
in the HTML you simply define the table where you want it to display like:
```HTML
    <sooma-table    [headings]="table_title_and_attributes"
                    [data]="dogs"></sooma-table>
```

> Note: you can also just define the array data inside of the component. 

## Further help

To get more help, open an issue or contact me on **Twitter** @assmabenmussax
