---
languages: javascript
tags: objects, callbacks, reject, select
---

# Strain
## Getting Started

Run `npm install`

## Tests

Review the `strain.js` file inside the `lib` directory, and then the `strain.spec.js` file inside the `spec` directory. Review each of the tests, and then start implementing your solutions to make each test pass in `strain.js`.

To run the specs follow these commands:
```shell
# first install the new gem to run the tests
gem sources -a http://flatiron:33west26@gems.flatironschool.com
gem install jasmine-flatiron

# to run in the command line run
jasmine-flatiron

#to run in the browser
jasmine-flatiron -b
```

## Background

For example, given the collection of numbers:

- 1, 2, 3, 4, 5

And the predicate:

- is the number even?

Then your `keep` operation should produce:

- 2, 4

While your `discard` operation should produce:

- 1, 3, 5

Note that the union of `keep` and `discard` is all the elements.

### Restrictions

Keep your hands off that filter/reject/whatchamacallit functionality
provided by your standard library!
Solve this one yourself using other basic tools instead.
