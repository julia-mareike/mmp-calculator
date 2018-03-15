# Vote Calculator - an MMP visualisation tool

This is the beginning of a small personal project, begun as part of Enspiral Dev Academy's development bootcamp.


## Purpose

With this app I hope to provide a simple, highly visual tool to be able to see

* how raw votes are calculated into seat allocation
* a brief and not-too-boring introduction to the Saint-Lague table
* how relatively minor changes in votes can affec the make-up of a government, and
* how coalition building works


After cloning this repo, 

```sh
cd react-to-web-api
yarn
yarn start
```

and navigate to [http://localhost:3000](http://localhost:3000)


## Todos

There is still a lot of work to be done here, not to mention any kind of CSS / design.

From where it is at the moment, the next steps will be to implement Redux to handle the numbers being passed around, process the seat allocation via functionality that can replicate the Saint-Lague table, implement a coalition building once the seats have been allocated, and display everything in clear, easy-to-read graphs and potentially interactive data visualisation.

An even further stretch goal would be to tinker with our current MMP system (i.e. being able to lower the 5% threshold, or remove it completely), to replicate previous election results and see what sort of government could have been formed instead.