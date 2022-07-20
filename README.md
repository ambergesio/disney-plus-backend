## create Database

npx sequelize-cli db:create


## create models
enter proyect folder with the command cd src

npx sequelize-cli model:generate --name Character --attributes image:string,name:string,age:integer,weight:integer,history:string

npx sequelize-cli model:generate --name Movie --attributes image:string,title:string,date:string,rate:integer

npx sequelize-cli model:generate --name Genre --attributes name:string,image:string

## create tables into database


npx sequelize-cli db:migrate