# Task Management App (Dockerized & Deployed on AWS)

This is a simple **Task Management Application** built with **Node.js**, **Express.js**, and **MongoDB**. It allows users to add, delete, and mark tasks as completed.

The app is fully containerized using **Docker** and deployed on an **EC2 instance** using **AWS ECR** and **Docker Compose** with the following services:

-  `my-app` – Your task manager backend (Node + Express)
- `mongodb` – MongoDB container for database
- `mongo-express` – Web UI to view MongoDB collections

---

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB** (Dockerized)
- **Mongo Express** (UI for MongoDB)
- **Docker & Docker Compose**
- **AWS ECR** (Elastic Container Registry)
- **EC2** (Ubuntu Instance)

---

## How to Deploy on AWS

### 🐳 Build and Push Docker Image to AWS ECR

```bash
# Authenticate Docker to your ECR
aws ecr get-login-password --region <your-region> | docker login --username AWS --password-stdin <your-account-id>.dkr.ecr.<your-region>.amazonaws.com

# Build your app image
docker build -t task-app .

# Tag it for ECR
docker tag task-app:latest <your-ecr-uri>:latest

# Push to ECR
docker push <your-ecr-uri>:latest

ssh -i your-key.pem ubuntu@your-ec2-public-ip

sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ubuntu
newgrp docker

# Optional: Install AWS CLI if not already
sudo apt install awscli -y
aws configure

sudo apt update
sudo apt install docker.io -y
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ubuntu
newgrp docker

# Optional: Install AWS CLI if not already
sudo apt install awscli -y
aws configure

docker-compose -f mongo-compose.yaml up -d
docker-compose -f mongo-compose.yaml down -v

```


