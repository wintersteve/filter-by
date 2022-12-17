# filter-by
A lightweight filter util to make client-side data filtering a breeze.

## Installation
```npm i --save filter-by```

## Usage
```javascript
import { filterBy } from 'filter-by';

const data = [{ age: 21, name: "John Doe" }, { age: 40, name: "Jane Doe" }];

const filters = [{ field: "age", type: "EQ", value: 21 }];

// [{ age: 21, name: "John Doe" }]; 
filterBy(data, filters);
```
### Types
The following filter types are available

#### EQ 
```{ field: "age", type: "EQ", value: 21 }``` 

#### NEQ
```{ field: "age", type: "NEQ", value: 21 }``` 

#### LT
```{ field: "age", type: "LT", value: 21 }``` 

#### LTE
```{ field: "age", type: "LTE", value: 21 }```

#### GT
```{ field: "age", type: "GT", value: 21 }```

#### GTE
```{ field: "age", type: "GTE", value: 21 }```

#### RANGE
```{ field: "age", type: "RANGE", value: [20, 30] }``` 

#### LIKE
```{ field: "name", type: "LIKE", value: "%value%" }```

#### ILIKE
```{ field: "name", type: "LIKE", value: "%value%" }```

### Multi Value Support 
We can check if any of the specified values can be found inside the data array.

```{ field: "name", type: "LIKE", value: ["string1", "string2", "%string3%"] }```

Works with every filter type.

### Multi Key Support
We can check if any of the specified values can be found across different fields in the data array.

```{ field: ["firstName", "lastName'], type: "ILIKE", value: "hudson" }```

Works with every filter type.

### Helper Functions
There is a helper function to create a filter for every filter type.
We have to wrap the filter utils inside ```createFilters<DataType>``` for TypeScript support and field type inference.

```javascript
import { filterBy, createFilters, eq, neq, gte } from 'filter-by';

const filters = createFilters<Data>([
  eq("age", [23, 21]),
  neq("name", "John"),
  gte("score", 100),
]);

filterBy(data, filters)
```
