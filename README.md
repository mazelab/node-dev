# node-dev

This is a nodejs development template with a simple hello world page. 
Used npm modules are [express](https://www.npmjs.com/package/express), [forever](https://www.npmjs.com/package/forever) and [mazehall](https://www.npmjs.com/package/mazehall).

## Requirements

- nodejs
- npm

## Install

In console:

    npm install
    

## Run

In console:

    npm start

## Environment Variables

- PORT (default 3000): changes the port the server is listening on
    
## Development

Use the console output to verify the state of your app.

### Forever

The npm module forever watches all files for changes and then restarts the server. If an error occurs forever will restart until it works again.

## Docker support

    docker run -d -p 3000:3000 -v .:/app node:5-slim sh -c 'cd /app && npm run start-dockerized' 

docker-compose.yml

    dev:
      image: node:5-slim
      volumes:
        - /path/to/myApp:/app
      ports:
        - 3000:3000
      command: sh -c 'cd /app && npm run start-dockerized'
      
      
## Notes

- Watching File changes over mounts might not always work (eg. Virtual Box) or eat your CPU.
