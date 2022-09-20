create table cinema(
	cinemaId int primary key identity(1,1),
	cinemaName varchar(500),
	cinemaCapacity varchar(500)
)

create table movies(
	moviesId int primary key identity(1,1),
	name varchar(500),
	description varchar(500),
	cinema varchar(500),
	genre varchar(500),
	mainActor varchar(500),
	producer varchar (500),
	status varchar(500)
)

create table genre(
	genreId int primary key identity(1,1),
	genreName varchar(500),
	genreDescription varchar(500)
)

create table series(
	serieId int primary key identity(1,1),
	name varchar(500),
	description varchar(500),
	cinema varchar(500),
	genre varchar(500),
	mainActor varchar(500),
	producer varchar (500),
	status varchar(500)
)
create table actor(
	actorId int primary key identity(1,1),
	actorName varchar(500),
	actorAge varchar(500),
	moviesPlayed varchar(500),
	actorAdress varchar(500)
)

create table producer(
	producerId int primary key identity(1,1),
	producerName varchar(500),
	producerAge varchar(500),
	moviesMade varchar(500),
	producerAdress varchar(500)
)

create table useri(
	userId int primary key identity(1,1),
	userName varchar(500),
	userPassword varchar(500),
	userEmail varchar(500),
	userPhoneNumber varchar(500)
)
