FROM node:20 
WORKDIR /app 
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 8067 
CMD ["npm", "start"]

// .dockeringonre 
// -t : tag name 


// 1. docker build -t frontend:version1 .    -> image_name:tag_name -> . = root dir  => IMAGE BUILDING 
// 2. docker run -p 8067:3000 frontend:version1  -> port mapping to docker port to react running port => CONTAINERISING 
// 3. docker hub -> login -> new repository 
// 4. terminal login -> two commands to build tag and push image 
// 5. docker tag frontend:version1 jawagalsrinath/employeeform:version1
// 6. docker push jawagalsrinath/employeeform:version1                 
