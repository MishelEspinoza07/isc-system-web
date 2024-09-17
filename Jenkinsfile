pipeline {
    agent any
    tools {
        nodejs 'node-20'
    }
    stages {
        stage('Clone Project') {
            steps {
                git 'https://github.com/MishelEspinoza07/isc-system-web.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
    }
}