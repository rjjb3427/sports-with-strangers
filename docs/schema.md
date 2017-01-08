# Database Schema Information (PostgreSQL)

## Users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
city_id         | integer   | indexed, foreign key
first_name      | string    | not null, indexed, unique
location        | string    | not null
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
image           | string    | (profile image for hosting)
blurb           | text      | (optional, for host users)

## Cities
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
image       | string    | not null
tagline     | string    | not null

## Events
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
city_id     | integer   | not null, foreign key (belongs to city), indexed
host_id     | integer   | not null, foreign key (belongs to user), indexed
time        | integer   | not null
capacity    | integer   | not null 
title       | string    | not null
location    | string    | not null
sport       | string    | not null
created_at  | timestamp | not null

## Attendees
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
event_id     | integer  | not null, foreign key
user_id     | integer   | not null, foreign key
created_at | timestamp  | not null
