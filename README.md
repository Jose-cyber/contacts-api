# CONTACTS API

<p float="left">
   <img src="https://sonarcloud.io/api/project_badges/measure?project=Jose-cyber_contacts-api&metric=vulnerabilities" alt="vulnerabilities"/>
   <img src="https://sonarcloud.io/api/project_badges/measure?project=Jose-cyber_contacts-api&metric=bugs" alt="bugs"/>
   <img src="https://sonarcloud.io/api/project_badges/measure?project=Jose-cyber_contacts-api&metric=security_rating" alt="security_rating"/>
   <img src="https://sonarcloud.io/api/project_badges/measure?project=Jose-cyber_contacts-api&metric=code_smells" alt="code_smells"/>
   <img src="https://sonarcloud.io/api/project_badges/measure?project=Jose-cyber_contacts-api&metric=reliability_rating" alt="reliability_rating"/>
</p>

This project is a simple contact API, which integrates with a postgresql database and uses an SMTP integration to send an email to the administrator informing the contact data when sending a post to the route(/api/v1/contacts/send).

<img src="docs/fluxograma-contacts-send.svg" width="600"/>

<p>
You can also use the api route (/api/v1/contacts/list) to list all contacts since they are all saved in the database.<br>
You you can also delete some contacts from the database using the route(/api/v1/contacts/delete).
</p>

**Requirements**:
<ul>
  <li>Database: Postgres</li>
  <li>SMTP: smtp account</li>
</ul>

## Run local:
Command:
<pre>
$ npm install
$ npm run dev
</pre>

## Run migrations:
Run:
<pre>
$ npm run migrate
</pre>
Rollback:
<pre>
$ npm run unmigrate
</pre>

## Run seeds:
command:
<pre>
$ npm run seeds
</pre>

## Using docker:

Build:
<pre>
$ docker build -t contacts-api -f Dockerfile .
</pre>

Run:
<pre>
$ docker run -d \
    --env-file=.env \
    -p5000:8000 \
    contacts-api
</pre>


Image on my own docker repository:

<a href="">contacts-api</a>

