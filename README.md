---
languages: javascript
tags: objects, callbacks, reject, select
resources: 1
---

# Strain
## Getting Started

Review the `strain.js` file inside the `lib` directory, and then the `strain.spec.js` file inside the `spec` directory. Review each of the tests, and then start implementing your solutions to make each test pass in `strain.js`.

`strain` will be a regular JavaScript object that you will attach functions to as properties.  You can then call these functions from the object as if they were methods on an instance.

ex.
```javascripts
  var car = {
    honk: function(){
      console.log('HONK!!!!!!');
    },
    setCarAlarmOff: function(){
      var x = 0;
      while (x < 5) {
        console.log('EEE ERR EEE ERR');
        console.log('WOM WOM WOM');
        x++;
      }
    }
  };

  car.honk();
  // -> HONK!!!!!!
```

These methods will need to accept a callback as an argument.


To run the specs follow these commands:
```shell
# first install the new gem to run the tests
gem sources -a http://flatiron:33west26@gems.flatironschool.com
gem install ironboard

# to run in the command line run
ironboard

#to run in the browser
ironboard -b
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

### Resources
*[Making your Own callbacks](http://stackoverflow.com/questions/2190850/create-a-custom-callback-in-javascript?answertab=votes#tab-top)
