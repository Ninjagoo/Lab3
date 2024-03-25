pipeline {
    agent any

    stages {
        stage('Execute file') {
            steps {
            
                sh 'https://github.com/Ninjagoo/Lab3/blob/main/app.py'
            }
        }
        stage('Archive') {
            steps {
                archiveArtifacts artifacts: '**/*', excludes: ''
            }
        }
    }
}
