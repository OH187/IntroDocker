#Indicamos en que imagen se va a basar y la versión de esta
FROM node:18 

#Corremos un comando de linux "RUN" para crear la carpeta donde se guadará nuestra app
RUN mkdir -p /home/app 

#Le indicamos de donde se van a copiar los elementos
COPY . /home/app

#Exponemos un puerto para conectarnos
EXPOSE 3000

#Le indicamos el comando a ejecutar y la ruta del archivo
CMD ["node", "/home/app/index.js"]
