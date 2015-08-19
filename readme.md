## Youdo implemented with Node.js 

Web app to find tasks and post jobs 

**Dependencies** 

* node.js > 0.10 
* mysql/mariadb 

Nice to have [PM2](https://github.com/Unitech/pm2) process manager for node 

## Installation 

```
git clone https://github.com/artsoroka/youdo && cd youdo 

npm install 

``` 

Create database tables 

```
mysql -u root youdo < sql_schema/*.sql
```

Run application 

```
node app/app.js 
```

Or use PM2 ```processes.json``` file 

```
pm2 start processes.json 
```





