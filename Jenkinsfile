pipeline {
    agent any
    tools {
        nodejs 'node-20'
    }
    stages {
        stage('Clone Project') {
            steps {
                git branch: 'qa', url: 'https://github.com/MishelEspinoza07/isc-system-web.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install -g yarn'
                sh 'yarn install'
            }
        }
        stage('Install Cypress') {
            steps {
                sh 'yarn add cypress --dev'
            }
        }
        stage('Install Xvfb and Dependencies') {
            steps {
                sh 'apt-get update && apt-get install -y xvfb libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 libx11-xcb1'
            }
        }
        stage('Run e2e Tests') {
            steps {
                sh 'xvfb-run --auto-servernum -- npx cypress run --spec "cypress/e2e/login.cy.ts"'
            }
        }
    }
}