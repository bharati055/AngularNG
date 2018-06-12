
# Spectrum OnDemand Self Care Portal - QA

This project is aimed to Automate SPOD Application QA.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

# Spectrum OnDemand Self Care Portal - QA

This project is aimed to Automate - Spectrum OnDemand Self Care Portal QA.


## Getting Started

These instructions will get you a copy of the project up and running on your local machine. See deployment for notes on how to deploy the project on a live system.


### Prerequisites

NodeJS

NPM

Git

Any Editor (Sublime, Atom, Visual Studio Code etc.)

Nodemon - Optional

### Installing

Clone the repo locally
```
$ git init
Initialized empty Git repository in C:/SPOD2QA/spodQARepo/.git/

$ git remote add origin http://dbygitmsprod.pbi.global.pvt/SpodSCP/SpodQA.git

$ git remote -v
origin  http://dbygitmsprod.pbi.global.pvt/SpodSCP/SpodQA.git (fetch)
origin  http://dbygitmsprod.pbi.global.pvt/SpodSCP/SpodQA.git (push)

$ git pull origin master
remote: Counting objects: 3003, done.
remote: Compressing objects: 100% (2073/2073), done.
remote: Total 3003 (delta 772), reused 2988 (delta 765)
Receiving objects: 100% (3003/3003), 3.12 MiB | 1.40 MiB/s, done.
Resolving deltas: 100% (772/772), done.
From http://dbygitmsprod.pbi.global.pvt/SpodSCP/SpodQA
 * branch            master     -> FETCH_HEAD
 * [new branch]      master     -> origin/master


```

Then

```
npm install
```

Once all the dependencies are installed

```
node app.js
```
Or
```
nodemon app.js
```


Then

```
To Run automation:
protractor firefox.conf.js

