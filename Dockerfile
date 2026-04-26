# Node install
FROM node:20

# app directory তৈরি
WORKDIR /app

# ১. আগে শুধু package.json এবং prisma ফোল্ডার কপি করুন
COPY package*.json ./
COPY prisma ./prisma/ 

# ২. এখন dependency install দিন (এখন prisma generate সফল হবে)
RUN npm install

# ৩. এরপর বাকি সব কোড copy করুন
COPY . .

# backend runs on port 5000
EXPOSE 5000

# dev mode run
CMD ["npm", "run", "dev"]