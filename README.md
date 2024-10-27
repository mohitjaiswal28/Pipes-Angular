# Pipes in Angular 🚀

In Angular, pipes are a powerful feature that allows you to transform data for display in templates. They can be used to format data, manipulate arrays, and perform various transformations on input values in a clean and declarative way.

## What are Pipes ? ✅

1. **Definition**: Pipes are simple functions that take an input value, process it, and return a transformed value.

2. **Usage**: Pipes can be used in Angular templates to format data for display, like dates, currency, or custom transformations.

## Pure and Impure Pipes 🔥

1. **Pure Pipes**: Pure pipes are those that only execute when the input data to the pipe changes. They are stateless and do not depend on anything outside their scope. Angular uses pure pipes by default.

   - They only re-evaluate when the input reference changes.
   - They are efficient for performance because Angular optimizes change detection by running pure pipes only when necessary.
   - Ideal for scenarios where you need a transformation that doesn’t depend on external states.

2. **Impure Pipes**: Impure pipes are those that re-evaluate every time change detection runs, regardless of whether the input data has changed. They can depend on external factors or data that may change.

   - They are called on every change detection cycle.
   - They can be less efficient than pure pipes since they execute more frequently.
   - Useful for scenarios where you want to display dynamic data that can change frequently, like a random number generator or a time display.

## Types of Pipes 📚

1. **Built-in Pipes**: Angular provides several built-in pipes, including:

   1. DatePipe: Formats date values. 📅
   2. CurrencyPipe: Formats numeric values as currency. 💵
   3. DecimalPipe: Formats numbers as decimals. 🔢
   4. PercentPipe: Formats numbers as percentages. 📊
   5. JsonPipe: Converts an object to a JSON string. 📄
   6. SlicePipe: Creates a new array or string containing a subset of the original. ✂️

2. **Custom Pipes**: You can create your own pipes to perform specific transformations on data that are not covered by built-in pipes.

# How to Create and Use a Custom Pipe 🛠️

1. Generate a Pipe: Use Angular CLI to generate a pipe.

```
ng generate pipe customPipeName
```

2. Implement the Pipe Logic

```
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercasePipe' // Name of the pipe
})

export class UppercasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}

```

3. Use the Pipe in the Component Template:

```
<p>{{ 'hello world' | uppercasePipe }}</p>
```

# How to Clone and Run this Project 🖥️

1. Clone the repository:

```
git clone https://github.com/mohitjaiswal28/Pipes-Angular.git
```

2. Navigate to the project directory:

```
cd Pipes-Angular
```

3. Install the dependencies:

```
npm install
```

4. Run the application:

```
ng serve
```
