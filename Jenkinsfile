pipeline {
    agent { label 'agent any' } // Tells Jenkins to run this on your specific AWS server

    stages {
        stage('Build Docker Image') {
            steps {
                echo 'Building the Docker Image...'
                sh 'docker build -t my-auth-app:latest .'
            }
        }
        stage('Deploy Container') {
            steps {
                echo 'Deploying to Node1...'
                // Stop and remove the old container if it exists, so we can deploy the new one
                sh 'docker stop my-auth-container || true'
                sh 'docker rm my-auth-container || true'
                
                // Run the new container on port 3000
                sh 'docker run -d --name my-auth-container -p 3000:3000 my-auth-app:latest'
            }
        }
    }
}
